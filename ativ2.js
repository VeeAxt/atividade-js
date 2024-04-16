let seconds = 10;

function lancamento() {
    const countdownElement = document.getElementById('countdown');

    if (seconds > 0) {
      countdownElement.textContent = seconds + ' segundos restantes';
      seconds = seconds - 1;
      setTimeout(lancamento, 1000);
      return
    }

    countdownElement.textContent = 'Tempo esgotado'; 
}