import { Button } from "@primer/react";
import { SidebarExpandIcon } from '@primer/octicons-react'
import {Box} from '@primer/react'
import React, { useState } from 'react'
import { BACKEND_SERVER_URL, DEV_MODE } from "../../constants";

let buttonStyle ={
    padding: 5,
};

let buttonGreen ={
    padding: 5,
    bg: 'success.emphasis'
};

let buttonOrange ={
    padding: 5,
    bg: 'attention.emphasis'
};

let buttonRed ={
    padding: 5,
    bg: 'danger.emphasis'
};


function getStyle(
    redLetters: string,
    greenLetters: string,
    orangeLetters: string,
    letter: string
) {
    if (greenLetters.indexOf(letter) > -1) {
        return buttonGreen;
    } else if (orangeLetters.indexOf(letter) > -1) {
        return buttonOrange;
    } else if (redLetters.indexOf(letter) > -1) {
        return buttonRed;
    } else {
        return buttonStyle;
    }
}


let setGuess: React.Dispatch<React.SetStateAction<string>> | null = null;
let setError: React.Dispatch<React.SetStateAction<string | null>> = (null as unknown) as React.Dispatch<React.SetStateAction<string | null>>;

export let setRed: React.Dispatch<React.SetStateAction<string>>;
let setGreen: React.Dispatch<React.SetStateAction<string>>;
let setOrange: React.Dispatch<React.SetStateAction<string>>;

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
        if (currentGuess.length == 5) {
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
                    let word = result['word'];
                    if (word == 'Green') {
                        let colours = ""
                        for (let i = 0; i < hiddenWord.length; i++) {
                            let letter = hiddenWord[i].toUpperCase();
                            console.log(letter)
                            colours = colours + letter;
                        }
                        setGreen(colours);
                    }
                    // // word{Letter1: 'Green', Letter2: 'Green', Letter3: 'Green', Letter4: 'Green', Letter5: 'Red'}
                    let colours = ""
                    for (let i = 0; i < hiddenWord.length; i++) {
                        let letter = hiddenWord[i].toUpperCase();
                        console.log(letter)
                        colours = colours + letter;
                        if (word['Letter1'] == 'Green') {
                        
                        }
                    }
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

    const [orange, setOrange_] = useState<string>("");
    const [red, setRed_] = useState<string>("");
    const [green, setGreen_] = useState<string>("");

    setRed = setRed_;
    setOrange = setOrange_;
    setGreen = setGreen_;

    return (
        <>
            <h1 className="m-5 p-5">{guess}</h1>
            <Box sx={{borderRadius: 2, borderWidth: 1, borderStyle: 'solid', borderColor: 'border.default', p: 3, width: '70%'}}>
                <Box sx={{display: 'grid', gridTemplateColumns: '0.4fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr', gridGap: 3}}>
                    <span></span>
                    <Button onClick={e => addToGuess("Q", guess, e)} sx={getStyle(red, green, orange, "Q")}>Q</Button>
                    <Button onClick={e => addToGuess("W", guess, e)} sx={getStyle(red, green, orange, "W")}>W</Button>
                    <Button onClick={e => addToGuess("E", guess, e)} sx={getStyle(red, green, orange, "E")}>E</Button>
                    <Button onClick={e => addToGuess("R", guess, e)} sx={getStyle(red, green, orange, "R")}>R</Button>
                    <Button onClick={e => addToGuess("T", guess, e)} sx={getStyle(red, green, orange, "T")}>T</Button>
                    <Button onClick={e => addToGuess("Y", guess, e)} sx={getStyle(red, green, orange, "Y")}>Y</Button>
                    <Button onClick={e => addToGuess("U", guess, e)} sx={getStyle(red, green, orange, "U")}>U</Button>
                    <Button onClick={e => addToGuess("I", guess, e)} sx={getStyle(red, green, orange, "I")}>I</Button>
                    <Button onClick={e => addToGuess("O", guess, e)} sx={getStyle(red, green, orange, "O")}>O</Button>
                    <Button onClick={e => addToGuess("P", guess, e)} sx={getStyle(red, green, orange, "P")}>P</Button>
                </Box>
                <Box sx={{display: 'grid', gridTemplateColumns: '0.6fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr', gridGap: 3, paddingTop: 3}}>
                    <span></span>
                    <Button onClick={e => addToGuess("A", guess, e)} sx={getStyle(red, green, orange, "A")}>A</Button>
                    <Button onClick={e => addToGuess("S", guess, e)} sx={getStyle(red, green, orange, "S")}>S</Button>
                    <Button onClick={e => addToGuess("D", guess, e)} sx={getStyle(red, green, orange, "D")}>D</Button>
                    <Button onClick={e => addToGuess("F", guess, e)} sx={getStyle(red, green, orange, "F")}>F</Button>
                    <Button onClick={e => addToGuess("G", guess, e)} sx={getStyle(red, green, orange, "G")}>G</Button>
                    <Button onClick={e => addToGuess("H", guess, e)} sx={getStyle(red, green, orange, "H")}>H</Button>
                    <Button onClick={e => addToGuess("J", guess, e)} sx={getStyle(red, green, orange, "J")}>J</Button>
                    <Button onClick={e => addToGuess("K", guess, e)} sx={getStyle(red, green, orange, "K")}>K</Button>
                    <Button onClick={e => addToGuess("L", guess, e)} sx={getStyle(red, green, orange, "L")}>L</Button>
                </Box>
                <Box sx={{display: 'grid', gridTemplateColumns: '0.0fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.6fr', gridGap: 3, paddingTop: 3}}>
                    <Button onClick={e => checkGuess(guess, hiddenWord, e)} sx={buttonStyle}>ENTER</Button>
                    <Button onClick={e => addToGuess("Z", guess, e)} sx={getStyle(red, green, orange, "Z")}>Z</Button>
                    <Button onClick={e => addToGuess("X", guess, e)} sx={getStyle(red, green, orange, "X")}>X</Button>
                    <Button onClick={e => addToGuess("C", guess, e)} sx={getStyle(red, green, orange, "C")}>C</Button>
                    <Button onClick={e => addToGuess("V", guess, e)} sx={getStyle(red, green, orange, "V")}>V</Button>
                    <Button onClick={e => addToGuess("B", guess, e)} sx={getStyle(red, green, orange, "B")}>B</Button>
                    <Button onClick={e => addToGuess("N", guess, e)} sx={getStyle(red, green, orange, "N")}>N</Button>
                    <Button onClick={e => addToGuess("M", guess, e)} sx={getStyle(red, green, orange, "M")}>M</Button>
                    <Button onClick={e => removeFromGuess(guess, e)} sx={buttonStyle}><SidebarExpandIcon/></Button>
                </Box>
            </Box>
        </>
    );
  }