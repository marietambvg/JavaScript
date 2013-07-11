var School = Class.create({
  init: function(schoolName, town, classes) {
    this.schoolName = schollName;
    this.town = town;
    this.clasess = classes;
  }
});

var SchoolClass=Class.create({
  init: function(className, studentCapacity, formTeacher, students) {
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
      for (var i=0; i<this.students.length; i++) {
          studentsHolder+=this.students[i].fname+" "+this.students[i].lname+", ";
      };
      
    studentsHolder=studentsHolder.slice(0,studentsHolder.length-2);
    return studentsHolder;
  },

  toString:function(){
    return "Class name: "+this.className+ "; Form teacher: "+this.formTeacher.fname+" "+this.formTeacher.lname+"; Student Capacity: "+
    this.studentCapacity+" "+this.studentsToString();

  }
});


var Person=Class.create({
    init: function(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    return this;
  },

   introduce: function() {
    return "Name: " + this.fname + " " + this.lname + " Age: " + this.age;
  }
});

var Student = Class.create({
    init: function (fname, lname, age, grade) {
    this._super.init(fname, lname, age);
    this.grade = grade;
    return this;
  },
  getGrade: function() {
    return this.grade;
  },
  introduce: function() {
    return this._super.introduce() + " Grade: "+ this.grade ;
  }
});

Student.inherit(Person);

var Teacher = Class.create({
    init: function (fname, lname, age, speciality) {
    this._super.init(fname, lname, age);
    this.speciality = speciality;
    return this;
  },
  getSpeciality: function() {
    return this.speciality;
  },
  introduce: function() {
    return this._super.introduce() + " Speciality: " + this.speciality;
  }
});

Teacher.inherit(Person);

var pesho = new Student("Peter", "Petrov", 16, 9);
var ivan = new Student("Ivan", "Ivanov", 16, 9);
var mara = new Student("Maria", "Ilieva", 16, 9);
var gosho = new Teacher("Gosho", "Goshov", 50, "Mathematics");
var raspberry=new SchoolClass("Raspberry",30,gosho);
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