const quizContainer = document.getElementById("quiz")

function displayQuestions() {
  questions.forEach((question, index) => {
    quizContainer.innerHTML += `
      <div class="card">
        <div class="question-number">Question ${index + 1}:</div>
        <div class="question-text">${question.question}</div>
        <div class="input-container">
          <label for="answer-${index}">Answer:</label>
          <select id="answer-${index}" name="answer-${index}">
          <option value="">Select an answer</option>
            ${question.options.map(option => `<option value="${option}">${option}</option>`).join('')}
          </select>
        </div>
      </div>
    `
  })
}

function checkAnswers() {
  let score = 0
  questions.forEach((question, index) => {
    const answerInput = document.getElementById(`answer-${index}`)
    const userAnswer = answerInput.value

    if (userAnswer === question.answer) {
      score++
      answerInput.parentNode.parentNode.classList.add("correct")
      const cardElements = answerInput.parentNode.parentNode.querySelectorAll('.card *')
      cardElements.forEach(element => {
        element.style.color = "green"
      })
    }
    else {
      answerInput.parentNode.parentNode.classList.add("incorrect")
      const cardElements = answerInput.parentNode.parentNode.querySelectorAll('.card *')
      cardElements.forEach(element => {
        element.style.color = "red"
      })
    }
  })

  const scoreText = `<div class="score">You scored ${score}/${questions.length}!</div>`
  document.body.insertAdjacentHTML("afterbegin", scoreText)
  const submitButn = document.getElementById("submit-btn")
  submitButn.disabled = true;
}
displayQuestions()

const submitButton = document.getElementById("submit-btn")
submitButton.addEventListener("click", checkAnswers)
