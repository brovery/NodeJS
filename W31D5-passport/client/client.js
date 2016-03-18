angular.module('app', ['ngMaterial'])

.component('login', {
	templateUrl: 'login.html',
	controller: LoginCtrl,
	bindings: {
	}
});

function LoginCtrl($http) {
	this.greeting = 'hi';
}

LoginCtrl.prototype.login = function() {
	console.log('logging in...');
}
