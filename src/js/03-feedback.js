import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('form');


feedbackForm.addEventListener('input', throttle(onInputChange, 500));
feedbackForm.addEventListener('submit', onSubmit);

const LOCALSTORAGE_KEY = "feedback-form-state";
const formData = {};

showUnsentData();


function onInputChange(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
    
}

function showUnsentData(event) {
    let savedData = localStorage.getItem(LOCALSTORAGE_KEY);

    if (savedData) {
        savedData = JSON.parse(savedData);
        Object.entries(savedData).forEach(([name, value]) => {
            formData[name] = value;
            feedbackForm.elements[name].value = value;
        });
    }
}

function onSubmit(event) {
    event.preventDefault();
    event.target.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
    console.log(formData);
}