const { Tag } = require("../models");

const tags = async () => {
  const tagsData = await Tag.find({});
  return tagsData;
};

module.exports = tags;
