
const generateBtn = document.getElementById('generate-btn');
const numberElement = document.getElementById('random-number');

generateBtn.addEventListener('click', () => {
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    
    // Display the random number in the paragraph element
    numberElement.textContent = randomNumber;
});