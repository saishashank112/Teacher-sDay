const questions = [
  {
    branch: 'CSE',
    branchName: 'Computer Science',
    branchIcon: 'fas fa-code',
    title: 'CSE Question:',
    question: '"I am a self-balancing binary search tree where the heights of the left and right subtrees of any node differ by at most one. I maintain O(log n) time complexity for all operations. What am I?"',
    answer: 'avl',
    hint: '💡 Hint: Named after two Russian mathematicians.'
  },
  {
    branch: 'ECE',
    branchName: 'Electronics',
    branchIcon: 'fas fa-microchip',
    title: 'ECE Question:',
    question: '"I am a semiconductor device with three terminals that can amplify signals and act as a switch. What am I?"',
    answer: 'transistor',
    hint: '💡 Hint: Invented in 1947.'
  },
  {
    branch: 'EEE',
    branchName: 'Electrical',
    branchIcon: 'fas fa-bolt',
    title: 'EEE Question:',
    question: '"I am a theorem that states total power in a circuit equals the sum of power dissipated in each component. What am I?"',
    answer: 'conservation',
    hint: '💡 Hint: Energy cannot be created or destroyed.'
  },
  {
    branch: 'Mechanical',
    branchName: 'Mechanical',
    branchIcon: 'fas fa-cogs',
    title: 'Mechanical Question:',
    question: '"I am a thermodynamic cycle that describes spark-ignition internal combustion engines. What am I?"',
    answer: 'otto',
    hint: '💡 Hint: 4-stroke engine cycle.'
  },
  {
    branch: 'Civil',
    branchName: 'Civil',
    branchIcon: 'fas fa-building',
    title: 'Civil Question:',
    question: '"I am a structural analysis method using virtual work principles to determine deflections. What am I?"',
    answer: 'castigliano',
    hint: '💡 Hint: Named after an Italian engineer.'
  },
  {
    branch: 'DSAI',
    branchName: 'Data Science & AI',
    branchIcon: 'fas fa-robot',
    title: 'DSAI Question:',
    question: '"I am a supervised ML algorithm that finds an optimal hyperplane to separate classes. What am I?"',
    answer: 'svm',
    hint: '💡 Hint: I maximize the margin between support vectors.'
  }
];

let currentIndex = 0;

const questionBox = document.getElementById("questionBox");
const progress = document.getElementById("progress");

function loadQuestion() {
  if (currentIndex >= questions.length) {
    window.location.href = "form.html"; // ✅ Redirect after last question
    return;
  }

  const q = questions[currentIndex];
  questionBox.innerHTML = `
    <h2><i class="${q.branchIcon}"></i> ${q.title}</h2>
    <p>${q.question}</p>
    <input type="text" id="answerInput" placeholder="Enter your answer..." />
    <br>
    <button onclick="submitAnswer()">Submit Answer</button>
    <button onclick="showHint()">Need a Hint?</button>
    <p id="feedback"></p>
    <p id="hintBox" style="margin-top:10px; color: #ffea00;"></p>
  `;

  progress.innerHTML = `Question ${currentIndex + 1} of ${questions.length}`;
}

function submitAnswer() {
  const userAnswer = document.getElementById("answerInput").value.trim().toLowerCase();
  const correct = questions[currentIndex].answer.toLowerCase();
  const feedback = document.getElementById("feedback");

  if (userAnswer === correct) {
    feedback.style.color = "lightgreen";
    feedback.innerText = "✅ Correct! Moving to next...";
    setTimeout(() => {
      currentIndex++;
      loadQuestion();
    }, 1200);
  } else {
    feedback.style.color = "red";
    feedback.innerText = "❌ Wrong answer, try again!";
  }
}

function showHint() {
  document.getElementById("hintBox").innerText = questions[currentIndex].hint;
}

loadQuestion();
