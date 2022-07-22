const expect = require("chai").expect;
const {substitution} = require("../src/substitution");
// Write your tests here!

describe("substitution", () => {
  it("Should return false if the given alphabet is not exactly 26", () => {
    const alphabet = "abcdefg";
    const actual = substitution("Hello", alphabet);
    expect(actual).to.be.false;
  });

  it("Should return false if given alphabet contains duplicate letters", () => {
    const alphabet = "cbcdefghijklmnopqrstuvwxaa";
    const actual = substitution("Hello", alphabet);
    expect(actual).to.be.false;
  });

  it("Should return false if alphabet is not a string", () => {
    const alphabet = 0101010101010101010101010101;
    const actual = substitution("Hello", alphabet);
    expect(actual).to.be.false;
  })

  it("Should ENCODE the input according to given alphabet", () => {
    const input = "Hello";
    const alphabet = "mfyealvgczwpoutbxirnjskqdh";
    const expected = "gappt";
    const actual = substitution(input, alphabet);
    expect(actual).to.eql(expected);
  });

  it("Should maintain spaces when ENCODING", () => {
    const input = "Hello World";
    const alphabet = "mfyealvgczwpoutbxirnjskqdh";
    const expected = "gappt ktipe";
    const actual = substitution(input, alphabet);
    expect(actual).to.eql(expected);
  });
  
  it("Should maintain spaces when DECODING", () => {
    const input = "gappt ktipe";
    const alphabet = "mfyealvgczwpoutbxirnjskqdh";
    const expected = "hello world";
    const actual = substitution(input, alphabet, false);
    expect(actual).to.equal(expected);
  });

  it("Should ignore capitalization", () => {
    const input = "GooDNiGhT";
    const alphabet = "mfyealvgczwpoutbxirnjskqdh";
    const expected = "vtteucvgn";
    const actual = substitution(input, alphabet);
    expect(actual).to.equal(expected);
  })

  it("Should read special characters in alphabet", () => {
    const input = "Hello";
    const alphabet = "mfye0lvgczw$outbxirnjskqdh";
    const expected = "g0$$t";
    const actual = substitution(input, alphabet);
    expect(actual).to.eql(expected);
  });

  it("Should return false if symbol is not found in alphabet", () => {
    const input = "Hell@";
    const alphabet = "mfyealvgczwpoutbxirnjskqdh";
    const actual = substitution(input, alphabet);
    expect(actual).to.be.false;
  });

});
