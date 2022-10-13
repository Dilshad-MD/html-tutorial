// class emp {
//   constructor() {
//     console.log("Sajid");
//   }
//   getName() {
//     console.log("Tarique");
//   }
// }
// const empObj = new emp();
// empObj.getName();

// // // =======================

// class abc {
//   fName = "Sajid";
//   lName = "Akhtar";
//   getFullName() {
//     return this.fName + " " + this.lName;
//   }
// }
// const abcObj = new abc("Sajid", "Akhtar");
// console.log(abcObj.getFullName());

// // ======================

class emp {
  constructor(name1, name2) {
    this.fname = name1;
    this.lname = name2;
  }
  getFullName() {
    return this.fname + " " + this.lname;
  }
}
const empObj = new emp("Sajid", "Akhtar");
console.log(empObj.getFullName());
const empObj1 = new emp("Tarique", "Akhtar");
console.log(empObj1.getFullName());
