import { getFields } from './service/api';
import { render, registerEvents } from './components/domHelpers';
import { createElement } from './components/elements';
import style from './index.css';

const requestForm = document.getElementById('request-form');
const userForm = document.getElementById('user-form');

getFields().then(response => {
  const requestTags = response.request_fields.map(input => {
    return createElement(input);
  });
  const userTags = response.user_fields.map(input => {
    return createElement(input);
  });

  render(requestForm, requestTags.join(''));
  render(userForm, userTags.join(''));
  
  registerEvents();
});