// Importing questions
import { questions } from "./questions.js"; // Import questions from a separate file

// Get DOM (Document Object Model) elements for question, answer buttons, next button, timer, progress bar and progress bar container
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const backButton = document.getElementById("back-btn"); // Select the back button element
const timerElement = document.getElementById("timer");
const progressBarElement = document.getElementById("progress");
const questionCounterElement = document.getElementById("question-counter");
const correctCountElement = document.getElementById("correct-count");
const incorrectCountElement = document.getElementById("incorrect-count");
const correctSound = new Audio('audio/correct_answer.mp3');
const incorrectSound = new Audio('audio/incorrect_answer.mp3');

let currentQuestionIndex = 0; // Track current question index
let score = 0; // Track user's score
let incorrectScore = 0; // Track user's incorrect answers
let timeLeft = 3900; // 65 minutes in seconds
let timerInterval;
let quizEnded = false;

// Store a subset of 40 random questions
let selectedQuestions = [];

// Start the quiz by resetting the question index and score, and show the first question
function startQuiz() {
  quizEnded = false;
  currentQuestionIndex = 0; // Reset question index
  score = 0; // Reset score
  incorrectScore = 0; // Reset incorrect score
  timeLeft = 3900; // Reset timer
  nextButton.innerHTML = "Next"; // Update next button text
  backButton.innerHTML = "Back"; // Update back button text

  // Select 40 random questions from the pool
  selectedQuestions = getRandomQuestions(questions, 40);

  updateProgressBar(); // Initialize progress bar
  showQuestion();
  updateQuestionCounter();
  updateScoreCount();
  startTimer();
}

// Shuffle function to randomize the order of questions
function shuffle(array) {
  let currentIndex = array.length; // Get the length of the array
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex); // Pick a random index
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]; // Swap the current element with the random element
  }
}

// Get 40 random questions from the provided array
function getRandomQuestions(array, num) {
  // Clone the array to avoid modifying the original questions array
  let clonedArray = [...array];
  shuffle(clonedArray); // Shuffle the cloned array
  return clonedArray.slice(0, num); // Return the first `num` elements
}

// Show the current question and its answers
function showQuestion() {
  resetState(); // Reset the state to remove previous answers
  let currentQuestion = selectedQuestions[currentQuestionIndex]; // Get current question from selectedQuestions
  questionElement.innerHTML = currentQuestion.question; // Display the question

  // Display the image if it exists
  if (currentQuestion.image) {
    const imgElement = document.createElement("img"); // Create an image element
    imgElement.src = currentQuestion.image; // Set the image source
    imgElement.alt = "Question Image"; // Set the image alt text
    imgElement.classList.add("question-image"); // Add a class for styling
    questionElement.appendChild(imgElement); // Append the image to the question element
  }

  // Create buttons for each answer
  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement("button"); // Create a button
    button.classList.add("btn"); // Add a class for styling
    button.appendChild(document.createTextNode(` ${answer.text}`)); // Append the answer text to the button
    answerButtons.appendChild(button); // Append the button to the answer buttons

    if (answer.correct) {
      button.dataset.correct = answer.correct; // Set the button's data-correct attribute
    }
    // Add event listener for answer selection
    button.addEventListener("click", selectAnswer);
  });
  updateQuestionCounter();
}

// Reset the state to remove previous answers and hide the next button
function resetState() {
  nextButton.style.display = "none";
  backButton.style.display = "block";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild); // Remove all children from the answer buttons
  }
  const explanationElement = document.getElementById("explanation"); // Get the explanation element
  explanationElement.innerHTML = ""; // Clear explanation
  explanationElement.style.display = "none"; // Hide the explanation element
  const linkElement = document.getElementById("link"); // Get the link element
  linkElement.innerHTML = ""; // Clear link
}

// Handle answer selection
function selectAnswer(e) {
  const selectedBtn =
    e.target.tagName === "SPAN" ? e.target.parentNode : e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  
  // Funktion zum Abspielen des Tons
  function playSound(sound) {
    sound.pause();
    sound.currentTime = 0;
    sound.play();
  }
  
  if (isCorrect && !selectedBtn.classList.contains("correct")) {
    selectedBtn.classList.add("correct");
    score++;
    playSound(correctSound);
  } else if (!isCorrect && !selectedBtn.classList.contains("incorrect")) {
    selectedBtn.classList.add("incorrect");
    incorrectScore++;
    playSound(incorrectSound);
  }

  // Überprüfen, ob alle korrekten Antworten ausgewählt wurden
  const allCorrectAnswers = Array.from(answerButtons.children).filter(
    button => button.dataset.correct === "true"
  );
  const selectedCorrectAnswers = Array.from(answerButtons.children).filter(
    button => button.classList.contains("correct") && button.dataset.correct === "true"
  );

  if (allCorrectAnswers.length === selectedCorrectAnswers.length) {
    // Alle korrekten Antworten wurden ausgewählt
    const explanationElement = document.getElementById("explanation");
    const linkElement = document.getElementById("link"); // Get the explanation element
    let currentQuestion = selectedQuestions[currentQuestionIndex]; // Get the current question from selectedQuestions
    explanationElement.innerHTML = currentQuestion.explanation; // Set the explanation
    explanationElement.style.display = "block"; // Show the explanation element
    explanationElement.classList.remove("show");
    explanationElement.classList.add("show");

    if (currentQuestion.link) {
      linkElement.innerHTML = ""; // Clear link if it already exists
      const link = document.createElement("a");
      link.href = currentQuestion.link;
      link.target = "_blank"; // Open link in a new tab
      link.rel = "noopener noreferrer"; // Security best practice
      link.textContent = "Learn more";
      link.style.color = "white";
      linkElement.appendChild(link); // Append the link to the link element
    } else {
      linkElement.innerHTML = ""; // Clear link if no URL is provided
    }

    nextButton.style.display = "block"; // Show the next button
    backButton.style.display = "block";
  }
  updateScoreCount();
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Well done! That was ${selectedQuestions.length} questions!`; 
  nextButton.innerHTML = "Try Again"; // Update next button text to "Try Again"
  nextButton.style.display = "block";
  clearInterval(timerInterval); // Stop the timer when the quiz ends
  quizEnded = true;
}

// Handle the next button click to show the next question or the final score
function handleNextButton() {
  if (quizEnded) return;

  currentQuestionIndex++;
  if (currentQuestionIndex < selectedQuestions.length) {
    showQuestion();
  } else {
    showScore();
  }
  updateProgressBar(); // Update progress bar on next button click
}

// Event listener for the next button click to show the next question or the final score
nextButton.addEventListener("click", () => {
  if (quizEnded) {
    startQuiz();
  }
  else if (currentQuestionIndex < selectedQuestions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

// Event listener for the back button click to go back to the previous question
backButton.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--; // Move back to the previous question
    showQuestion(); // Show the previous question
    updateProgressBar(); // Update the progress bar
  }
});

// Start the timer when the quiz starts and show the first question
function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

// Timer logic
function updateTimer() {
  timeLeft--;
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timeDisplay = document.getElementById('time-display');
  if (timeDisplay) {
    timeDisplay.textContent = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  }
  
  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    showScore();
  }
}

// Menu toggle functionality
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Close menu when a link is clicked (for mobile)
menu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    menu.classList.remove('show');
  }
});

// Update the progress bar based on the current question index
function updateProgressBar() {
  const progressPercentage =
    (currentQuestionIndex / selectedQuestions.length) * 100; // Calculate the progress percentage
  progressBarElement.style.width = progressPercentage + "%"; // Set the width of the progress bar
}

function updateQuestionCounter() {
  questionCounterElement.innerHTML = `Question ${currentQuestionIndex + 1}/40`;
}

function updateScoreCount() {
  correctCountElement.innerHTML = score; // Update only the number
  incorrectCountElement.innerHTML = incorrectScore; // Update only the number
}

function resetQuizState() {
  quizEnded = false;
  nextButton.style.display = "none";
  backButton.style.display = "block";
}

// Start the quiz initially
resetQuizState();
startQuiz();
