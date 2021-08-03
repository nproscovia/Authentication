
//the directive is called gamesNavigation which we use in the index.html page
angular.module("meanDishes").directive("dishesNavigation", DishesNavigation);

function DishesNavigation() {
    return {
        restrict: "E",
        templateUrl: "angular-app/navigation-directive/navigation.html"
    }
}