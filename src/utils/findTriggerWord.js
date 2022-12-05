module.exports = (triggerWords, text) => {
  for (let i = 0; i < triggerWords.length; i++) {
    let foundIndex = triggerWords[i].findIndex((e) =>
      text.toLowerCase().includes(e)
    );
    if (foundIndex >= 0) {
      return i;
    }
  }
  return -1;
};
