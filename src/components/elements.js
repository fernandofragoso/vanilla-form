export const createSelect = (input) => {
  return `
    <div class='form__item'>
      <label for="${input.label}" class="form__label">${input.label}</label>
      <select class="form__input" name="${input.name}" ${(input.required) ? 'required' : ''}>
        <option value="">${input.mask}</option>
        ${Object.keys(input.values).map(value => `<option value=${value}>${value}</option>`)}
      </select>
      <span class="form__helper-text"></span>
    </div>
  `;
}

export const createTextArea = (input) => {
  return `
    <div class='form__item'>
      <label for="${input.label}" class="form__label">${input.label}</label>
      <textarea
        class="form__input"
        name="${input.label}" 
        placeholder="${input.placeholder}" 
        ${(input.required) ? 'required' : ''}/></textarea>
      <span class="form__helper-text"></span>
    </div>
  `
}

export const createElement = (input) => {
  switch (input.type) {
    case 'enumerable':
      return createSelect(input);
    case 'big_text':
      return createTextArea(input);
    default:
      return '';
  }
}