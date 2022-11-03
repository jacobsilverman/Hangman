import { Alphabet } from '../Constants/index';

const Letters = ({guesses, handleGuess}) => {
    return (
        <div className="Letters-container">
            {Alphabet.map((item) => <button key={item} disabled={guesses.indexOf(item)>=0} value={item} onClick={(e) => handleGuess(e.target.value)}>{item}</button>)}
        </div>
    );
}

export default Letters;