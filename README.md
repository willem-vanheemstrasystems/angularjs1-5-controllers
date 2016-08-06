# angularjs1-5-controllers
AngularJS 1.5 Controllers

For an introduction see 'What is AngularJS' at https://www.youtube.com/watch?v=zKkUN-mJtPQ&list=PL6n9fhu94yhWKHkcL7RJmmXyxkuFB3KSl

See also 'Controllers in AngularJS' at https://www.youtube.com/watch?v=mW25S2tiCOM

Note: the introduction to Controllers is found in angularjs1-5-modules.

#What is a controller

In angular a controller is a JavaScript constructor function. The job of the controller is to build a model for the view to display.

#How to create a controller function

```javascript
var myController = function($scope) {
  $scope.message = "Angular Tutorial";
}
```

#What is a model

In AngularJS, the data that you attach to the scope is the model. Here e.g. 'message' is the model.

#Create a complex object

```javascript
var myController = function($scope) {
    var employee = {
        firstName: "John",
        lastName: "Doe",
        gender: "Male"
    };
    // Attach the complex object to the scope
    $scope.employee = employee;
};
```

#Bootstrap our application with the module (see angularjs1-5-modules) and apply the controller
 
```javascript
<!DOCTYPE html>
<html lang="en" data-ng-app="myModule">
<head>
    <meta charset="UTF-8">
    <title>My Angular App</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>
    <script src="script.js"></script>
</head>
<body>
    <div data-ng-controller="myController">
        <div>
            First Name: {{ employee.firstName }}
        </div>
        <div>
            Last Name: {{ employee.lastName }}
        </div>
        <div>
            Gender: {{ employee.gender }}
        </div>                
    </div>
</body>
</html>
```

Which shows in the browser as

```javascript
First Name: John
Last Name: Doe
Gender: Male
```

#What happens if you misspell the controller name

The HTML will render the values literally

```javascript
First Name: {{ employee.firstName }}
Last Name: {{ employee.lastName }}
Gender: {{ employee.gender }}
```