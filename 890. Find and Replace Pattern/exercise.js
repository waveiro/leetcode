/* @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  const matchedWords = [];

  const patternWeight = calculatePatternWeight(pattern);

  for (const word of words) {
    const wordWeight = calculatePatternWeight(word);
    if (wordWeight === patternWeight) matchedWords.push(word);
  }

  return matchedWords;
};

function calculatePatternWeight(word) {
  const seenLetters = new Map();
  let totalWeight = "";
  let weight = 1;

  for (const letter of word) {
    if (!seenLetters.has(letter)) {
      seenLetters.set(letter, weight);
      weight += 1;
    }

    totalWeight += `${seenLetters.get(letter)}`;
  }

  return totalWeight;
}

findAndReplacePattern(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb");
