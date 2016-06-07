(function() {

	'use strict';

	angular
		.module('ionTogglePassword', [])
		.directive('togglePasswordCheckbox', togglePasswordCheckbox)
		.directive('togglePasswordInput', togglePasswordInput);

	function togglePasswordInput() {
		var directive = {
			restrict: 'A',
			replace: false,
			transclude: false,
			link: link
		};

		link.$inject = ['$scope', '$element', '$attrs', '$rootScope'];

		function link($scope, $element, $attrs, $rootScope) {
			$scope.$on("toggle-password", function(event, password) {
				if(password) {
					$element.attr('type', 'text');
				}

				if(!password) {
					$element.attr('type', 'password');
				}
			});
		}

		return directive;
	}

	function togglePasswordCheckbox() {
		var directive = {
			restrict: 'E',
			replace: true,
			transclude: false,
			controller: controller,
			scope: {
				label: '@label',
				checkboxClass: '@checkboxClass'
			},
			template: '<label class="item item-checkbox {{checkboxClass}}">' +
						  '<div class="checkbox">' +
							'<input type="checkbox" ng-model="data.password" ng-click="togglePasswordField(data.password)" />' +
						  '</div>' +
						  '{{label}}' +
					  '</label>'
		};

		controller.$inject = ['$scope', '$element', '$attrs', '$rootScope'];

		function controller($scope, $element, $attrs, $rootScope) {
			$scope.data = {
				password: false
			};

			$scope.togglePasswordField = function(password) {
				$rootScope.$broadcast("toggle-password", password);
			};
		}

		return directive;
	}

})();