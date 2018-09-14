import { createElement } from './elements';
import { inputEnumerableRequired, inputEnumerable, inputBigTextRequired, inputBigText } from '../mocks/inputs';

test('createElement should be a function', () => {
  expect(typeof createElement).toBe('function');
});

test('creates big_text element', () => {
  const input = createElement(inputBigText);
  expect(input).toMatch(/label/);
  expect(input).toMatch(/textarea/);
  expect(input).not.toMatch(/required/);
});

test('creates big_text required element', () => {
  const input = createElement(inputBigTextRequired);
  expect(input).toMatch(/label/);
  expect(input).toMatch(/textarea/);
  expect(input).toMatch(/required/);
});

test('creates enumerable element', () => {
  const input = createElement(inputEnumerable);
  expect(input).toMatch(/label/);
  expect(input).toMatch(/select/);
  expect(input).not.toMatch(/required/);
});

test('creates enumerable required element', () => {
  const input = createElement(inputEnumerableRequired);
  expect(input).toMatch(/label/);
  expect(input).toMatch(/select/);
  expect(input).toMatch(/required/);
});