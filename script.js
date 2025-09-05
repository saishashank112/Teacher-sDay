// Save form data and redirect
function submitForm() {
  const name = document.getElementById("teacherName").value.trim();
  const subject = document.getElementById("subject").value.trim();

  if (name === "" || subject === "") {
    alert("Please enter both fields!");
    return;
  }

  localStorage.setItem("teacherName", name);
  localStorage.setItem("subject", subject);
  window.location.href = "card.html";
}

// Card Page
if (window.location.pathname.includes("card.html")) {
  const name = localStorage.getItem("teacherName");
  const subject = localStorage.getItem("subject");

  const card = document.getElementById("greetingCard");
  const cardBack = document.getElementById("cardBack");

// Card Page
if (window.location.pathname.includes("card.html")) {
  const name = localStorage.getItem("teacherName");
  const subject = localStorage.getItem("subject");
  const img = "images/logo.png";
  const card = document.getElementById("greetingCard");
  const cardBack = document.getElementById("cardBack");

  if (name && subject) {
    cardBack.innerHTML = `
    <img src="${img}" alt="Logo" style="max-width:100px; margin:10px auto; display:block;" />
      <h2>🎉 Happy Teacher's Day 🎉</h2>
      <p style="text-align:left; font-size:0.95rem; line-height:1.5;">
        Dear <strong>${name}</strong>,<br>
In the world of knowledge, ideas, and innovation, you add meaning and inspiration.<br>
Your teaching in <strong>${subject}</strong> goes beyond books—it reaches our hearts and shapes our dreams.<br>
You remind us that engineering is not just about formulas or machines, but about people and purpose.<br>
Every lesson you deliver becomes a bridge to knowledge and a path to wisdom.<br>
Your support gives us the courage to face failures and the strength to rise again.<br>
You are the silent architect of our future, building us with patience and care.<br>
The lessons we learn from you will guide us long after we leave these classrooms.<br>
On this special day, we pause to express our deepest gratitude.<br>
You are a true inspiration in every sense of the word.<br><br>
✨ Wishing you a heartfelt <strong>Happy Teachers’ Day!</strong> ✨<br><br>
With admiration,<br>
<strong>Team Yantrikee</strong>

      </p>
    `;
  }

  // Flip card on click
  card.addEventListener("click", () => {
    card.classList.toggle("flip");
    launchConfetti();
  });

  // Confetti + download stays the same...
}

  // Confetti
  const confettiCanvas = document.getElementById("confetti");
  const ctx = confettiCanvas.getContext("2d");
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
  let confettiPieces = [];

  function launchConfetti() {
    confettiPieces = [];
    for (let i = 0; i < 120; i++) {
      confettiPieces.push({
        x: Math.random() * confettiCanvas.width,
        y: Math.random() * confettiCanvas.height - confettiCanvas.height,
        w: 8, h: 14,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        speed: Math.random() * 5 + 2
      });
    }
  }

  function drawConfetti() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    confettiPieces.forEach((confetti) => {
      ctx.fillStyle = confetti.color;
      ctx.fillRect(confetti.x, confetti.y, confetti.w, confetti.h);
      confetti.y += confetti.speed;
      if (confetti.y > confettiCanvas.height) {
        confetti.y = -20;
        confetti.x = Math.random() * confettiCanvas.width;
      }
    });
    requestAnimationFrame(drawConfetti);
  }
  drawConfetti();

  // Download button
// Download Card as Image
if (window.location.pathname.includes("card.html")) {
  const downloadBtn = document.getElementById("downloadBtn");
  const card = document.getElementById("greetingCard");

  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      html2canvas(card, { scale: 2, backgroundColor: null }).then(canvas => {
        const link = document.createElement("a");
        link.download = "teachers-day-card.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
      });
    });
  }
}
}
