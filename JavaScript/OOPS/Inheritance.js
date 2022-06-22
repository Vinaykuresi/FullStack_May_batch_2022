class Time extends Date{
    constructor(){
        super();
    }
}

class Employee{
    constructor(name, age, qualification){
      this.name = name;
      this.age = age;
      this.qualification = qualification;
    }
  
    getEmployee(){
      console.log(this.name, this.age, this.qualification)
    }
  }

  class Organization extends Employee {
    constructor(orgName, orgStrength, orgDomain){
      super("Geetha", "23", "M.C.A");
      this.orgName = orgName;
      this.orgStrength = orgStrength;
      this.orgDomain = orgDomain;
    }

    getOrgEmployeeDetails(){
        super.getEmployee()
    }
  
    getOrganization(){
      console.log(this.orgName, this.orgStrength, this.orgDomain)
    }
  }
  
  var org = new Organization("Garuda");
//   console.log(org.orgName)
//   console.log(org.name)
  console.log(new Organization().getOrgEmployeeDetails())


// var time = new Time();
// console.log(time.getHours())