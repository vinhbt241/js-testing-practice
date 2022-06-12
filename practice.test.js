import { capitalize, reverseString } from "./practice"

test('capitalize one word', () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("capitalize many word", () => {
  expect(capitalize("hello world")).toBe("Hello World");
});

test('reverseString', () => {
  expect(reverseString("stun seed")).toBe("dees nuts");
});

// test('caculator operations', () => {

// })
