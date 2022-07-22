// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    //if shift is incorrectly inputted
    if (!shift || shift < -25 || shift > 25 || shift == 0) {
      return false;
    }
    //if encode is false, shift is muliplied by -1
    if (!encode) {
      shift *= -1;
    }
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return input.toLowerCase().split("").map((char) => {
      if (!alphabet.includes(char)) return char
      let idx = alphabet.indexOf(char) + shift
      if (idx > 25) idx -= 26
      if (idx < 0) idx += 26
      return alphabet[idx]
    }).join("")
  }
  return {caesar}
})();

module.exports = { caesar: caesarModule.caesar };
