'use client';

import Keyboard from "@/components/Keyboard";
import WordOutput from "@/components/WordOutput";
import React, { useState } from 'react'
import { BACKEND_SERVER_URL, DEV_MODE } from "../../constants";
import { Spinner } from '@primer/react'
import { Blankslate } from '@primer/react/drafts'
import { AlertIcon  } from '@primer/octicons-react'

export default function Game() {
    const [word, setWord] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    if (word == null) {
        const resp = fetch(`${BACKEND_SERVER_URL}/getWord`, { cache: 'no-store', method: 'GET' });
        resp.then(data => {
            data.json().then(result => {
                setWord(result['1stWord']);
            })
        }).catch(err => {
            console.log(err)
            if (DEV_MODE) {
                setError(`There was an error while communicating with the backend. Please try again later.\n${err}`)
            } else {
                setError(`There was an error while communicating with the backend. Please try again later.`)
            }
        })
    }

    if (error) {
        return (
            <Blankslate>
              <Blankslate.Visual>
                <AlertIcon/>
              </Blankslate.Visual>
              <Blankslate.Heading>An error occurred</Blankslate.Heading>
              <Blankslate.Description>
                {error}
              </Blankslate.Description>
            </Blankslate>
          )
    }

    if (word != null) {
        const data = {hiddenWord: (word as string), _setError: setError}
        return (
            <>
                <WordOutput/>
                <Keyboard {...data}/>
            </>
        );
    }

    return (
        <Blankslate>
            <Blankslate.Visual>
            <Spinner/>
            </Blankslate.Visual>
            <Blankslate.Heading>Loading Wordle</Blankslate.Heading>
            <Blankslate.Description>
                Finding a word ...
            </Blankslate.Description>
        </Blankslate>
    )
  }