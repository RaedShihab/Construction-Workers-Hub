
    var app = angular.module("app", ["ngRoute"]);
    app.config(function($routeProvider) {
      $routeProvider
        .when("/signup", {
          templateUrl: "./veiw/signup.html",
          controller: "ctrl1"
        })
        .when("/item2", {
          templateUrl: "./veiw/item2.html",
          controller: "ctrl2"
        })
        .when("/car", {
          templateUrl: "./veiw/carpenters.html",
          controller: "carpenters"
        })


    });
