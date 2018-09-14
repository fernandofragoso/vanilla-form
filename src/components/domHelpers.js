const validateInput = (target) => {
  const selectInvalid = (target.nodeName === "SELECT" && target.selectedIndex === 0);
  const textAreaInvalid = (target.nodeName === "TEXTAREA" && target.value === '')

  if (selectInvalid || textAreaInvalid) {
    target.classList.add("form__input--invalid");
    target.nextElementSibling.innerHTML = "Este campo é obrigatório";
  } else {
    target.classList.remove("form__input--invalid");
    target.nextElementSibling.innerHTML = "";
  }
}

const inputHandler = (ev) => {
  const target = ev.target;
  validateInput(target);
}

const buttonHandler = () => {
  const requiredInputs = document.querySelectorAll('.form__input[required]');
  Array.prototype.forEach.call(requiredInputs, function(input){
    validateInput(input);
  });
}

export const registerEvents = () => {
  const requiredInputs = document.querySelectorAll('.form__input[required]');
  Array.prototype.forEach.call(requiredInputs, function(input){
    input.addEventListener('blur', inputHandler);
    input.addEventListener('change', inputHandler);
  });

  document.querySelector('.form__button').addEventListener('click', buttonHandler);
}

export const render = (element, content) => {
  element.innerHTML = content;
};