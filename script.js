const quotes = [
{
text: "Growth begins the moment you stop waiting for perfect conditions—Menmex builds anyway.",
yes: "Exactly—growth only starts when action begins. Menmex understands that.",
no: "Even if conditions aren’t perfect, Menmex still moves. Waiting changes nothing."
},
{
text: "Discipline will take you places motivation can’t—Menmex relies on discipline.",
yes: "Correct—discipline stays when motivation disappears. That’s the real power.",
no: "Even without motivation, discipline still works. Menmex doesn’t depend on feelings."
},
{
text: "Consistency beats intensity—Menmex stays consistent.",
yes: "Right—small daily effort always beats occasional big effort.",
no: "Even if it feels slow, consistency always wins long-term. Menmex knows this."
},
{
text: "You don’t need all the answers to start—Menmex starts and figures it out.",
yes: "Exactly—clarity comes from doing, not waiting.",
no: "Even without clarity, action creates direction. Menmex moves anyway."
},
{
text: "Menmex builds—no matter what.",
yes: "That’s it—conditions don’t matter, action does.",
no: "Even if it’s difficult, Menmex still builds. That’s the difference."
}
];

let currentQuote = null;

function generateQuote() {
    const nickname = document.getElementById("nickname").value;

    if (!nickname) {
        alert("Enter your nickname!");
        return;
    }

    const randomIndex = Math.floor(Math.random() * quotes.length);
    currentQuote = quotes[randomIndex];

    document.getElementById("output").innerHTML =
        `<h2 style="color:#0369a1;">Motivation</h2>
         <h3>${nickname}</h3>
         <p style="font-size:
