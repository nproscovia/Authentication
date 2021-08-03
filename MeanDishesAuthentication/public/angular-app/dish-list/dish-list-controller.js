angular.module("meanDishes").controller("DishesController", DishesController);

function DishesController(DishesFactory) {
    const vm = this;
    vm.title = "mean Dishes App";

    DishesFactory.getAllDishes()
    //console.log("calling")
                  .then(function(response) {
                      console.log(response);
        vm.dishes = response;
    });

    vm.addDish = function(){

        const newDish={
            name:vm.newDishName,
            country:vm.newDishCountry,
            ingredients:vm.newDishIngredient,
            
        };

        if(vm.dishForm.$valid){
            //calling back end to add the dish hence call the factory
            DishesFactory.addOneDish(newDish)
            .then(function(response){
                console.log(response)
            })
            .catch(function(error){
                console.log(error);
            })
        }
        

    }
}