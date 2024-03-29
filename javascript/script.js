// script.js

// Initialize chatClient variable


// Define sendMessage function
function sendMessage() {
    const userInput = document.getElementById('user-input').value;

    // Append user message to chat log
    appendMessage('user', userInput);

    // Send user message to ChatGPT and append response to chat log
    const rep = chatClient.send(userInput).then(response => {
        appendMessage('bot', response);
        return rep;
    });
}

const chatClient = new OpenAIChatAPIClient({ apiKey: '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' });

// Define appendMessage function
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

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

