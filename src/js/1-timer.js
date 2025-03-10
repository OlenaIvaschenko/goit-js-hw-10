// / Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// console.log('Скрипт 1-timer.js працює!');
// document.body.style.backgroundColor;
const datetimePicker = document.querySelector('#datetime-picker');
const startButton = document.querySelector('#start-button');
const timerDisplay = document.querySelector('.timer');

startButton.disabled = true;
let userSelectedDate;
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');
let countdownInterval;

// Налаштування кліку кнопки
startButton.addEventListener('click', startCount);
function startCount() {
  startButton.disabled = true;
  datetimePicker.disabled = true;

  countdownInterval = setInterval(() => {
    const timeLeft = userSelectedDate - Date.now();

    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      iziToast.success({ title: 'Done', message: 'Countdown finished!' });
      datetimePicker.disabled = false;
      return;
    }
    const timeArray = convertMs(timeLeft);
    const { days, hours, minutes, seconds } = timeArray;

    dataDays.textContent = String(days).padStart(2, '0');
    dataHours.textContent = String(hours).padStart(2, '0');
    dataMinutes.textContent = String(minutes).padStart(2, '0');
    dataSeconds.textContent = String(seconds).padStart(2, '0');
  }, 1000);
}

// налаштування календаря

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
