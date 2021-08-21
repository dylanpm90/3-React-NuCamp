// student
class Student {
    constructor(name, email, community){
    this.name = name;
    this.email = email;
    this.community = community;
    }
};
// bootcamp
class Bootcamp {
    constructor(name, level, students = []){
        this.name = name;
        this.level = level;
        this.students = students;
    }
    studentToRegister(newStudent){
        const matchingStudents = this.students.filter((student) => student.email === newStudent.email);
        console.log(matchingStudents);
        if (matchingStudents.length === 0) {
            this.students.push(newStudent);
            console.log(`Registering ${newStudent.name[0].toUpperCase() + newStudent.name.slice(1).toLowerCase()} to ${this.name} bootcamp.`);
        } else {
            console.log(`${newStudent.name[0].toUpperCase() + newStudent.name.slice(1).toLowerCase()} is already registered.`);
        }
        console.log(this.students);
        return this.students;
    }
    
};
// new students
const dylan = new Student("dylan","@whatever", "NuCamp");
const terisa = new Student("terisa","@email", "NuCamp");
const conrad = new Student("conrad","@company", "NuCamp");
const destiny = new Student("destiny","@work", "ACA");
const thomas = new Student("thomas","@aol", "ACA");

// new bootcamps
const nucamp = new Bootcamp("NuCamp", 3);
const aca = new Bootcamp("ACA", 5);

// register students
nucamp.studentToRegister(dylan);
nucamp.studentToRegister(terisa);
nucamp.studentToRegister(conrad);
nucamp.studentToRegister(destiny);

//duplicate students
nucamp.studentToRegister(terisa);

// register to another bootcamp
aca.studentToRegister(destiny);
aca.studentToRegister(thomas);
nucamp.studentToRegister(conrad);

//duplicate
aca.studentToRegister(thomas);
