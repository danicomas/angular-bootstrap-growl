angular-bootstrap-growl
=======================

mouse0270/bootstrap-growl (https://github.com/mouse0270/bootstrap-growl) to AngularJS

### Scripts

```html
<script src="scripts/bootstrap-growl.js"></script>
<script src="scripts/angular-bootstrap-growl.js"></script>
```

### App

```js
var app = angular.module('YourApp', ['angular-bootstrap-growl']);
```

```js
app.config(function ($bootstrapGrowlProvider) {
  $bootstrapGrowlProvider.default_options.position = {
        from: "top",
        align: "center"
    };
    $bootstrapGrowlProvider.default_options.offset = 0;
    $bootstrapGrowlProvider.default_options.template.container = '<div class="col-xs-10 col-sm-10 col-md-12 alert text-center">';
    $bootstrapGrowlProvider.default_options.template.title_divider = '<br/>';
});
```

### Controller

```js
app.controller('eventsController', ['$scope', 'bootstrapGrowl', function ($scope, bootstrapGrowl) {
  bootstrapGrowl("This is what I think a Growl Notification looks like on Apple Computers.", { type: 'danger' });
}]);
```
