import { getFields } from './service/api';
import { render, registerEvents } from './components/domHelpers';
import { createElement } from './components/elements';
import style from './index.css';

const requestForm = document.getElementById('request-form');

getFields().then(inputs => {
  const tags = inputs.map(input => {
    return createElement(input);
  });
  render(requestForm, tags.join(''));
  registerEvents();
});


