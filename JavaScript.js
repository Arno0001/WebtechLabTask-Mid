let studentName = prompt("Enter student name:");         
let studentAge = parseInt(prompt("Enter student age:")); 
let studentCGPA = parseFloat(prompt("Enter CGPA:"));     
let studentStatus = prompt("Enter student status (Active/Inactive):"); 
let studentGrade = prompt("Enter grade (A/B/C/F):");    

console.log("\n    Student Information    ");
console.log("Name    : " + studentName);
console.log("Age     : " + studentAge);
console.log("CGPA    : " + studentCGPA);
console.log("Status  : " + studentStatus);
console.log("Grade   : " + studentGrade);



let courses = ["Web Technology", "OOP", "Database"];

console.log("\n    Enrolled Courses ");
for (let i = 0; i < courses.length; i++) {
    console.log("Course " + (i + 1) + ": " + courses[i]);
}



let marks = parseInt(prompt("Enter your marks (0-100):"));

let determinedGrade;

if (marks >= 80) {
    determinedGrade = "A+";
} else if (marks >= 70) {
    determinedGrade = "A";
} else if (marks >= 60) {
    determinedGrade = "B";
} else {
    determinedGrade = "F";
}

console.log("\n    Grade Result    ");
console.log("Marks Entered : " + marks);
console.log("Grade         : " + determinedGrade);



function showStudent(name, age) {
    console.log("\n    showStudent() Function    ");
    console.log("Student Name : " + name);
    console.log("Student Age  : " + age);
}


showStudent(studentName, studentAge);



let studentNames = [];

console.log("\n    Enter 3 Student Names    ");
for (let i = 0; i < 3; i++) {
    let name = prompt("Enter name of student " + (i + 1) + ":");
    studentNames.push(name);
}

console.log("\n    All Student Names    ");
for (let i = 0; i < studentNames.length; i++) {
    console.log("Student " + (i + 1) + ": " + studentNames[i]);
}

