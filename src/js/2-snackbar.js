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
