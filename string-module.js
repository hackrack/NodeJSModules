const camelCaser = (sen) => {
  let upperCased = "";
  sen = sen.split("");
  sen.forEach((char, index, sen) => {
    index % 2 === 0? upperCased += char.toUpperCase() :upperCased += char;
  })
  return upperCased;
}

const vovelRemover = (sen) => {
  let vowels = ["a", "e", "i", "o", "u"];
  let splitSen = sen.split("");
  let removed = "";
  splitSen.map(function(char) {
    if (vowels.includes(char) === false) {
     removed += char;
    }
  })
  return removed;
}

const reverser = (sentence) => sentence.split("").reverse().join("");

module.exports = {
  camelCaser,
  vovelRemover,
  reverser
}
