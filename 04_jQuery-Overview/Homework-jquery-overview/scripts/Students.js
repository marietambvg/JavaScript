
var SchoolClass={
  init: function(students) {
    
    if(students){
      this.students = students;
    }
   
  },

  addStudent: function(someStudent) {
      if(!this.students){
        this.students=[];
      }
      this.students.push(someStudent);
  },

  studentsToString: function(){
    var studentsHolder="Students: ";
      for (var student=0; student<this.students.length; student++) {
          studentsHolder+=this.students[student].introduce();
      };
      
    studentsHolder=studentsHolder.slice(0,studentsHolder.length-2);
    return studentsHolder;
  },

  studentsToTable:function(){
    console.log("this.students "+this.students.length)
    var table=$("<table/>");
    $("#students").append(table);
    console.log("create table");
    table.append("<thead/>").append("<tr/>").html("<th>First Name</th><th>Last Name</th><th>Grade</th>");
    var innerTable="<tbody>";
    //console.log(this.students.length)
    for  (var student=0;student< this.students.length; student++){
        innerTable+="<tr><td>"+this.students[student].fname+"</td><td>"+this.students[student].lname+"</td><td>"+this.students[student].grade+"</td></tr>";
        console.log(innerTable);
    }
    innerTable+="</tbody>";
    table.append(innerTable);
    $("td").css("border","solid blue");
    $("td").css("text-align","center");
    $("th").css("border","solid blue");
    $("th").css("text-align","center");
  },

  toString:function(){
    return this.studentsToString();

  }
};


var Person={
    init: function(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    return this;
  },

   introduce: function() {
    return "Name: " + this.fname + " " + this.lname ;
  }
};

var Student = Person.extend({
    init: function (fname, lname, age, grade) {
    Person.init.apply(this,arguments);
    this.grade = grade;
    return this;
  },
  getGrade: function() {
    return this.grade;
  },
  introduce: function() {
    return Person.introduce.apply(this) + " Grade: "+ this.grade ;
  }
});



var pesho = Object.create(Student);
pesho.init("Peter", "Petrov", 16, 9);
var ivan = Object.create(Student);
ivan.init("Ivan", "Ivanov", 16, 9);
var mara =Object.create(Student);
mara.init("Maria", "Ilieva", 16, 9);
//var gosho = Object.create(Teacher);
//gosho.init("Gosho", "Goshov", 50, "Mathematics");
var raspberry=Object.create(SchoolClass);
// raspberry.init("Raspberry",30,gosho);
// console.log("gosho.speciality is "+gosho.speciality);
// console.log("ivan.grade is "+ivan.grade);
// console.log("gosho.fname is "+gosho.fname);
// console.log(pesho.introduce());
// console.log(pesho.getGrade());
// console.log(gosho.introduce());
// console.log(gosho.getSpeciality());
raspberry.addStudent(pesho);
raspberry.addStudent(ivan);
raspberry.addStudent(mara);
raspberry.studentsToTable();
console.log(raspberry.toString());