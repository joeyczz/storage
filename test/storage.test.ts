/**
 * @jest-environment jsdom
 */
import JStorage from "../src/storage";

const key = "key";

const nullValue = null;

const undefinedValue = undefined;

const numValue = 10;

const strValue = "strValue";

const falseValue = false;
const trueValue = true;

const objValue = { a: 1, b: 2 };

const arrValue = [1, 2, 3];

/**
 * Storage
 */

test("JStorage error construction", () => {
  expect(() => new JStorage((null as unknown) as Storage)).toThrowError();
});

const storage = new JStorage(window.localStorage);

test("JStorage set null、undefined", () => {
  storage.setValue(key, nullValue);
  const val1 = storage.getValue(key);
  expect(val1).toBeNull();
  storage.setValue(key, undefinedValue);
  const val2 = storage.getValue(key);
  expect(val2).toBeUndefined();
});

test("JStorage string", () => {
  storage.setValue(key, strValue);
  const value = storage.getValue(key);
  expect(value).toBe(strValue);
});

test("JStorage obj", () => {
  storage.setValue(key, objValue);
  const value = storage.getValue(key);
  expect(value).toEqual(objValue);
});

test("JStorage arr", () => {
  storage.setValue(key, arrValue);
  const value = storage.getValue(key);
  expect(value).toEqual(arrValue);
});

test("JStorage remove", () => {
  storage.setValue(key, arrValue);
  const value = storage.getValue(key);
  expect(value).toEqual(arrValue);

  storage.remove(key);
  const removeVal = storage.getValue(key);
  expect(removeVal).toBeNull();
});

test("JStorage error str", () => {
  window.localStorage.setItem(key, "arrValue");
  const value = storage.getValue(key);
  expect(value).toBeNull();
});
