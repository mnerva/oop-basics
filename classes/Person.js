class Person {
	constructor(name) {
		this.name = name
		this.birthYear = null
	}
	setDateOfBirth(year) {
		this.birthYear = year
	}
	getDateOfBirth() {
		return this.birthYear
	}
	age() {
		return new Date().getFullYear() - this.birthYear
	}
	getName() {
		return this.name
	}
	description() {
		return `Created person with name ${this.getName()}, ${this.age()} years old.`
	}
}
module.exports = Person