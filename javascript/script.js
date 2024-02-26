const chatClient = new OpenAIChatAPIClient({ apiKey: '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' });
const chatLog = document.getElementById('chat-log');

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const chatLog = document.getElementById('chat-log');

    // Append user message to chat log
    const userMessage = document.createElement('div');
    userMessage.textContent = userInput;
    chatLog.appendChild(userMessage);

    // Send user message to ChatGPT and append response to chat log
    chatClient.send(userInput).then(response => {
        const botMessage = document.createElement('div');
        botMessage.textContent = response;
        chatLog.appendChild(botMessage);
    });
}



function appendMessage(sender, message) {
    const chatLog = document.getElementById('chat-log');
    if (!chatLog) {
        console.error("Chat log element not found.");
        return; // Exit the function if chat log element is not found
    }
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.innerText = message;
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight; // Scroll to bottom
}







