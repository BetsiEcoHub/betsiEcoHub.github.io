const chatClient = new OpenAIChatAPIClient({ apiKey: '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' });
const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');

async function sendMessage() {
    const userMessage = userInput.value;
    appendMessage('user', userMessage);

    // Send user message to ChatGPT
    const response = await chatClient.send(userMessage);
    const botMessage = response.data.choices[0].text.trim();
    appendMessage('bot', botMessage);
    
    // Clear user input
    userInput.value = '';
}

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.innerText = message;
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight; // Scroll to bottom
}
