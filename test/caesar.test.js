const expect = require("chai").expect;
const {caesar} = require("../src/caesar");

describe("caesar", () => {
  it("Should loop around the alphabet", () => {
    const input = "abcdefghijklmnopqrstuvwxyz";
    const shift = -3;
    const expected = "xyzabcdefghijklmnopqrstuvw";
    const actual = caesar(input, shift);
    expect(actual).to.eql(expected);
  });

  it("Should DECODE if encode = false", () => {
    const input = "xyzabcdefghijklmnopqrstuvw";
    const shift = -3;
    const expected = "abcdefghijklmnopqrstuvwxyz";
    const actual = caesar(input, shift, false);
    expect(actual).to.eql(expected);
  });

  it("Should return false if shift is missing or 0", () => {
    const shift = 0;
    const actual = caesar("Thinkful", shift);
    expect(actual).to.be.false;
  });

  it("Should return false if shift is greater than 25 or less than -25", () => {
    const shift = 30;
    const actual = caesar("Thinkful", shift);
    expect(actual).to.be.false;
  });

  it("Should ignore capital letters and maintain nonalphabetic characters", () => {
    const shift = -3;
    const input = "This Is A Secret!";
    const expected = "qefp fp x pbzobq!"
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
  })

});