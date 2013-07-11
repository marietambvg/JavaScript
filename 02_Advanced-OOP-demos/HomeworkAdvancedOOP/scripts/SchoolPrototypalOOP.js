var School = {
  init: function(schoolName, town, classes) {
    this.schoolName = schollName;
    this.town = town;
    this.clasess = classes;
  }
};

var SchoolClass={
  init: function(className, studentCapacity, formTeacher,students) {
    this.className = className;
    this.studentCapacity = studentCapacity;
    if(students){
      this.students = students;
    }
    this.formTeacher = formTeacher;
  },

  addStudent: function(someStudent) {
      if(!this.students){
        this.students=[];
      }
      this.students.push(someStudent);
  },

  studentsToString: function(){
    var studentsHolder="; Students: ";
      for (var student=0; student<this.students.length; student++) {
          studentsHolder+=this.students[student].fname+" "+this.students[student].lname+", ";
      };
      
    studentsHolder=studentsHolder.slice(0,studentsHolder.length-2);
    return studentsHolder;
  },

  toString:function(){
    return "Class name: "+this.className+ "; Form teacher: "+this.formTeacher.fname+" "+this.formTeacher.lname+"; Student Capacity: "+
    this.studentCapacity+" "+this.studentsToString();

  }
};


var Person={
    init: function(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    return this;
  },

   introduce: function() {
    return "Name: " + this.fname + " " + this.lname + " Age: " + this.age;
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



var Teacher = Person.extend({
    init: function (fname, lname, age, speciality) {
    Person.init.apply(this,arguments);
    this.speciality = speciality;
    return this;
  },
  getSpeciality: function() {
    return this.speciality;
  },
  introduce: function() {
    return Person.introduce.apply(this) + " Speciality: " + this.speciality;
  }
});


var pesho = Object.create(Student);
pesho.init("Peter", "Petrov", 16, 9);
var ivan = Object.create(Student);
ivan.init("Ivan", "Ivanov", 16, 9);
var mara =Object.create(Student);
mara.init("Maria", "Ilieva", 16, 9);
var gosho = Object.create(Teacher);
gosho.init("Gosho", "Goshov", 50, "Mathematics");
var raspberry=Object.create(SchoolClass);
raspberry.init("Raspberry",30,gosho);
console.log("gosho.speciality is "+gosho.speciality);
console.log("ivan.grade is "+ivan.grade);
console.log("gosho.fname is "+gosho.fname);
console.log(pesho.introduce());
console.log(pesho.getGrade());
console.log(gosho.introduce());
console.log(gosho.getSpeciality());
raspberry.addStudent(pesho);
raspberry.addStudent(ivan);
raspberry.addStudent(mara);
console.log(raspberry.toString());