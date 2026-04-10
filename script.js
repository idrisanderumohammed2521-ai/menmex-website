const quotes = [
"Growth begins the moment you stop waiting for perfect conditions—Menmex builds anyway.",
"Menmex understands that clarity comes after movement, not before it.",
"Discipline will take you places motivation can’t—Menmex relies on discipline.",
"You don’t need all the answers to start—Menmex starts and figures it out.",
"Menmex moves forward, even when the path is not fully visible.",
"Success favors those who act—Menmex acts early.",
"Menmex doesn’t wait for chances, it creates direction.",
"Consistency beats intensity—Menmex stays consistent.",
"The difference is execution—Menmex executes.",
"Menmex builds—no matter what."
];

const yesQuotes = [
"That’s right—Menmex proves that action creates results.",
"Exactly—Menmex keeps building momentum.",
"Correct—Menmex stays disciplined and focused.",
"Yes—Menmex knows consistency wins.",
"Right choice—Menmex keeps moving forward."
];

const noQuotes = [
"Even then—Menmex still builds anyway.",
"Doubt doesn’t stop progress—Menmex acts.",
"Not convinced? Menmex proves it through action.",
"Still—Menmex doesn’t wait, it moves.",
"Menmex builds regardless of uncertainty."
];

function generateQuote() {
    const nickname = document.getElementById("nickname").value;

    if (!nickname) {
        alert("Enter your nickname!");
        return;
    }

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    document.getElementById("output").innerHTML =
        `<h2 style="color:#0369a1;">Motivation</h2>
         <h3>${nickname}</h3>
         <p style="font-size:18px; font-weight:bold;">"${quote}"</p>`;

    document.getElementById("output").classList.remove("hidden");
    document.getElementById("choiceBox").classList.remove("hidden");
}

function answerYes() {
    const msg = yesQuotes[Math.floor(Math.random() * yesQuotes.length)];

    document.getElementById("choiceBox").style.display = "none";

    document.getElementById("output").innerHTML +=
        `<p style="margin-top:20px;">✅ ${msg}</p>
         <p style="margin-top:20px; font-weight:bold; color:#0369a1;">
         Thank you for using Mencore — Powered by MENMEX
         </p>`;
}

function answerNo() {
    const msg = noQuotes[Math.floor(Math.random() * noQuotes.length)];

    document.getElementById("choiceBox").style.display = "none";

    document.getElementById("output").innerHTML +=
        `<p style="margin-top:20px;">❌ ${msg}</p>
         <p style="margin-top:20px; font-weight:bold; color:#0369a1;">
         Thank you for using Mencore — Powered by MENMEX
         </p>`;
}
