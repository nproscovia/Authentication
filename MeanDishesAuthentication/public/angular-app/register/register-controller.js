angular.module("meanDishes").controller("RegisterController", registerController);

function registerController(){
   
    const vm = this;
    //this function is from the form line 13.
    vm.register = function () {
        if(!vm.username || !vm.password || !vm.passwordRepeat || !vm.name) {
            vm.err = "Please fill all the fields"
        } else {
            if(vm.password !== vm.passwordRepeat) {
                vm.err = "the passwords must match"
            } else {
                const newUser = {
                    username: vm.username,
                    password: vm.password,
                    name: vm.name
                }
                UsersDataFactory.register(newUser).then(function(result) {
                    console.log("register done");
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