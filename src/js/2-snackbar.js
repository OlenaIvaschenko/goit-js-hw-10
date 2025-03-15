// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import iconCross from '../img/icon/cross-min.png';
import iconBell from '../img/icon/bell-min.png';
import iconTriangle from '../img/icon/triangle-min.png';
import iconVector from '../img/icon/Vector-min.png';

const form = document.querySelector('.form');
form.setAttribute('novalidate', '');

const successMessage = {
  title: 'OK',
  position: 'topRight',
  messageColor: '#fff',
  backgroundColor: '#59a10d',
  iconColor: '#fff',
  close: true,
  titleColor: '#fff',
  closeColor: '#fff',
  iconUrl: iconVector,
};

const errorMessage = {
  title: 'Error',
  position: 'topRight',
  messageColor: '#fff',
  backgroundColor: '#ef4040',
  iconColor: '#fff',
  close: true,
  titleColor: '#fff',
  closeColor: '#fff',
  iconUrl: iconCross,
};

const cautionMessage = {
  title: 'Caution',
  position: 'topRight',
  message: 'You forgot important data',
  messageColor: '#fff',
  backgroundColor: '#ffa000',
  iconColor: '#fff',
  close: true,
  titleColor: '#fff',
  closeColor: '#fff',
  iconUrl: iconTriangle,
};

const informingMessage = {
  title: 'Hello',
  message: 'Welcome!',
  position: 'topRight',
  messageColor: '#fff',
  backgroundColor: '#09f',
  iconColor: '#fff',
  close: true,
  titleColor: '#fff',
  closeColor: '#fff',
  iconUrl: iconBell,
};

iziToast.show({
  ...informingMessage,
});

document.querySelector('button').addEventListener('click', event => {
  event.preventDefault();

  const delayInput = document.querySelector('input[name="delay"]');
  if (!delayInput) return; // Якщо елемент не знайдений, вийти
  const delay = Number(delayInput.value); //

  if (isNaN(delay) || delay < 0) {
    iziToast.show({
      ...cautionMessage, // Передаємо всі властивості з об'єкта
    });
    return;
  }

  console.log(delay);

  const isSuccess =
    document.querySelector('input[name="state"]:checked')?.value ===
    'fulfilled';
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        iziToast.success({
          ...successMessage,
          message: `✅ Fulfilled promise in ${delay}ms`,
        });
        resolve(delay);
      } else {
        iziToast.error({
          ...errorMessage,
          message: `❌ Rejected promise in ${delay}ms`,
        });
        reject(delay);
      }
    }, delay);
  });
  promise
    .then(result => console.log(`✅ Fulfilled in ${result}ms`))
    .catch(error => console.log(`❌ Rejected in ${error}ms`));
  form.reset();
});
