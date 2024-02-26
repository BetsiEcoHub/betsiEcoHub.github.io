const chatClient = new OpenAIChatAPIClient({ apiKey: 'xxx' });

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const chatLog = document.getElementById('chat-log');

    // Append user message to chat log
    appendMessage('user', userInput);

    // Send user message to ChatGPT and append response to chat log
    chatClient.send(userInput).then(response => {
        appendMessage('bot', response);
    });
}

function appendMessage(sender, message) {
    const chatLog = document.getElementById('chat-log');
    if (!chatLog) {
        console.error("Chat log element not found.");
        return;
    }
    
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.innerText = message;
    chatLog.appendChild(messageElement);

    // Scroll to bottom of chat log
    chatLog.scrollTop = chatLog.scrollHeight;
}
