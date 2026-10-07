/* Short, reusable story quiz for the home page. */
(function () {
  const questions = [
    {
      question: "What did God place in the sky as a promise to Noah?",
      options: ["A rainbow", "A bright star", "A rainbow-colored boat", "A cloud"],
      answer: "A rainbow",
      fact: "That's right! God placed a rainbow in the sky as a promise."
    },
    {
      question: "What did David use to face the giant Goliath?",
      options: ["A sling and stones", "A big sword", "A fishing net", "A wooden boat"],
      answer: "A sling and stones",
      fact: "You got it! David trusted God and used his sling and stones."
    },
    {
      question: "In Jesus' story, who stopped to help the hurt traveler?",
      options: ["A Samaritan", "A king", "A fisherman", "A soldier"],
      answer: "A Samaritan",
      fact: "Yes! The Samaritan showed kindness and cared for his neighbor."
    }
  ];

  const play = document.getElementById("quiz-play");
  if (!play) return;

  const count = document.getElementById("quiz-count");
  const progress = document.querySelector(".quiz-progress");
  const progressFill = document.getElementById("quiz-progress-fill");
  const questionHeading = document.getElementById("quiz-question");
  const options = document.getElementById("quiz-options");
  const feedback = document.getElementById("quiz-feedback");
  const nextButton = document.getElementById("quiz-next");
  const complete = document.getElementById("quiz-complete");
  const result = document.getElementById("quiz-result");
  let questionIndex = 0;
  let score = 0;

  function renderQuestion() {
    const item = questions[questionIndex];
    count.textContent = `Question ${questionIndex + 1} of ${questions.length}`;
    progress.setAttribute("aria-valuenow", String(questionIndex + 1));
    progressFill.style.width = `${((questionIndex + 1) / questions.length) * 100}%`;
    questionHeading.textContent = item.question;
    options.replaceChildren();

    item.options.forEach((answer) => {
      const button = document.createElement("button");
      button.className = "quiz-option";
      button.type = "button";
      button.textContent = answer;
      button.dataset.answer = answer;
      options.append(button);
    });

    feedback.textContent = "";
    feedback.classList.remove("incorrect");
    nextButton.hidden = true;
  }

  options.addEventListener("click", (event) => {
    const selected = event.target.closest("[data-answer]");
    if (!selected || selected.disabled) return;

    const item = questions[questionIndex];
    const isCorrect = selected.dataset.answer === item.answer;
    if (isCorrect) score += 1;

    options.querySelectorAll(".quiz-option").forEach((button) => {
      button.disabled = true;
      if (button.dataset.answer === item.answer) button.classList.add("correct");
    });
    if (!isCorrect) {
      selected.classList.add("incorrect");
      feedback.classList.add("incorrect");
    }
    feedback.textContent = isCorrect ? item.fact : `Not quite. ${item.fact}`;
    nextButton.innerHTML = questionIndex === questions.length - 1
      ? "See your score <span aria-hidden=\"true\">→</span>"
      : "Next question <span aria-hidden=\"true\">→</span>";
    nextButton.hidden = false;
  });

  nextButton.addEventListener("click", () => {
    questionIndex += 1;
    if (questionIndex === questions.length) {
      play.hidden = true;
      complete.hidden = false;
      result.textContent = `You got ${score} out of ${questions.length}!`;
      document.getElementById("quiz-restart").focus();
      return;
    }
    renderQuestion();
    questionHeading.focus();
  });

  document.getElementById("quiz-restart").addEventListener("click", () => {
    questionIndex = 0;
    score = 0;
    complete.hidden = true;
    play.hidden = false;
    renderQuestion();
    questionHeading.focus();
  });

  renderQuestion();
})();
