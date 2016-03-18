angular.module('app', ['ngMaterial'])

.component('login', {
	templateUrl: 'login.html',
	controller: LoginCtrl,
	bindings: {
	}
});

function LoginCtrl($http) {
	this.$http = $http;
	this.greeting = 'hi';
}

LoginCtrl.prototype.login = function() {
	this.$http.post('/login', {username: this.username, password: this.password}).then(() => {
		console.log('done login');
	}).catch(() => {
		console.log('login error');
	});
}
