const { answers } = require("../controllers/data");

const chat = (req, res, next) => {
  const { text } = req.body;
  if (!text || typeof text !== "string" || text.length === 0) {
    return res.status(422).json({ message: "Text is not valid." });
  }
  next();
};

const result = (req, res, next) => {
  let index = parseInt(req.body.index);

  if (index < 0 || index >= answers.length) {
    return res.status(422).json({ message: "Index is not valid." });
  }
  next();
};

module.exports = { chat, result };
