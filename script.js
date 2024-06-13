document.addEventListener("DOMContentLoaded", function() {
    const alpaca = document.getElementById('alpaca');
    const scoreElement = document.getElementById('score');
    const highscoreElement = document.getElementById('highscore');
    const timerElement = document.getElementById('timer');
    let score = 0;
    let highscore = 0;
    let timeLeft = 5;
    let timer;

    function startTimer() {
        clearInterval(timer);
        timer = setInterval(() => {
            timeLeft--;
            timerElement.textContent = timeLeft;
            if (timeLeft === 0) {
                clearInterval(timer);
                alert('Game over! Your score: ' + score);
                if (score > highscore) {
                    highscore = score;
                    highscoreElement.textContent = highscore;
                }
                score = 0;
                scoreElement.textContent = score;
                timeLeft = 5;
                timerElement.textContent = timeLeft;
            }
        }, 1000);
    }

    alpaca.addEventListener('click', function() {
        score++;
        scoreElement.textContent = score;

        alpaca.classList.add('happy');
        setTimeout(() => {
            alpaca.classList.remove('happy');
        }, 300);

        timeLeft = 5;
        timerElement.textContent = timeLeft;
        startTimer();
    });

    startTimer();
});
