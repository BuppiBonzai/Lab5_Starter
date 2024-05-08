// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('111-111-1111', () => {
  expect(isPhoneNumber('111-111-1111')).toBe(true);
});
test('123-456-7890', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('1', () => {
  expect(isPhoneNumber('1')).toBe(false);
});
test('123-456-789', () => {
  expect(isPhoneNumber('123-456-789')).toBe(false);
});


test('short email', () => {
  expect(isEmail('a@gmail.com')).toBe(true);
});
test('long email', () => {
  expect(isEmail('thisassignmentisprettyinteresting1235@gmail.com')).toBe(true);
});
test('no @', () => {
  expect(isEmail('123gmail.com')).toBe(false);
});
test('no .com', () => {
  expect(isEmail('123@gmail')).toBe(false);
});


test('basic strong', () => {
  expect(isStrongPassword('Avatar123')).toBe(true);
});
test('long strong', () => {
  expect(isStrongPassword('AvatarShow1239')).toBe(true);
});
test('first number', () => {
  expect(isStrongPassword('1Avatar')).toBe(false);
});
test('too long', () => {
  expect(isStrongPassword('AvatarTheTVShow12345678')).toBe(false);
});


test('basic date', () => {
  expect(isDate('10/10/2023')).toBe(true);
});
test('single num', () => {
  expect(isDate('1/1/2023')).toBe(true);
});
test('no year', () => {
  expect(isDate('10/10')).toBe(false);
});
test('invalid num', () => {
  expect(isDate('101/10/2023')).toBe(false);
});


test('basic red color', () => {
  expect(isHexColor('FF0000')).toBe(true);
});
test('basic 3 letter color', () => {
  expect(isHexColor('FF0')).toBe(true);
});
test('2 letters', () => {
  expect(isHexColor('FF')).toBe(false);
});
test('7 letters', () => {
  expect(isHexColor('FF11111')).toBe(false);
});