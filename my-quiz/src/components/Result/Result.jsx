import "./Result.css";
import { useState } from "react";

const Result = ({totalQuestions, result, onTryAgain}) => {

    const [name, setName] = useState('');
    const [highScores, setHighScores] = useState([]);
    const [showScores, setShowScores] = useState(false);
    const handleSave = () => {
        const score = {
            name,
            score: result.score
        };
        
        const newHighScores = [...highScores, score].sort((a, b) => b.score - a.score);
        setHighScores(newHighScores);
        setShowScores(true);
        localStorage.setItem('highScores', JSON.stringify(newHighScores));
    }

    return (
        <div className="result">
            <h3>Result</h3>
            <p>
                Total Questions: <span>{totalQuestions}</span>
            </p>
            <p>
                Total Score: <span>{result.score}</span>
            </p>
            <p>
                Correct Answers: <span>{result.correctAnswers}</span>
            </p>
            <p>
                Wrong Answers: <span>{result.wrongAnswers}</span>
            </p>
            <button onClick={onTryAgain}>Try again</button>

        </div>
    );

};

export default Result;

