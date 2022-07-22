const expect = require("chai").expect;
const {polybius} = require("../src/polybius");
// Write your tests here!

describe("polybius", () => {
  it(`Should print a string of numbers with spaces`, () => {
    const expected = "22434341 3342223244";
    const input = "good night";
    const actual = polybius(input);
    expect(actual).to.equal(expected);
  });

  it("Should ENCODE the letters i and j to 42", () => {
    const expected = "424242 424242";
    const input = "iii jjj";
    const actual = polybius(input);
    expect(actual).to.equal(expected);
  });

  it("Should ignore capital letters", () => {
    const expected = "224343413342223244";
    const input = "GoOdNiGHt";
    const actual = polybius(input);
    expect(actual).to.equal(expected);
  });
  
  it("Should return false if input is incorrect size when DECODING", () => {
    const input = "21434342 1";
    const actual = polybius(input, false);
    expect(actual).to.be.false;
  });

  it("Should return a DECODED message with correct spacing and letters", () => {
    const expected = "good n(i/j)ght";
    const input = "22434341 3342223244";
    const actual = polybius(input, false);
    expect(actual).to.equal(expected);
  });

  it("Should DECODE 42 to (i/j).", () => {
    const expected = "(i/j)(i/j)(i/j) (i/j)(i/j)(i/j)";
    const input = "424242 424242";
    const actual = polybius(input, false);
    expect(actual).to.equal(expected);
  });
  
});
