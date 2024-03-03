import "./AnswerTimer.css";
import { useEffect, useState, useRef } from "react";

function AnswerTimer({ duration, onTimeUp }) {
    const [counter, setCounter] = useState(0);
    const [progressLoaded, setProgressLoaded] = useState(0);
    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCounter((cur) => cur + 1);
        }, 1000); //increase counter after 1000 milliseconds/ 1 second
        return () => clearInterval(intervalRef.current);
    }, []);

    useEffect(() => {
        setProgressLoaded(100 * (counter / duration)); //interval check
        if (counter === duration) { //once the count reaches 10, we want to clear the interval, code follows
            clearInterval(intervalRef.current);
            setTimeout(() => {
                onTimeUp();
            }, 1000);
        }
    }, [counter]);


    return (<div className="answer-timer-container">
        <div
            style={{
                width: `${progressLoaded}%`,
                backgroundColor: `${
                    progressLoaded < 40
                        ? 'lightgreen'
                        : progressLoaded < 70
                        ? 'orange'
                        : 'red'
                }`,
            }}
            className="progress"></div>
    </div>);

}

export default AnswerTimer;