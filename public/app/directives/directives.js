'use strict';

angular.module('directiveModule', [])
.directive('directiveFormInput', function(){
	
	return{
		restrict: 'E',
		replace: true,
		scope: {
			col: '@',
			label: '@',
			model: '=',
			id: '@'
		},
		template:	'<div class="input-field col {{col}}">\
				        <input data-ng-model="model" id="{{id}}" type="text" class="validate">\
				        <label class="active" for="{{id}}">{{label}}</label>\
				     </div>'
		}
	
})
.directive('directiveFormArea', function(){
	
	return{
		restrict: 'E',
		replace: true,
		scope: {
			col: '@',
			model: '=',
			label: '@',
			id: '@'
		},
		template:	'<div class="input-field col {{col}}">\
            			<i class="material-icons prefix">mode_edit</i>\
            			<textarea data-ng-model="model" id="{{id}}" class="materialize-textarea"></textarea>\
            			<label class="active" for="{{id}}">{{label}}</label>\
					</div>'		
	}
	
});
