import { getFields } from './service/api';
import { registerEvents } from './helpers/events';
import { createElement } from './helpers/elements';
import style from './index.css';

const requestForm = document.getElementById('request-form');
const userForm = document.getElementById('user-form');

const render = (element, content) => {
  element.innerHTML = content;
};

getFields().then(response => {
  const requestTags = response.request_fields.map(input => createElement(input));
  const userTags = response.user_fields.map(input => createElement(input));

  render(requestForm, requestTags.join(''));
  render(userForm, userTags.join(''));

  registerEvents();
});