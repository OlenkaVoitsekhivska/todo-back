const Todo = require("../models/todo");

const listTodos = async () => {
  return await Todo.find({});
};

// const getContactById = async (contactId) => {
//   return await Todo.findById(contactId);
// };

// const removeContact = async (todoId) => {
//   return await Todo.findByIdAndDelete(todoId);
// };

const addTodo = async (body) => {
  return await Todo.create({ ...body });
};

// const updateContact = async (contactId, body) => {
//   return await Todo.findByIdAndUpdate(contactId, body);
// };

// const toggleComplete = async (contactId, body) => {
//   return await Todo.findByIdAndUpdate(contactId, body);
// };

module.exports = {
  listTodos,
  // getContactById,
  // removeContact,
  addTodo,
  // updateContact,
  // toggleComplete
};
