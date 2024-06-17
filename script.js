const countdownElement = document.getElementById('countdown');

const countdown = (num, callback) => {
  countdownElement.textContent = num;
  countdownElement.style.color = '#007bff'; // Set the countdown color
  setTimeout(() => {
    if (num > 1) {
      countdown(num - 1, callback);
    } else {
      callback();
    }
  }, 1000);
};

countdown(10, () => {
  countdownElement.textContent = "Happy Independence Day!";
  countdownElement.classList.add('message'); // Add the message class for final text
});
