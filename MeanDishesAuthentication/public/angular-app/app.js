angular.module("meanDishes", ["ngRoute"]).config(config);

function config($routeProvider) {
    $routeProvider.when("/", {
        templateUrl:"angular-app/welcome/welcome.html",

    }).when("/dishes/:id", {
        templateUrl:"angular-app/dish-display/dish.html",
        controller:"DishController",
        controllerAs:"vm"
    }).when("/dishes", {
        templateUrl: "angular-app/dish-list/dish-list.html",
        controller: "dish-list-Controller",
        controllerAs: "vm",
}).when("/register", {
    templateUrl:"angular-app/register/register.html",
    controller:"RegisterController", // RegisterController same as the one in the register-controller.gs on line one in red. 
    controllerAs:"vm"
});
}


