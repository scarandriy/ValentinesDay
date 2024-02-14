const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

yesButton.addEventListener('click', () => {
    // Change the content of the page to the new content
    document.body.innerHTML = `
        <div class="container">
            <img src="3.gif" id="image">
            <h1 class="confirmation">Yay! Happy Valentine's Day!</h1>
        </div>
    `;
});

noButton.addEventListener('click', () => {
    const randomX = Math.floor(Math.random() * 401) - 200; // Random number between -400 and 400
    const randomY = Math.floor(Math.random() * 401) - 200; // Random number between -400 and 400
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
});
