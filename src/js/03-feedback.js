import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector(".feedback-form"),
    button: document.querySelector(".submit")
}

const email = refs.form.elements.email;
const message = refs.form.elements.message;

function autocomplete (){
    const storageData = JSON.parse(localStorage.getItem("feedback-form-state")) || {};
    email.value = storageData.email || "";
    message.value = storageData.message || "";
}

autocomplete()

function handlerForm (evt){
const userData = {};
userData.email = email.value || "";
userData.message = message.value || "";
localStorage.setItem("feedback-form-state", JSON.stringify(userData))
}

function resetHandler (evt){
    evt.preventDefault(); 
    console.log(localStorage.getItem("feedback-form-state"));
    evt.currentTarget.reset();
    localStorage.removeItem("feedback-form-state")
}

refs.form.addEventListener("input", throttle(handlerForm, 500))
refs.form.addEventListener("submit", resetHandler)
