const express = require("express");

const router = express.Router();
const Todo = require("../../models/todo");

const {
  listTodos,
  // getContactById,
  addTodo,
  // removeContact,
  // updateContact,
  // updateFav,
} = require("../../controllers/todos");
const { postSchema, putSchema } = require("../../validation/validation");

router.get("/", async (req, res, next) => {
  const data = await listTodos();
  res.status(200).json(data);
});

// router.get("/:id", async (req, res, next) => {
//   const { id } = req.params;
//   const result = await getContactById(id);
//   if (!result) {
//     return res.status(404).json({ message: "Not found" });
//   }
//   res.status(200).json({ data:result });
// });

router.post("/", async (req, res, next) => {
  // const { value, error } = postSchema.validate(req.body);

  // if (error) {
  //   return res.status(400).json({
  //     message: "missing required name field",
  //   });
  // }
  res.status(201).json({ data: await addTodo(req.body) });
});

// router.delete("/:todoId", async (req, res, next) => {
//   const { todoId } = req.params;
//   const idExists = Todo.findById(todoId);
//   if (!idExists) {
//     return res.status(404).json({
//       message: "not found",
//     });
//   }
//   await removeContact(todoId);
//   res.status(200).json({ message: "contact deleted" });
// });

// router.put("/:conId", async (req, res, next) => {
//   const { conId } = req.params;
//   const { value, error } = putSchema.validate(req.body);

//   if (error) {
//     return res.status(400).json({ message: "missing fields" });
//   }

//   const findContact = Contact.findById(conId);
//   if (!findContact) {
//     return res.status(404).json({ message: "not found" });
//   }
//   await updateContact(conId, value);

//   res.status(200).json({ data: await updateContact(conId, value) });
// });

// router.patch("/:conId/favorite", async (req, res, next) => {
//   const { conId } = req.params;
//   if (!req.body) {
//     res.status(400).json({
//       message: "missing field favorite",
//     });
//   }
//   const updContact = await updateFav(conId, req.body);
//   if (!updContact) {
//     res.status(404).json({
//       message: "Not found",
//     });
//   }
//   res.status(200).json({
//     data: await updateFav(conId, req.body),
//   });
// });

module.exports = router;