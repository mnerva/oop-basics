const Student = require('./Student');

class School {
	constructor(school_name) {
		this.school_name = school_name
		this.students = []
		this.courses = []
	}
	addCourse(course) {
		if (!this.courses.includes(course)){
			this.courses.push(course)
		}
	}
	addStudent(student) {
		if (student.age() >= 7) {
			if (!this.students.includes(student)) {
				const uniqueId = this.students.length + 1
				student.setId(uniqueId);
				this.students.push(student)
			}
		}
	}
	addStudentGrade(student, course, grade) {
		if (this.students.includes(student) && this.courses.includes(course)) {
			student.addGrade(course, grade);
            course.addGrade(student, grade);
        }
	}
	getStudents() {
		return this.students;
	}
	getCourses() {
		return this.courses;
	}
	getStudentsOrderedByAverageGrade() {
		return this.students.sort((a, b) => b.getAverageGrade() - a.getAverageGrade());
	}
}
module.exports = School