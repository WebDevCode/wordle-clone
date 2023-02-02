import React, {useState} from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import UserInputForm from '../UserInputForm/UserInputForm';
import GuessResults from '../GuessResults/GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});

function Game() {
	const [text, setText] = useState('');
	const [guessList, setGuessList] = useState([]);

	function handleChange(e) {
		setText(e.target.value.toUpperCase());
	}

	function handleSubmit(e) {
		e.preventDefault();
		const newGuess = [...guessList];
		newGuess.push(text);
		setGuessList(newGuess);
		setText('');
	}
	return (
		<>
			<GuessResults guessList={guessList} />
			<UserInputForm
				text={text}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
			/>
		</>
	);
}

export default Game;
