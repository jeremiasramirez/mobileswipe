/*
* controller main of swipe
* */

appMobileSwipe.controller("swipe", ["$scope", function($scope){

    $scope.images = ["image1", "image2", "image3", "image4", "image5"];
    $scope.img = $scope.images[0];

    /*
    * counter of position -images
    * */
    $scope.counterImg = 0;

    // if swipe right

    $scope.swipeRight = function(){


        if($scope.counterImg >= 1){
            $scope.counterImg -= 1;
            $scope.img = $scope.images[$scope.counterImg];
        }

    };


    //if swipe left
    $scope.swipeLeft = function(){

        if($scope.counterImg < $scope.images.length){
            $scope.counterImg += 1;
            $scope.img = $scope.images[$scope.counterImg];
        }

    }



}]);
