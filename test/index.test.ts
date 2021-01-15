/**
 * @jest-environment jsdom
 */
import { removeAll, localJStorage, sessionJStorage } from "../src/index";

const key = "key";

const objValue = { a: 1, b: 2 };

const arrValue = [1, 2, 3];

/**
 * localStorage
 */
test("Storage test", () => {
  localJStorage.setValue(key, objValue);
  const lVal = localJStorage.getValue(key);
  expect(lVal).toEqual(objValue);
  sessionJStorage.setValue(key, arrValue);
  const sVal = sessionJStorage.getValue(key);
  expect(sVal).toEqual(arrValue);
});

test("Storage removeAll", () => {
  localJStorage.setValue(key, objValue);
  const lVal = localJStorage.getValue(key);
  expect(lVal).toEqual(objValue);
  sessionJStorage.setValue(key, arrValue);
  const sVal = sessionJStorage.getValue(key);
  expect(sVal).toEqual(arrValue);

  removeAll();
  const val1 = localJStorage.getValue(key);
  expect(val1).toBeNull();
  const val2 = sessionJStorage.getValue(key);
  expect(val2).toBeNull();
});
