const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    });
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    }) 
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What is 2+2 ?',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false },
            
        ] 
    },
    {
        question: 'What is meant by HP ?',
        answers: [
            { text: 'Horse power', correct: false },
            { text: 'Home Page', correct: false },
            { text: 'Hewlett-Packard', correct: true },
            { text: 'High Performance', correct: false }
            
        ] 
    },
    {
        question: 'What is meant by HP ?',
        answers: [
            { text: 'Hewlett-Packard', correct: true },
            { text: 'Horse power', correct: false },
            { text: 'Home Page', correct: false },
            { text: 'High Performance', correct: false }
            
        ] 
    },
    {
        question: 'What is the full form of "BIOS"?',
        answers: [
            { text: 'Bureau of Information Science', correct: false },
            { text: 'Business Investment on Shares', correct: false },
            { text: 'Braodcasting and Information Organisation', correct: false },
            { text: 'Basic Input Output System', correct: true }
            
        ] 
    },
    {
        question: 'What is the full form of "CBI"?',
        answers: [
            { text: 'Central Bureau of Investigation', correct: true },
            { text: 'Crime Bureau of Investigation', correct: false },
            { text: 'Central Board of Investigation', correct: false },
            { text: 'BCentral Bribe Investigation', correct: false }
            
        ] 
    },
    {
        question: 'Who is the CEO of Amazon.com?',
        answers: [
            { text: 'Kevin J Kennedy', correct: false },
            { text: 'Michel Combes', correct: false },
            { text: 'Jeff Bezos', correct: true },
            { text: 'Jerry  Shen', correct: false }
            
        ] 
    },
    {
        question: 'Who is the CEO of Flipkart?',
        answers: [
            { text: 'Kalyan Krishnamurthy', correct: true },
            { text: 'Mark Zuckerberg', correct: false },
            { text: 'Richard Stallman', correct: false },
            { text: 'Devin Wenigs', correct: false }
            
        ] 
    },
    {
        question: 'What is part of a database that holds only one type of information?',
        answers: [
            { text: 'Report', correct: false },
            { text: 'Record', correct: false },
            { text: 'File', correct: false },
            { text: 'Field', correct: true }
            
        ] 
    },
    {
        question: 'Changing computer language of 1s and 0s to characters that a person can understand is...?',
        answers: [
            { text: 'Highlight', correct: false },
            { text: 'Execute', correct: false },
            { text: 'Decode', correct: true },
            { text: 'Clip art', correct: false }
            
        ] 
    },
    {
        question: 'Which company created the most used networking software in the 1980s?',
        answers: [
            { text: 'Microsoft', correct: false },
            { text: 'Sun', correct: false },
            { text: 'Novell', correct: true },
            { text: 'IBM', correct: false }
            
        ] 
    },
]