const person = {
	firstname: 'Kadi',
	lastname: 'Tamm',
	age: 16,
	email: 'kadi.tamm@gmail.com',
	hobbies: ['tennis', 'korvpall'],
	address: {
		city: 'Tallinn',
		county: 'Harjumaa'
	},
	GetBirthyear: function(){
		return 2023 - this.age
	},
	showhobbies: function() {
		this.hobbies.forEach(function(hobby){
			console.log(hobby)
		} )
	},
	ShowAddressData: function() {
		for(addresskey in this.address){
			console.log(this.address[addresskey])
		}
	}
}


person.ShowAddressData()