// import data
const { triggerWords, answers, alternatives } = require("./data");

// import utils
const trimQueryText = require("../utils/trimQueryText");
const findTriggerWord = require("../utils/findTriggerWord");

const chat = (req, res) => {
  const { text } = req.body;
  const trimedQuery = trimQueryText(text);
  const foundIndex = findTriggerWord(triggerWords, trimedQuery);
  if (foundIndex < 0) {
    res.send({
      answer: alternatives[Math.floor(Math.random() * alternatives.length)],
      index: foundIndex,
    });
  } else {
    res.send({
      answer: answers[foundIndex].loadingText,
      index: foundIndex,
    });
  }
};

const result = (req, res) => {
  const { index } = req.body;
  setTimeout(() => {
    res.send({
      text: answers[index].answerText,
      type: answers[index].type,
      story: answers[index].story,
      portrait: answers[index].portrait,
    });
  }, answers[index].delay * 1000);
};

module.exports = {
  chat,
  result,
};
