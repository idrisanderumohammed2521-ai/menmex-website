const quotes = [
"Menmex builds anyway.",
"Menmex relies on discipline.",
"Menmex stays consistent.",
"Menmex executes.",
"Menmex builds momentum.",
"Menmex never stops early.",
"Menmex moves forward always.",
"Menmex builds—no matter what."
];

const yesQuotes = [
"Good. Menmex knows action creates results.",
"Exactly. Menmex keeps moving.",
"Yes builds momentum—Menmex builds momentum."
];

const noQuotes = [
"That's fine—but Menmex builds anyway.",
"Doubt exists, but Menmex acts.",
"Menmex doesn't wait for agreement."
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
        `<h2>${nickname}</h2>
         <p>Do you know?</p>
         <b>"${quote}"</b>`;

    document.getElementById("output").classList.remove("hidden");
    document.getElementById("choiceBox").classList.remove("hidden");
}

function answerYes() {
    const msg = yesQuotes[Math.floor(Math.random() * yesQuotes.length)];
    document.getElementById("output").innerHTML += `<p>✅ ${msg}</p>`;
}

function answerNo() {
    const msg = noQuotes[Math.floor(Math.random() * noQuotes.length)];
    document.getElementById("output").innerHTML += `<p>❌ ${msg}</p>`;
}
