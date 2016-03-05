
angular.module("app", []).
controller("CntrlGitHub", function($scope, $http) {
    $scope.message = "Person Details";

    var onSuccess= function(response){
        $scope.userDetails = response.data;
        $http.get($scope.userDetails.repos_url).
            then(onRepos,onError);


    };

    var onRepos = function(response){

        $scope.repos = response.data;
    };

    var onError = function(reason){
        $$scope.error = "Could not load user details";
    };

$scope.searchedUser = function(userName) {
    $http.get("https://api.github.com/users/" + userName).then(onSuccess,onError)

};

    $scope.orderValue="-id";

});