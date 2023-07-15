const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Snippet = new Schema({
  title: { type: String },
  description: { type: String },
  language: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});

module.exports = mongoose.model("Snippet", Snippet);
