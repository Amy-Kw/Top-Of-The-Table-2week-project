const express = require("express");
const { getAllUsers } = require("../db/helpers/users");
const { users } = require("../db/seedData");
const router = express.Router();
const { getAllUsers, getUserById} = require("../db");

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

  // GET - /api/users/:userId - get users by id
router.get("/:userId", async (req, res, next) => {
    try {
      const user = await getUserById(req.params.userId);
      res.send(user);
    } catch (error) {
      next(error);
    }
  });

  // POST - /api/users - create a new user
router.post("/", async (req, res, next) => {
    try {
      const user= await createUser(req.body);
      res.send(user);
    } catch (error) {
      next(error);
    }
  });


  module.exports = router;
  