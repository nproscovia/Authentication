
//RegisterController is the same as what is used in the app.js for the registration link.
angular.module("meanGames").controller("RegisterController", registerController);

function registerController(){
   
    const vm = this;
    //this function is from the form line 13.
    vm.register = function () {
        if(!vm.username || !vm.password || !vm.passwordRepeat || !vm.name) {
            vm.err = "Please fill all the fields"
        } else {
            if(vm.password !== vm.passwordRepeat) {
                vm.err = "the passwords must match"
                //if passwords match, then register.
            } else {
                const newUser = {
                    username: vm.username,
                    password: vm.password,
                    name: vm.name
                }
                //if passwords match then call backend to register
                UsersDataFactory.register(newUser).then(function(result) {
                    console.log("register done");
                    //vm.err = "";
                    vm.message = "successfull registration, please login";
                    vm.err = "";
                }).catch(function(error) {
                    console.log("error", error);
                    vm.err = error;
                })
            }
        }
        
    }
}