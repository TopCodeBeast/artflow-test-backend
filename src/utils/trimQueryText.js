module.exports = (text) => {
  let res = text.toLowerCase().replace(/[^\w\s\d]/gi, "");
  res = res
    .replace(/ a /g, " ")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "");
  return res;
};
