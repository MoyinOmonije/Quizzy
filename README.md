# Quizzy
A small ReactJS based multiple-choice quiz webapp based on project 2 for the anxend interview challenge. Makes use of Vue, TypeScript, React and EdgeDB.

The app has a timer (progress bar) that visually depicts the amount of time left before the next question is automatically chosen.

Unfortunately due to time and some other commitments during the work week, I was not able to implement exactly all of the desired functionality (Avatar and Accesory Select and scores influenced by remaining time.).

However I do know how I would have gone about solving each problem, had there been more time.

Avatar and Accesory select: I could have used the Browser router package in react specifically for routing, from the avatar selection screen, which would have been a screen presenting image options to the user to choose from, in addition with accessories the user could have chosen.

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
