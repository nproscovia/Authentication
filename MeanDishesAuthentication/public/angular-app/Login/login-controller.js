angular.module("meanDishes").controller("LoginController", LoginController);


function LoginController(UsersDataFactory, AuthFactory, $window, jwtHelper, $location) {
    const vm = this;

    vm.isLoggedIn = function () {
        return AuthFactory.auth;
    };

    //this is in the navigation form ng-model...nvm.login()
    vm.login = function () {
        if (vm.username && vm.password) {
            const user = {
                username: vm.username,
                password: vm.password
            }

            UsersDataFactory.login(user).then(function (result) {
                console.log("User", result);
                //store the token in the browser
                $window.sessionStorage.token = result.token;
                AuthFactory.auth = true;

                //get data from the token line 26
                const token = $window.sessionStorage.token

                const decodedToken = jwtHelper.decodeToken(token);

               //its in the navigation form
                vm.loggedinUser = decodedToken.name;
                vm.username = "";
                vm.password = "";
                $location.path("/")
            }).catch(function (error) {
                console.log("Error", error)
            })
        };
    };

    vm.logout = function () {
        AuthFactory.auth = false;
        delete $window.sessionStorage.token;
        $location.path("/");
    };

    vm.isActiveTab = function (url) {
        const currentPath = $location.path().split("/")[1];
        return (url === currentPath ? "active" : "");
    }
}