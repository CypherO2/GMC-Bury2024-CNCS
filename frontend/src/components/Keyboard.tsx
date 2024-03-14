import { Button } from "@primer/react";
import { SidebarExpandIcon } from '@primer/octicons-react'
import {Box} from '@primer/react'
import React, { useState } from 'react'
import { BACKEND_SERVER_URL, DEV_MODE } from "../../constants";

let buttonStyle ={
    padding: 5,
};

let buttonStyleCorrect ={
    padding: 5,
    bg: 'success.emphasis'
};

let buttonStyleNearlyCorrect ={
    padding: 5,
    bg: 'attention.emphasis'
};

let buttonStyleUsed ={
    padding: 5,
    bg: 'danger.emphasis'
};


// function getStyle({
//     usedLetters,
//     correctLetters,
//     nearlyCorrectLetters,
//     letter
//   }: {
//     usedLetters: string[];
//     correctLetters: string[];
//     nearlyCorrectLetters: string[];
//     letter: string;
//   }) {
//     if (letter in correctLetters) {
//         return buttonStyleCorrect;
//     } else if (letter in nearlyCorrectLetters) {
//         return buttonStyleNearlyCorrect;
//     } else if (letter in usedLetters) {
//         return buttonStyleUsed;
//     } else {
//         return buttonStyle;
//     }
// }


let setGuess: React.Dispatch<React.SetStateAction<string>> | null = null;
let setError: React.Dispatch<React.SetStateAction<string | null>> = (null as unknown) as React.Dispatch<React.SetStateAction<string | null>>;

export function addToGuess(letter: string, currentGuess: string, e:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    console.log(e)
    if (setGuess != null)  {
        let newGuess = currentGuess += letter;
        if (newGuess.length <= 5) {
            setGuess(newGuess);
            return true;
        }
    }
    return false;
}

export function removeFromGuess(currentGuess: string, e:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (setGuess != null)  {
        let newGuess = currentGuess.substring(0, currentGuess.length - 1);;
        if (newGuess.length <= 5) {
            setGuess(newGuess);
            return true;
        }
    }
    return false;
}

export function checkGuess(currentGuess: string, hiddenWord: string, e:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (setGuess != null)  {
        if (currentGuess.length <= 5) {
            const resp = fetch(`${BACKEND_SERVER_URL}/checkWord`, {
                cache: 'no-store',
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    word: currentGuess,
                    correctWord: hiddenWord
                }),
            });
            resp.then(data => {
                console.log(data)
                data.json().then(result => {
                    console.log(result);
                })
            }).catch(err => {
                console.log(err)
                if (DEV_MODE) {
                    setError(`There was an error while communicating with the backend. Please try again later.\n${err}`)
                } else {
                    setError(`There was an error while communicating with the backend. Please try again later.`)
                }
            })
            return true;
        }
    }
    return false;
}

export default function Keyboard({
    hiddenWord,
    _setError,
  }: {
    hiddenWord: string;
    _setError: React.Dispatch<React.SetStateAction<string | null>>
  }) {
    const [guess, setGuess_] = useState<string>("");
    setGuess = setGuess_;
    setError = _setError;
    console.log(hiddenWord);

    let usedLetters = [];
    let correctLetters = [];
    let nearlyCorrectLetters = [];

    return (
        <>
            {guess}
            <Box sx={{borderRadius: 2, borderWidth: 1, borderStyle: 'solid', borderColor: 'border.default', p: 3, width: '70%'}}>
                <Box sx={{display: 'grid', gridTemplateColumns: '0.4fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr', gridGap: 3}}>
                    <span></span>
                    <Button onClick={e => addToGuess("Q", guess, e)} sx={buttonStyle}>Q</Button>
                    <Button onClick={e => addToGuess("W", guess, e)} sx={buttonStyle}>W</Button>
                    <Button onClick={e => addToGuess("E", guess, e)} sx={buttonStyle}>E</Button>
                    <Button onClick={e => addToGuess("R", guess, e)} sx={buttonStyle}>R</Button>
                    <Button onClick={e => addToGuess("T", guess, e)} sx={buttonStyle}>T</Button>
                    <Button onClick={e => addToGuess("Y", guess, e)} sx={buttonStyle}>Y</Button>
                    <Button onClick={e => addToGuess("U", guess, e)} sx={buttonStyle}>U</Button>
                    <Button onClick={e => addToGuess("I", guess, e)} sx={buttonStyle}>I</Button>
                    <Button onClick={e => addToGuess("O", guess, e)} sx={buttonStyle}>O</Button>
                    <Button onClick={e => addToGuess("P", guess, e)} sx={buttonStyle}>P</Button>
                </Box>
                <Box sx={{display: 'grid', gridTemplateColumns: '0.6fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr', gridGap: 3, paddingTop: 3}}>
                    <span></span>
                    <Button onClick={e => addToGuess("A", guess, e)} sx={buttonStyle}>A</Button>
                    <Button onClick={e => addToGuess("S", guess, e)} sx={buttonStyle}>S</Button>
                    <Button onClick={e => addToGuess("D", guess, e)} sx={buttonStyle}>D</Button>
                    <Button onClick={e => addToGuess("F", guess, e)} sx={buttonStyle}>F</Button>
                    <Button onClick={e => addToGuess("G", guess, e)} sx={buttonStyle}>G</Button>
                    <Button onClick={e => addToGuess("H", guess, e)} sx={buttonStyle}>H</Button>
                    <Button onClick={e => addToGuess("J", guess, e)} sx={buttonStyle}>J</Button>
                    <Button onClick={e => addToGuess("K", guess, e)} sx={buttonStyle}>K</Button>
                    <Button onClick={e => addToGuess("L", guess, e)} sx={buttonStyle}>L</Button>
                </Box>
                <Box sx={{display: 'grid', gridTemplateColumns: '0.0fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.6fr', gridGap: 3, paddingTop: 3}}>
                    <Button onClick={e => checkGuess(guess, hiddenWord, e)} sx={buttonStyle}>ENTER</Button>
                    <Button onClick={e => addToGuess("Z", guess, e)} sx={buttonStyle}>Z</Button>
                    <Button onClick={e => addToGuess("X", guess, e)} sx={buttonStyle}>X</Button>
                    <Button onClick={e => addToGuess("C", guess, e)} sx={buttonStyle}>C</Button>
                    <Button onClick={e => addToGuess("V", guess, e)} sx={buttonStyle}>V</Button>
                    <Button onClick={e => addToGuess("B", guess, e)} sx={buttonStyle}>B</Button>
                    <Button onClick={e => addToGuess("N", guess, e)} sx={buttonStyle}>N</Button>
                    <Button onClick={e => addToGuess("M", guess, e)} sx={buttonStyle}>M</Button>
                    <Button onClick={e => removeFromGuess(guess, e)} sx={buttonStyle}><SidebarExpandIcon/></Button>
                </Box>
            </Box>
        </>
    );
  }