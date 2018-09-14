import { getFields } from './service/api';
import { render } from './components/render';
import { createElement } from './components/elements';
import style from './index.css';

const requestForm = document.getElementById('request-form');

getFields().then(inputs => {
  const elements = inputs.map(input => {
    return createElement(input);
  });
  render(requestForm, elements.join(''));
});


