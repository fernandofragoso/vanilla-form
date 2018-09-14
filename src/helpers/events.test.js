import { registerEvents, buttonSearchHandler } from './events';
import { forms } from '../mocks/document';

const eventDispatcher = (event, elementId) => {
  var elem = document.getElementById(elementId);
  var event = new Event(event);  // (*)
  elem.dispatchEvent(event);
}

beforeAll(() => {
  document.body.innerHTML = forms;
  registerEvents();
});

test('registerEvents should be a function', () => {
  expect(typeof registerEvents).toBe('function');
});

test('registers click event on button-search', () => {
  eventDispatcher('click', 'button-search');
  
  const invalidElement = document.querySelector('#request-form-section .form__input--invalid');
  expect(invalidElement).toBeTruthy();
});

test('registers blur event on input', () => {
  eventDispatcher('blur', 'select1');
  
  const invalidElement = document.querySelector('.form__input--invalid');
  expect(invalidElement).toBeTruthy();
});

test('registers click on button-finish ', () => {
  eventDispatcher('click', 'button-finish');

  let invalidElement = document.querySelector('#user-form-section .form__input--invalid');
  expect(invalidElement).toBeTruthy();

  document.getElementById('text-input').value = "test";

  eventDispatcher('click', 'button-finish');

  invalidElement = document.querySelector('#user-form-section .form__input--invalid');

  expect(invalidElement).toBeFalsy();
});