angular.module('ie.select', [])
    .directive('ieSelectFix', [
        function () {
            return {
                restrict: 'A',
                require: 'select',
                link: function (scope, element, attributes) {
                    var isIE = document.attachEvent;
                    if (!isIE) return;

                    var control = element[0];
                    scope.$watch(attributes.ieSelectFix, function () {
                        //it should be use javascript way, not jquery way.
                        var option = document.createElement("option");
                        control.add(option, null);
                        control.remove(control.options.length - 1);
                    });
                }
            }
        }
    ]);

