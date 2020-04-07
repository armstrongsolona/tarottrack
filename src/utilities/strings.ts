export const toTitleCase = (rawString: string) => {
  const lowercaseString = rawString.toLowerCase();
  const splitWords = lowercaseString.split(' ');
  const splitLetters = splitWords.map((word) => word.split(''));

  const titleCaseArray = splitLetters.map((letters) =>
    letters.map((letter, index) => {
      if (index === 0) {
        return letter.toUpperCase();
      } else {
        return letter;
      }
    }),
  );

  const titleCaseWords = titleCaseArray.map((word) => word.join(''));
  const titleCaseString = titleCaseWords.join(' ');

  return titleCaseString;
};

export const toSentenceCase = (rawString: string) => {
  const firstLetter = rawString.substr(0, 1);
  const theRest = rawString.substr(1, rawString.length);

  return `${firstLetter.toUpperCase()}${theRest}`;
};
