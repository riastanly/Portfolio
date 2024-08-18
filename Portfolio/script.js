document.addEventListener("DOMContentLoaded", function() {
    const text = "Empowering Technology, One Line of Code at a Time.";
    const typingElement = document.getElementById("typing-text");
    let index = 0;

    function type() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50); // Adjust typing speed here (50ms for each character)
        }
    }

    type();
});

const quotes = [
    "Code is like humor. When you have to explain it, it’s bad. – Cory House",
    "Simplicity is the soul of efficiency. – Austin Freeman",
    "In order to be irreplaceable, one must always be different. – Coco Chanel"
];

function displayRandomQuote() {
    const quoteElement = document.getElementById('random-quote');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.innerText = quotes[randomIndex];
}

window.onload = displayRandomQuote; // Call the function when the page loads