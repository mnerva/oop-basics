class Course {
	constructor(course_name) {
		this.course_name = course_name;
		this.grades = []
	}
	addGrade(student, grade) {
		this.grades.push({ student, grade})
	}
	getGrades() {
		return this.grades
	}
	getAverageGrade() {
		if (this.grades.length === 0) {
			return -1
		}
		const totalGrade = this.grades.reduce((sum, { grade }) => sum + grade, 0);
        const averageGrade = totalGrade / this.grades.length;

        return {
        	course_name: this.course_name,
        	averageGrade: averageGrade.toFixed(2),
        }
	}
	description() {
		return this.course_name
	}
}

module.exports = Course