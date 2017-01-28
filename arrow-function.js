var names = ['Errol', 'Ricky', 'Mike', 'Dave'];

var person = {
	name: 'Errol',
	greet: function(name) {
		names.forEach((name) => {
			console.log(this.name + ' says hi to ' + name);
		})
	}
}

person.greet();

var addStatement = (a, b) => {
	return a + b;
}

console.log(addStatement(2,5));