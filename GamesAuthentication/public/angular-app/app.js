angular.module("meanGames", ["ngRoute"]).config(config);

function config($routeProvider) {
    $routeProvider.when("/", {
        templateUrl:"angular-app/welcome/welcome.html",
       
    }).when("/games/:id", {
        templateUrl:"angular-app/game-display/game.html",
        controller:"GameController",
        controllerAs:"vm"
        // this is the url at the UI. Its the URL that user inputs in the browser. to get this html page
    }).when("/register", {
        templateUrl:"angular-app/register/register.html",
        controller:"RegisterController", // RegisterController same as the one in the register-controller.gs on line one in red. 
        controllerAs:"vm"
    }).when("/games", {
        templateUrl:"angular-app/game-list/game-list.html",
        controller:"GamesController",
        controllerAs:"vm"
    }).when("/profile", {
        templateUrl:"angular-app/profile/profile.html",
        access: {restricted: true}
    
    
    }).otherwise({
        redirectTo:"/"
})
}



function run($rootScope,  $location, $window, AuthFactory) {
    $rootScope.$on("$routeChangeStart", function (event, nextRoute, currentRoute) {
        if(nextRoute.access !== undefined && 
            nextRoute.access.restricted && 
            !AuthFactory.auth && !$window.sessionStorage.token) { 
            event.preventDefault();
            $location.path("/");
        }
    })
}