/* @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  const matchedWords = [];

  const patternWeight = calculatePatternWeight(pattern);

  for (const word of words) {
    if (shouldSkipWord(word, pattern)) {
      continue;
    }

    if (doesWordMatchPattern(word, patternWeight)) matchedWords.push(word);
  }

  return matchedWords;
};

function shouldSkipWord(word, pattern) {
  if (!word) return true;
  if (word.length !== pattern.length) return true;
}

function doesWordMatchPattern(word, patternWeight) {
  const lettersWeight = new Map();
  let weight = 1;

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];

    if (!lettersWeight.has(letter)) {
      lettersWeight.set(letter, weight);
      weight += 1;
    }

    if (patternWeight[i] !== lettersWeight.get(letter)) return false;
  }

  return true;
}

function calculatePatternWeight(word) {
  const lettersWeight = new Map();
  let wordPattern = [];
  let weight = 1;

  for (const letter of word) {
    if (!lettersWeight.has(letter)) {
      lettersWeight.set(letter, weight);
      weight += 1;
    }

    wordPattern.push(lettersWeight.get(letter));
  }

  return wordPattern;
}

findAndReplacePattern(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "a b");