// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    const polybiusArray = [
      ["a", "b", "c", "d", "e"],
      ["f", "g", "h", "(i/j)", "k"],
      ["l", "m", "n", "o", "p"],
      ["q", "r", "s", "t", "u"],
      ["v", "w", "x", "y", "z"],
    ];
  
    const array = [];
  
    //for DECODING
    if (!encode) {
      const splitNums = input.split(" ");
      for (let i in splitNums) {
        if (Math.abs(splitNums[i].length % 2) == 1) {
          return false;
        }
        let singleWord = [];
        for (let j = 0; j < splitNums[i].length; j++) {
          const corrLettr = polybiusArray[splitNums[i][j + 1] - 1][splitNums[i][j] - 1];
          singleWord.push(corrLettr);
          j++;
        }
        array.push(singleWord.join(""));
      }
      return array.join(" ");
    }
  
    //for ENCODING
    const splitLowerInput = input.toLowerCase().split("");
    splitLowerInput.forEach((char) => {
      if (char.charCodeAt(0) <= 96 || char.charCodeAt(0) >= 123) {
        array.push(char);
      }
      try {
        for (let i in polybiusArray) {
          for (let j in polybiusArray[i]) {
            if (polybiusArray[i][j].includes(char)) {
              const pairInt = (parseInt(j + i) + 11).toString();
              array.push(pairInt);
            }
          }
        }
      } catch (error) {
        throw "Something went wrong D:";
      }
    });
    return array.join("");
  }
  return {polybius}
})();

module.exports = { polybius: polybiusModule.polybius };
