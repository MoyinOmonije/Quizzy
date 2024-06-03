# Quizzy
A ReactJS based multiple-choice quiz webapp based on project. Makes use of Vue, TypeScript, React and EdgeDB.

The app has a timer (progress bar) that visually depicts the amount of time left before the next question is automatically chosen.

For scoring: 5pts are awarded for every correct answer, and 0 are awarded for wrong answers. 


Scores influenced by remaining time: One approach is to calculate the points dynamically based on the remaining time when the user submits the answer. I have an Onclick function in my Quiz component. 

I could have calculated the time as follows:

 // Calculate the points based on the time remaining
    const timeRemaining = duration - counter;
    const timeBonus = timeRemaining > 0 ? Math.floor((timeRemaining / duration) * 10) : 0;
    const pointsAwarded = finalAnswer ? 5 + timeBonus : 0;

The formulae above:
- I would calculate timeRemaining as the difference between the total duration and the current counter value.
- I would compute a timeBonus based on the remaining time, where the bonus points increase as the remaining time decreases.
- I would add the timeBonus to the points awarded for a correct answer.
If the user answers incorrectly, no bonus points are awarded.
Adjust the multiplier *10 in the timeBonus calculation as needed to change the impact of the time bonus on the final score.

