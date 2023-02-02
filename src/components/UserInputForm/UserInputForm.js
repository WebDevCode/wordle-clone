import React from 'react';

function UserInputForm({handleChange, handleSubmit, text}) {
	return (
		<>
			<form className="guess-input-wrapper" onSubmit={handleSubmit}>
				<label htmlFor="guess-input">Enter guess:</label>
				<input
					id="guess-input"
					type="text"
					minLength={5}
					maxLength={5}
					value={text}
					onChange={handleChange}
				/>
			</form>
		</>
	);
}

export default UserInputForm;
