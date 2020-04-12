/* @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  const matchedWords = [];

  const patternWeight = calculateWordWeight(pattern);

  for (const word of words) {
    const wordWeight = calculateWordWeight(word);
    if (wordWeight === patternWeight) matchedWords.push(word);
  }

  return matchedWords;
};

function calculateWordWeight(word) {
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
