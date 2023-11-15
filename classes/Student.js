const Person = require('./Person');
const School = require('./School');

class Student extends Person {
	constructor(name) {
		super(name);
		this.grades = [];
		this.id = null;
	}
	setId(id) {
		if (this.id === null) {
			this.id = id;
		}
	}
	getId() {
		return this.id
	}
	addGrade(course, grade) {
		this.grades.push({ course, grade })
	}
	getGrades() {
		return this.grades
	}
	getAverageGrade() {
		if (this.grades.length === 0) {
            return -1;
        }

        const totalGrade = this.grades.reduce((sum, { grade }) => sum + grade, 0);
        return totalGrade / this.grades.length;
	}
	description() {
		return `Created person with name ${this.name}, ${this.age()} years old. `
	}
}
module.exports = Student