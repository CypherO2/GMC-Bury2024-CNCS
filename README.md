# GMC-Bury2024-CNCS: Wordle

## GM SKills - Hackathon Challenge, Wordle-Style Game Development

### Challenge Description

Create a word-guessing game inspired by Wordle, where players attempt to guess a hidden word within a limited number of attempts.

Participants are required to develop a desktop, web or mobile app that allows users to input guesses and recieve feedback on their attempts. The game should provide an engaging and intuitive user experience, encouraging players to strategise and deduce the hidden word efficiently.

### Task Details

1) Develop and application.
2) Implement functionality for players to input their guesses for the hidden word.
3) Provide visual feedback on the correctness of each guess (e.g., highlighting correct letters, indicating misplaced letters).
4) Limit the number of guesses per round (typically 5), with appropriate messaging when the player exceeds the limit.
5) Utilise a provided csv file containing words to select the hidden word for each game round.
6) Ensure the game interface is user-friendly and visually appealing.

### Judging Criteria

**Functionality (30 points)**: Assess the overall functionality of the game, including the accuracy of word selection, input validation and feedback mechanism.

**User Experience (25 points)**: Evaluate the user interface design, responsiveness, and ease of use for players of all skills levels.

**Game Mechanics (20 points)**: Consider the game's mechanics, including the challenge level, fairness of the word selection and the clarity of instructions.

**Innovation (15 points)**: Reward creativity and innovative features that enhance the gameplay experience or distinguish the game from traditional Wordle clones.

**Code Quality (10 points)**: Review the cleanliness, organisation and efficiency of the codebase, including comments and documentation where necessary.

### Submission Guide

Particpants should submit teir completed projects along with the source code and any necessary documentation.

The submission shoudld include instructions for running the game and any dependencies required.

Project must be completed before the the 2:15pm deadline (March 14th 2024) to be eligible for evaluation.

### Additional Notes

Teams are encouragesd to collaborate and leverage thei collective skills to create a ploished and engaging Wordle-style game.

While particpants are provided with a csv file of words, they are free to augment or customise the word list as they see fit.

Creativity in implementing additional features such as hints, difficulty levels or multiplayer functionality will be positively evaluated.

BEst of luck and may the best Wordle-inspired game win!

## Frontend

To see how to run the frontend:
This is the frontend for the Worldle game.

### Getting Started

Make sure you change your server URL inside `sec/constants.ts`. An example of this looks like:

```typescript
export const SERVER_URL = "https://didactic-capybara-g5g6x6gq4x4h95wq-5000.app.github.dev";
```

> [!IMPORTANT]
> If you are running inside a GitHub codespace, make sure the port of the backend **is made public**!
> If the backend port is not public then the frontend cannot connect to the backend.

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Backend

Flask web application that includes functions to retrieve a random word from a CSV file and to check a guessed word against a predefined word, returning color-coded
responses for each letter.

To run the flask server and python code:
```bash
$ cd Backend/

$ pip install flask

$ pip install flask_cors

$ python Wordle.py
```

## How to play

Make a guess on the 1st word in the Wordle.
If the word is wrong, you may guess again, but be warned, you only have 5 guesses.

## Extra

### Dependencies

- [Random Library](https://docs.python.org/3/library/random.html)
- [Pandas Library](https://pandas.pydata.org/)
- [Flask](https://flask.palletsprojects.com/en/3.0.x/)
- [Flask_CORS](https://flask-cors.readthedocs.io/en/latest/)
- [Wordle Functions](/Backend/WordleFunc.py)
- [Github Primer](https://primer.style/)
- [NextJS](https://nextjs.org/)
- [React](https://react.dev/)
- [ReactDOM](https://legacy.reactjs.org/docs/react-dom.html)
- [Styled Components](https://styled-components.com/releases)

### Dev Dependencies

- [React](https://react.dev/)
- [ReactDOM](https://legacy.reactjs.org/docs/react-dom.html)
- [NodeJS](https://nodejs.org/docs/latest/api/)
- [Eslint](https://nextjs.org/docs/app/building-your-application/configuring/eslint)
- [Eslint Config Next](https://www.npmjs.com/package/eslint-config-next)
- [TypeScript](https://www.typescriptlang.org/)

## Credit

### Samuel Hulme

### Nik Todorov

### [Calum Wright](https://www.linkedin.com/in/calum-wright-bba966255/)

### Charles Presley