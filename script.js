const quotes = [
{
text: "Growth begins the moment you stop waiting for perfect conditions—Menmex builds anyway.",
yes: "Exactly—growth starts with action. Menmex understands that deeply.",
no: "Even if conditions aren’t perfect, progress still happens. Menmex moves anyway."
},
{
text: "Discipline will take you places motivation can’t—Menmex relies on discipline.",
yes: "Correct—discipline remains when motivation fades.",
no: "Even without motivation, discipline still delivers results."
},
{
text: "Consistency beats intensity—Menmex stays consistent.",
yes: "Right—small daily effort wins long-term.",
no: "Even if it feels slow, consistency still beats intensity."
},
{
text: "You don’t need all the answers to start—Menmex starts and figures it out.",
yes: "Exactly—clarity comes from action.",
no: "Even without clarity, movement creates direction."
},
{
text: "Menmex builds—no matter what.",
yes: "That’s it—action over excuses.",
no: "Even when it’s tough, Menmex still builds."
}
];

let currentQuote = null;

function generateQuote() {
    const nickname = document.getElementById("nickname").value.trim();

    if (nickname === "") {
        alert("Please enter your nickname");
        return;
    }

    const randomIndex = Math.floor(Math.random() * quotes.length);
    currentQuote = quotes[randomIndex];

    const output = document.getElementById("output");
    const choiceBox = document.getElementById("choiceBox");

    output.innerHTML = `
        <h2 style="color:#0369a1;">Motivation</h2>
        <h3>${nickname}</h3>
        <p style="font-size:18px; font-weight:bold;">
        "${currentQuote.text}"
        </p>
    `;

    output.classList.remove("hidden");
    choiceBox.classList.remove("hidden");
}

function answerYes() {
    if (!currentQuote) return;

    document.getElementById("choiceBox").classList.add("hidden");

    document.getElementById("output").innerHTML += `
        <p style="margin-top:20px;">✅ ${currentQuote.yes}</p>
        <p style="margin-top:20px; font-weight:bold; color:#0369a1;">
        Thank you for using Mencore — Powered by MENMEX
        </p>
    `;
}

function answerNo() {
    if (!currentQuote) return;

    document.getElementById("choiceBox").classList.add("hidden");

    document.getElementById("output").innerHTML += `
        <p style="margin-top:20px;">❌ ${currentQuote.no}</p>
        <p style="margin-top:20px; font-weight:bold; color:#0369a1;">
        Thank you for using Mencore — Powered by MENMEX
        </p>
    `;
        }
