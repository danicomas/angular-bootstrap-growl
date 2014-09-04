'use strict';
angular.module('angular-bootstrap-growl', []).factory('bootstrapGrowl', [function () {

    var factory = function (content, options) {
        $.growl(content, options);
    };

    return factory;
}]).provider('$bootstrapGrowl', function () {
    return {
        default_options: $.growl.default_options,
        $get: function () {
            return {

            }
        }
    }
});