export const jsQuizz = {
    questions: [
        {
            question:
                "What does the acronym IDE stand for in the context of software development?",
            choices: [
                "Integrated Development Environment",
                "Intelligent Design Engineering",
                "International Data Exchange",
                "Interface Design Element",
            ],
            type: "MCQs",
            correctAnswer: "Integrated Development Environment",
        },
        {
            question: "What is ReactJS?",
            choices: [
                "Server-side framework",
                "User Interface framework",
                "both a and b",
                "None of the above",
            ],
            type: "MCQs",
            correctAnswer: "User Interface framework",
        },
        {
            question: " In programming, what is a 'boolean' type used for?",
            choices: ["Storing text values", "Storing whole numbers", "Storing true/false values", "Storing decimal numbers"],
            type: "MCQs",
            correctAnswer: "Storing true/false values",
        },
        {
            question: "In which language is React.js written?",
            choices: ["Python", "Java", "C#", "JavaScript"],
            type: "MCQs",
            correctAnswer: "JavaScript",
        },
        {
            question: "Which of the following is not a fundamental programming language?",
            choices: [
                "Python",
                "HTML",
                "Java",
                "None of the above",
            ],
            type: "MCQs",
            correctAnswer: "HTML",
        },
        {
            question: "What does the term 'API' stand for in programming?",
            choices: ["Application Program Interface", "Associated Programming Integration", "Automated Processing Interface", "Alternative Program Iterator"],
            type: "MCQs",
            correctAnswer: "Application Program Interface",
        },
        {
            question: "Which of the following is true about object-oriented programming (OOP)?",
            choices: ["It focuses on a procedural paradigm", "It does not support inheritance", "It organizes code around data, or objects, rather than functions and logic", "It is limited to a single class structure"],
            type: "MCQs",
            correctAnswer: "It organizes code around data, or objects, rather than functions and logic",
        },
        {
            question: "Which programming language is typically used for developing Android applications?",
            choices: ["Swift", "Java", "C#", "Ruby"],
            type: "MCQs",
            correctAnswer: "Java",
        },
        {
            question: "What does CSS stand for in web development?",
            choices: ["Computer Style Sheets", "Creative Styling Solutions", "Cascading Style Sheets", "Colorful Styling Standards"],
            type: "MCQs",
            correctAnswer: "Cascading Style Sheets",
        },
        
    ],
};

export const resultInitialState = {
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
};