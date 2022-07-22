// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  function checkForUnique(alphabet) {
    for (let i in alphabet) {
      if (alphabet.lastIndexOf(alphabet[i]) != i) {
        return false;
      }
    }
    return true;
  }
  function substitution(input, alphabet, encode = true) {
    if (typeof alphabet !== "string") {
      return false;
    }
  
    const inSpltAndLwr = input.toLowerCase().split(" ");
    const alphaLower = alphabet.toLowerCase();
    const correctAlpha = "abcdefghijklmnopqrstuvwxyz".split("");
  
    if (alphaLower.split("").length != 26 || !checkForUnique(alphaLower)) {
      return false;
    }
  
    const subAlph = () => {
      const obj = {};
      if (!encode) {
        alphaLower.split("").forEach((key, i) => (obj[key] = correctAlpha[i]));
      } else {
        correctAlpha.forEach((key, i) => (obj[key] = alphaLower.split("")[i]));
      }
      return obj;
    };
  
    const subAlphResp = subAlph(); 
    const substituteChars = [];
  
    for (let i in inSpltAndLwr) {
      let singleWord = [];
      for (let j in inSpltAndLwr[i]) {
        if (!subAlphResp[inSpltAndLwr[i][j]]) {
          return false;
        }
        singleWord.push(subAlphResp[inSpltAndLwr[i][j]]);
      }
      substituteChars.push(singleWord.join(""));
    }
  
    return substituteChars.join(" "); 
  }
  return {substitution}
})();

module.exports = { substitution: substitutionModule.substitution };
