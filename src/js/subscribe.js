import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { ApiServices } from './ApiServices';
const apiServices = new ApiServices();

const formSubmit = document.querySelector('.js-footer-form');
const btnSubmit = document.querySelector('.footer-form-btn');
const emailInput = document.querySelector('input[type="email"]');

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+(?:\.[^\s@]+)*@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

if (btnSubmit) {
  btnSubmit.disabled = true;

  emailInput.addEventListener('input', () => {
    const email = emailInput.value;

    if (isValidEmail(email)) {
      btnSubmit.style.backgroundColor = '#c6cdd1';
      btnSubmit.disabled = false;
    } else {
      btnSubmit.style.backgroundColor = '#f4f4f4';
      btnSubmit.disabled = true;
    }
  });

  btnSubmit.addEventListener('mouseover', () => {
    const email = emailInput.value;

    if (!isValidEmail(email)) {
      btnSubmit.style.cursor = 'not-allowed';
    } else {
      btnSubmit.style.cursor = 'pointer';
    }
  });

  btnSubmit.addEventListener('mouseout', () => {
    btnSubmit.style.cursor = 'default';
  });

  formSubmit.addEventListener('submit', async event => {
    event.preventDefault();

    const email = emailInput.value;

    if (!isValidEmail(email)) {
      iziToast.warning({
        message: 'Invalid email address was entered.',
        position: 'topRight',
      });
      return;
    }

    const subscriptionData = {
      email: email,
    };
    try {
      const resp = await apiServices.subscription(subscriptionData);
      console.log('resp', resp);
      if (resp?.response?.status === 409) {
        iziToast.warning({
          message: 'Subscription already exists',
          position: 'topRight',
        });
        return;
      }
      if (resp?.response?.status === 400) {
        iziToast.warning({
          message: 'Bad request (invalid request body)',
          position: 'topRight',
        });
        return;
      }
      if (resp?.message) {
        iziToast.success({
          message: resp.message,
          position: 'topRight',
        });
      }
    } catch (error) {
      console.log('error', error);
    } finally {
      formSubmit.reset();
    }
  });
}
