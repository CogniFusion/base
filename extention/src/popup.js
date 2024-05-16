// Add event listener to the button
// const { AutoModelForCausalLM, AutoTokenizer } = require('@transformers/core');
// const { Configuration, OpenAIApi } = require('openai');

const button = document.getElementById("open");
const generate = document.getElementById("generate");
const description = document.getElementById("description");
const outputElement = document.getElementById('result');
if (button) {
    button.addEventListener("click", function () {
        window.open("http://localhost:3000", "_blank");
    });
}
if (generate) {
    generate.addEventListener("click", function () {
        console.log("Message received from content script:", description.value);
        const userInput = description.value;
        const message = {
            action: 'generate',
            text: userInput,
        }
        chrome.runtime.sendMessage(message, (response) => {
            console.log(response);
            if (response) {
                let answer = response[0]?.generated_text
                outputElement.innerText = answer.substring(0, answer.length)
            }
        });
    })
}
