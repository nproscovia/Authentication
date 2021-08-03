
//the directive is called gamesNavigation which we use in the index.html page
angular.module("meanGames").directive("gamesNavigation", GamesNavigation);

function GamesNavigation() {
    return {
        restrict: "E",
        templateUrl: "angular-app/navigation-directive/navigation.html"
    }
}