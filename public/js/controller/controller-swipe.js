/*
* controller main of swipe
* */

appMobileSwipe.controller("swipe", ["$scope", function($scope){

    //partials route

    $scope.includeSwipeImg = "partials/partial-swipeimg.html";




    $scope.images = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9"];
    $scope.img = $scope.images[0];
    $scope.lenImg = $scope.images.length ;

    /*
    * counter of position -images | pagination
    * */
    $scope.counterImg = 0;
    $scope.counterPosition = 1;

    // if swipe right

    $scope.swipeRight = function(){
        //verifying if pagination is > to zero


        if( ($scope.counterImg > 0) ){
    /*
    * << back pagination <<
    * */
            $scope.counterImg -= 1;
            $scope.counterPosition -= 1;

            $scope.img = $scope.images[$scope.counterImg];

        }
        else if( ($scope.counterImg) < 1 ){

            $scope.counterPosition = $scope.lenImg;
            $scope.counterImg = $scope.lenImg - 1;
            $scope.img = $scope.images[$scope.counterImg];
        }


    };


    //if swipe left
    $scope.swipeLeft = function(){

        if( ($scope.counterImg) < ($scope.images.length -1) ){

            $scope.counterImg += 1;
            $scope.counterPosition +=1;
            $scope.img = $scope.images[$scope.counterImg];

        }
        else if ( ($scope.counterPosition >= $scope.lenImg ) ){
            $scope.counterPosition = 1;
            $scope.counterImg =0;
            $scope.img = $scope.images[0];
        }


    };


}]);
