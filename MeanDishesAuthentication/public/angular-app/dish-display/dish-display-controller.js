angular.module("meanDishes").controller("DishController", DishController);


function DishController(DishesFactory, $routeParams, $route) {

    const vm = this;
    const dishId = $routeParams.id;
    
    DishesFactory.getOneDish(dishId).then(function(dish) {
        
        vm.dish = dish;

    })

    
    vm.deleteOneDish = function(){
    DishesFactory.deleteOneDish(dishId)
                 .then(function(dish){
                     console.log("deleted dish" , dish)
                }).catch(function(error){
                    console.log(error);
                })
                $route.reload();
    }

    vm.updatedDish = function(){
            const editedDish = {
              name: vm.editedDishName,
              country: vm.editedDish,
              
            };
          
            DishFactory.editOne(dishId, editedDish)
            .then(function(dish){
              console.log(dish);
            }).catch(function(error){
              console.log(error);
            });
            $route.reload();
               
    }
}