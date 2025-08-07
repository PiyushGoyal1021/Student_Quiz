const questions = [
    {
      question: "What does HTML stand for?",
      options: ["HighText Machine Language", "HyperText Markup Language", "HyperText Markdown Language", "None of these"],
      correct: 1
    },
    {
      question: "Which language is used for styling web pages?",
      options: ["HTML", "JQuery", "CSS", "XML"],
      correct: 1
    },
    {
      question: "Which is not a programming language?",
      options: ["Python", "HTML", "Java", "C++"],
      correct: 1
    },
    {
      question: "Which tag is used to create a hyperlink in HTML?",
      options: ["<link>", "<a>", "<href>", "<url>"],
      correct: 1
    },
    {
      question: "What does CSS stand for?",
      options: ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheets", "Colorful Style Syntax"],
      correct: 1
    }
  ];
  
  const quizForm = document.getElementById("quizForm");
  
  // Load questions
  questions.forEach((q, index) => {
    const div = document.createElement("div");
    div.className = "question";
    div.innerHTML = `<h3>Q${index + 1}. ${q.question}</h3>`;
    q.options.forEach((option, i) => {
      div.innerHTML += `
        <label>
          <input type="radio" name="q${index}" value="${i}"> ${option}
        </label>
      `;
    });
    quizForm.appendChild(div);
  });
  
  function submitQuiz() {
    let score = 0;
    questions.forEach((q, index) => {
      const answer = document.querySelector(`input[name="q${index}"]:checked`);
      if (answer && parseInt(answer.value) === q.correct) {
        score++;
      }
    });
  
    const result = document.getElementById("result");
    result.innerText = `You scored ${score} out of ${questions.length}! 🎉`;
  }
  