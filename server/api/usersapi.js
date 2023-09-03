const express = require("express");
const { getAllUsers } = require("../db/helpers/users");
const { users } = require("../db/seedData");
const router = express.Router();


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
      // write some code :)
      const user = await getUserById(req.params.userId);
      res.send(user);
    } catch (error) {
      next(error);
    }
  });