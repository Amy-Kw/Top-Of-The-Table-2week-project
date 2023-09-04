const express = require("express");
const router = express.Router();
const { getAllUsers, createUser } = require("../db/helpers/users");
// const { getUserById, users} = require("../db");

//users api

// GET - /api/user - get all users
router.get("/", async (req, res, next) => {
    try {
      const users = await getAllUsers();
      res.send(users);
    } catch (error) {
      next(error);
    }
  });

  

//   // GET - /api/users/:userId - get users by id
// router.get("/:userId", async (req, res, next) => {
//     try {
//       const users = await getUserById(req.params.userId);
//       res.send(users);
//     } catch (error) {
//       next(error);
//     }
//   });

  // POST - /api/users - create a new user
router.post("/", async (req, res, next) => {
    try {
      const users= await createUser(req.body);
      res.send(users);
    } catch (error) {
      next(error);
    }
  });


  module.exports = router;
  