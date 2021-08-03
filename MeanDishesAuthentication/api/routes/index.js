const express = require("express");
const dishesController = require("../controllers/dishes.controllers");
const ingredientsController= require("../controllers/ingredients.controllers");
const ControllerUsers= require("../controllers/users.controller");


console.log("here")
const router = express.Router();

router.route("/dishes")
     .get(dishesController.getalldishes )
     .post(dishesController.addOneDish)
     ///.put(dishesController.dishesFullUpdateOne) 
     

     router.route("/dishes/:dishId")
           .get(dishesController.getOneDish)
           .delete(dishesController.deleteOneDish)
           .put(dishesController.dishesFullUpdateOne) 
           .patch(dishesController.dishesPartialUpdateOne)

          
           
      router.route("/dishes/:dishId/ingredients")
            .get(ingredientsController.ingredientsGetAll)
            .post(ingredientsController.ingredientsAddOne)

      router.route("/dishes/:dishId/ingredients/:ingredientId")
            
             .delete(ingredientsController.ingredientsDeleteOne)  
             .put(ingredientsController.ingredientFullUpdate)
            .patch(ingredientsController.ingredientsPartialUpdate)




      router.route("/users/register")
      .post(ControllerUsers.Register);
      
      router.route("/users/login")
      .post(ControllerUsers.Login);
           
module.exports= router;
