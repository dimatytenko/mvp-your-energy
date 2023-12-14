import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { ApiServices } from './ApiServices';
const apiServices = new ApiServices();

//access form element
const formSubmit = document.querySelector('.js-footer-form');
const btnSubmit = document.querySelector('.footer-form-btn');
//add listeners to form element for "input" and "submit" events
formSubmit.addEventListener('submit', fetchSubscription);

function isValidEmail(email) {
  const emailPattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

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

async function fetchSubscription(event) {
  //event.preventDefault();

  const emailInput = document.querySelector('input[type="email"]');
  const email = emailInput.value;

  if (!isValidEmail(email)) {
    return iziToast.failure('Invalid email address was entered.');
  }

  const subscriptionData = {
    email: email,
  };

  apiServices
    .subscription(subscriptionData)
    .then(resp => {
      const message = resp.data.message;
      iziToast.success(message);
    })
    .catch(error => {
      const badRequest = error.response.data.message;
      if (error.response.status === 409) {
        iziToast.warning('Subscription already exists');
      }
      if (error.response.status === 400) {
        iziToast.warning(badRequest);
      }
    });
  formSubmit.reset();
}
