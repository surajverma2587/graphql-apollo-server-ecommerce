const mongoose = require("mongoose");

const { DB_URL, MONGOOSE_OPTIONS } = require("./config");

const connect = async () => {
  try {
    await mongoose.connect(DB_URL, MONGOOSE_OPTIONS);
  } catch (error) {
    throw error;
  }
};

module.exports = { connect };
