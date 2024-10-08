const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const canvas = document.getElementById('confetti');

const jsConfetti = new JSConfetti();

noButton.addEventListener('click', () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

yesButton.addEventListener('click', () => {
    // Show confetti animation
    jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
    });
    setTimeout(() => {
        alert('Yayy, waiting for you on the chat.'); // Replace [Venue] with your actual venue
    }, 1000); // Delay the alert to let the confetti show
});