var minSteps = function (s, t) {
  if (s === t) return 0;

  const ALPHABET_LETTERS_COUNT = 26;

  const sLettersCount = Array(ALPHABET_LETTERS_COUNT).fill(0);
  const tLettersCount = Array(ALPHABET_LETTERS_COUNT).fill(0);

  let tWeight = 0;
  let sWeight = 0;

  for (let i = 0; i < s.length; i++) {
    const sCurrentLetter = s[i];
    const tCurrentLetter = t[i];

    const sCurrentLetterCode = `${sCurrentLetter.toLowerCase()}`.charCodeAt(0);
    const tCurrentLetterCode = `${tCurrentLetter.toLowerCase()}`.charCodeAt(0);

    const sCurrentLetterIndex = sCurrentLetterCode - 97;
    const tCurrentLetterIndex = tCurrentLetterCode - 97;

    sLettersCount[sCurrentLetterIndex]++;
    sWeight += sCurrentLetterCode;

    tLettersCount[tCurrentLetterIndex]++;
    tWeight += tCurrentLetterCode;
  }

  if (tWeight === sWeight) return 0; // They are anagrams;

  let changes = 0;
  for (let i = 0; i < ALPHABET_LETTERS_COUNT; i++) {
    if (sLettersCount[i] > tLettersCount[i]) {
      changes += sLettersCount[i] - tLettersCount[i];
    }
  }

  return changes;
};

