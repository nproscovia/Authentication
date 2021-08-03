const express = require("express");
const gamesController = require("../controllers/games.controllers");
const ControllerUsers = require("../controllers/users.controller");

console.log("here")
const router = express.Router();

router.route("/games")
     .get(gamesController.getallgames )
     .post(gamesController.addOneGame);

     router.route("/games/:gameId")
           .get(gamesController.getOneGame)
           .put(gamesController.gamesFullUpdateOne)
           .patch(gamesController.gamesPartialUpdateOne)
           .delete(gamesController.deleteOneGame);

           

      router.route("/users/register")
      .post(ControllerUsers.Register);
      
      router.route("/users/login")
      .post(ControllerUsers.Login);
      

module.exports= router;
