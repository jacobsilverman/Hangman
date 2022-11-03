const Word = ({gameOver, guesses, wordToGuess}) => {
    console.log(wordToGuess);

    const renderWord = () => {
        const arr = wordToGuess.split('');
        const lostGameClass = (item) => (guesses.indexOf(item) === -1 && gameOver) ? 'red' : '';

        return arr.map((item, index) => <span key={item+index} className={lostGameClass(item)}>{(guesses.indexOf(item) >= 0 || gameOver) ? item : ''}</span>);
    }

    return (
        <div className="Guessing-container">
            {renderWord()}
        </div>
    );
}

export default Word;