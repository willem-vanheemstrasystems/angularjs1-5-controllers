// Create a module
var myApp = angular.module("myModule", []);

// Create a controller function
var myController = function($scope) {
    var employee = {
        firstName: "John",
        lastName: "Doe",
        gender: "Male"
    };
    // Attach the complex object to the scope
    $scope.employee = employee;
};

// Register the controller with the module
// Takes a parameters; what you want to name the controller, the controller function
myApp.controller("myController", myController);

/**
 * Alternatively, declare the controller function inside the registration
 * myApp.controller("myController", function($scope) {
 *   var employee = {
 *       firstName: "John",
 *       lastName: "Doe",
 *       gender: "Male"
 *   };
 *   // Attach the complex object to the scope
 *   $scope.employee = employee;
 * });
 */
