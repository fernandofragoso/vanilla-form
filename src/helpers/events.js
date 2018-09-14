const validateInput = (target) => {
  const selectInvalid = (target.nodeName === "SELECT" && target.selectedIndex === 0);
  const textInvalid = (target.value === '')

  if (selectInvalid || textInvalid) {
    target.classList.add("form__input--invalid");
    target.nextElementSibling.innerHTML = "Este campo é obrigatório";
    return false;
  } else {
    target.classList.remove("form__input--invalid");
    target.nextElementSibling.innerHTML = "";
    return true;
  }
}

const changeTab = () => {
  document.querySelector('#request-form-section').classList.add('invisible');
  document.querySelector('#user-form-section').classList.remove('invisible');
  document.querySelector('#request-tab').classList.remove('tabs__option--selected');
  document.querySelector('#user-tab').classList.add('tabs__option--selected');
}

const inputHandler = (ev) => {
  const target = ev.target;
  validateInput(target);
}

export const buttonSearchHandler = () => {
  const requiredInputs = document.querySelectorAll('#request-form .form__input[required]');
  let isValid = true;
  Array.prototype.forEach.call(requiredInputs, function(input){
    if (!validateInput(input)) {
      isValid = false;
    }
  });

  if (isValid) {
    changeTab();
  }
}

const buttonFinishHandler = () => {
  const requiredInputs = document.querySelectorAll('#user-form .form__input[required]');
  Array.prototype.forEach.call(requiredInputs, function(input){
    validateInput(input);
  });
}

export const registerEvents = () => {
  const requiredInputs = document.querySelectorAll('.form__input[required]');
  Array.prototype.forEach.call(requiredInputs, function(input){
    input.addEventListener('blur', inputHandler);
    input.addEventListener('change', inputHandler);
    input.addEventListener('keyup', inputHandler);
  });

  document.getElementById('button-search').addEventListener('click', buttonSearchHandler);
  document.getElementById('button-finish').addEventListener('click', buttonFinishHandler);
}