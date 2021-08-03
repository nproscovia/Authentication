angular.module("meanGames").controller("GameController", GameController);



function GameController(GamesFactory, $routeParams, $route) {

    const vm = this;
    const gameId = $routeParams.id;
    GamesFactory.getOneGame(gameId).then(function(game) {
        vm.game = game;
        // vm.rating = _getStarsArray(game.rate)
    })

    vm.deleteOneGame = function(){
        GamesFactory.deleteOneGame(gameId).then(function(game){
            console.log("deleted game", game);
        }).catch(function(error){
            console.log(error);
        })
        $route.reload();
    }

}