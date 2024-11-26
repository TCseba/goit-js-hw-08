import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

populateForm();

function onFormInput(event) {
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData)); // Asigură-te că datele sunt stocate ca șir JSON
}

function onFormSubmit(event) {
  event.preventDefault();
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}

function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    try {
      const { email, message } = JSON.parse(savedData); // Asigură-te că datele sunt parsează corect
      form.elements.email.value = email;
      form.elements.message.value = message;
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  }
}
