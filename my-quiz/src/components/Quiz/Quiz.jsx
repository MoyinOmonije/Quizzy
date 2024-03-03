import { useState } from "react"; //create variables and update their state with this hook.
import { resultInitialState } from "../../constants";
import "./Quiz.css";
import AnswerTimer from "../AnswerTimer/AnswerTimer";
import Result from '../Result/Result';

const Quiz = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answerIndex, setAnswerIndex] = useState(null);//usestate hook
    const [answer, setAnswer] = useState('');//usestate hook
    const { question, choices, correctAnswer, type } = questions[currentQuestion];//from constants.js
    const [result, setResult] = useState(resultInitialState);
    const [showResult, setShowResult] = useState(false);
    const [showAnswerTimer, setShowAnswerTimer] = useState(true);


    const onAnswerClick = (answer, index) => {
        setAnswerIndex(index);
        if (answer === correctAnswer) { //if the choice is correct
            setAnswer(true);
        } else {
            setAnswer(false);
        }
    };

    const onClickNext = (finalAnswer) => {
        setAnswerIndex(null);
        setShowAnswerTimer(false);
        setResult((prev) =>
            finalAnswer
                ? {
                    ...prev,
                    score: prev.score + 5, //for every correct answer, add 5
                    correctAnswers: prev.correctAnswers + 1
                } : {
                    ...prev,
                    wrongAnswers: prev.wrongAnswers + 1,
                }
        );

        if (currentQuestion !== questions.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
        } else {
            setCurrentQuestion(0);
            setShowResult(true);
        }

        setTimeout(() => {
            setShowAnswerTimer(true);
        });
    };

    const onTryAgain = () => {
        setResult(resultInitialState);
        setShowResult(false);
    };

    const handleTimeUp = () => {
        setAnswer(false);
        onClickNext(false);
    };

    const getAnswerUI = () => {

        if (type === 'FIB') {
            return <input />;
        }

        return (
            <ul>
                {choices.map((answer, index) => ( //function for passing index
                    <li
                        onClick={() => onAnswerClick(answer, index)}
                        key={answer}
                        className={answerIndex === index ? 'selected-answer' : null}
                    >
                        {answer}
                    </li>
                ))
                }
            </ul>);
    }

    return (
        <div className="quiz-container">
            {!showResult ? (
                <>
                    {showAnswerTimer && <AnswerTimer duration={10} onTimeUp={handleTimeUp} />}
                    <span className="active-question-no">{currentQuestion + 1}</span>
                    <span className="total-question">/{questions.length}</span>
                    <h2>{question}</h2>

                    {getAnswerUI()}

                    <div className="footer">
                        <button onClick={() => onClickNext(answer)} disabled={answerIndex === null}>
                            {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
                        </button>
                    </div>
                </>
            ) : (
                <Result result={result} onTryAgain={onTryAgain} totalQuestions={questions.length} />
            )}

        </div>
    );
};

export default Quiz; 