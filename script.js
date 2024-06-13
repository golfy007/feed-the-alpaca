document.addEventListener("DOMContentLoaded", function() {
    const alpaca = document.getElementById('alpaca');
    const scoreElement = document.getElementById('score');
    let score = 0;

    alpaca.addEventListener('click', function() {
        score++;
        scoreElement.textContent = score;

        alpaca.classList.add('happy');
        setTimeout(() => {
            alpaca.classList.remove('happy');
        }, 300);
    });
});
