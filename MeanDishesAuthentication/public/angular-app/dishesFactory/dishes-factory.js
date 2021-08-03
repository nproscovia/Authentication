angular.module("meanDishes").factory("DishesFactory", DishesFactory);

function DishesFactory($http) {
    return {
        getAllDishes: getAll,
        getOneDish: getOne,
        addOneDish:addOne,
        deleteOneDish:deleteOne,
        editOneDish: editOne
    }
   function editOne(dishId, dish){
        return $http
         .put("/api/dishes/" +dishId, dish)
         .then(complete)
         .catch(failed);
       
   }
    function addOne(dish){
        return $http.post("/api/dishes", dish)
                    .then(complete)
                    .catch(failed);
    }
    function deleteOne(id){
         return $http.delete("/api/dishes/" +id)
                     
    }
    function getAll() {
        return $http.get("/api/dishes")
            .then(complete)
            .catch(failed);
    }


    function getOne(id) {
        return $http.get("/api/dishes/" + id)
            .then(complete)
            .catch(failed)
    }

    function complete(response) {
        return response.data;
    }

    function failed(error) {
        return error.status.statusText;
    }
}