const triggerWords = [
  ["create story", "create stories"], //story
  ["create portrait", "create portraits"], //portrait
];

const answers = [
  {
    loadingText: "Sure, writing story now... (this can take 10 seconds)",
    answerText: "Here is the start of the story you asked for. Enjoy!",
    type: "story",
    story:
      "Space immigration is a dangerous journey, and the Rapsodia's crew was more than willing to accept the assistance of an experienced pilot. The ship was scheduled for an overhaul at a local repair facility, so they'd agreed that she could take it out on a test flight and report back about any issues before the work began.",
    delay: 10,
  }, //story
  {
    loadingText: "Sure, creating character now... (this can take 10 seconds)",
    answerText: "Here is the character of portrait you requested for",
    type: "portrait",
    portrait: "portrait",
    delay: 10,
  }, //portrait
];

const alternatives = ["Go on...", "Try again", "I am listening"];

module.exports = {
  triggerWords,
  answers,
  alternatives,
};
