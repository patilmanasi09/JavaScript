let student = {
  name: "John",
  age: 20,
  grade: "A"
};

student.subject = "Math";   
student.grade = "A+";       
delete student.age;        

console.log(student);