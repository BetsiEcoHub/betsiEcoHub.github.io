const chatClient = new OpenAIChatAPIClient({ apiKey: 'YOUR_API_KEY' });
const chatLog = document.getElementById('chat-log');

async function sendMessage() {
    const userInput = document.getElementById('user-input');
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


