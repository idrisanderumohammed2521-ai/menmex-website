function sendMessage() {
    const messageInput = document.getElementById("message");
    const messageText = messageInput.value.trim();

    if (messageText === "") {
        alert("Please type a message");
        return;
    }

    const messageBox = document.getElementById("messages");

    const newMessage = document.createElement("div");
    newMessage.classList.add("message");

    newMessage.innerHTML = `
        <strong>Anonymous:</strong>
        <p>${messageText}</p>
    `;

    messageBox.prepend(newMessage);

    messageInput.value = "";
}
