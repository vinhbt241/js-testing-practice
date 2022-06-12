import { capitalize, reverseString, Calculator, caesarCipher } from "./practice"

test('capitalize one word', () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("capitalize many word", () => {
  expect(capitalize("hello world")).toBe("Hello World");
});

test('reverseString', () => {
  expect(reverseString("stun seed")).toBe("dees nuts");
});

test('caculator operations', () => {
  const testCalculator = Calculator();

  expect(testCalculator.add(20, 2)).toBe(22);
  expect(testCalculator.subtract(20, 2)).toBe(18);
  expect(testCalculator.divide(20, 2)).toBeCloseTo(10);
  expect(testCalculator.multiply(20, 2)).toBe(40);
});

test('Caesar Cipher', () => {
  expect(caesarCipher("attack at dawn", 5)).toBe("fyyfhp fy ifbs");
  expect(caesarCipher("HELLO WORLD", 5)).toBe("mjqqt btwqi")
})
