angular.module('ui-options', [])
    .directive('uiOptions', [function () {

        return  function (scope, elm, iAttrs) {
            scope.$watch(iAttrs.uiOptions, function (val) {
                renderOption(val);
            }, true);

            var renderOption = function (val) {
                elm.find("option").remove();
                if (val) {
                    var options = [];
                    angular.forEach(val, function (obj) {
                        options.push("<option value='" + obj.value + "' >" + obj.text + "</option>")
                    });
                    elm.append(options.join(""));
                }
            };
        };
    }]);
