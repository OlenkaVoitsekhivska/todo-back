const { Schema, model } = require("mongoose");

const todoSchema = Schema({
  // _id: {
  //   type: String
  // },
  description: {
    type: String,
  },
  complete: {
    type: Boolean,
    default: false,
  },
});

const Todo = model("contact", todoSchema);

module.exports = Todo;
