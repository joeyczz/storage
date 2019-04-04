
import storage from '../../src/main';

const key = 'key';

const strValue = 'strValue';

const objValue = { a: 1, b: 2 };

const arrValue = [1, 2, 3];

/**
 * localStorage
 */
test('lsStorage set null、undefined', () => {
  storage.lsSetValue(key, null);
  const nullVal = storage.lsGetValue(key);
  expect(nullVal).toBe('');
  storage.lsSetValue(key, undefined);
  const undefinedVal = storage.lsGetValue(key);
  expect(undefinedVal).toBe('');
});

test('lsStorage string', () => {
  storage.lsSetValue(key, strValue);
  const value = storage.lsGetValue(key);
  expect(value).toBe(strValue);
});

test('lsStorage obj', () => {
  storage.lsSetValue(key, objValue);
  const value = storage.lsGetValue(key);
  expect(value).toEqual(objValue);
});

test('lsStorage obj', () => {
  storage.lsSetValue(key, arrValue);
  const value = storage.lsGetValue(key);
  expect(value).toEqual(arrValue);
});

test('lsStorage remove', () => {
  storage.lsSetValue(key, arrValue);
  const value = storage.lsGetValue(key);
  expect(value).toEqual(arrValue);

  storage.lsRemove(key);
  const removeVal = storage.lsGetValue(key);
  expect(removeVal).toEqual(null);
});

/**
 * sessionStorage
 */
test('ssStorage set null、undefined', () => {
  storage.ssSetValue(key, null);
  const nullVal = storage.ssGetValue(key);
  expect(nullVal).toBe('');
  storage.ssSetValue(key, undefined);
  const undefinedVal = storage.ssGetValue(key);
  expect(undefinedVal).toBe('');
});

test('ssStorage string', () => {
  storage.ssSetValue(key, strValue);
  const value = storage.ssGetValue(key);
  expect(value).toBe(strValue);
});

test('ssStorage obj', () => {
  storage.ssSetValue(key, objValue);
  const value = storage.ssGetValue(key);
  expect(value).toEqual(objValue);
});

test('ssStorage obj', () => {
  storage.ssSetValue(key, arrValue);
  const value = storage.ssGetValue(key);
  expect(value).toEqual(arrValue);
});

test('ssStorage remove', () => {
  storage.ssSetValue(key, arrValue);
  const value = storage.ssGetValue(key);
  expect(value).toEqual(arrValue);

  storage.ssRemove(key);
  const removeVal = storage.ssGetValue(key);
  expect(removeVal).toEqual(null);
});

/**
 * clear All
 */
test('storage clearAll', () => {
  storage.lsSetValue(key, arrValue);
  storage.ssSetValue(key, arrValue);

  storage.clearAll();

  const lsVal = storage.lsGetValue(key);
  const ssVal = storage.ssGetValue(key);
  expect(lsVal).toEqual(null);
  expect(ssVal).toEqual(null);
});
