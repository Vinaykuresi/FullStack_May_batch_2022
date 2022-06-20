class Employee
  {
    constructor()
    {
       var name;
       var rating;
	   this.empName = "Vinay"
    }
        getName()
        {
          return this.name;
        }
      setName(name)
      {
        this.name=name;
      }
 
      getRating()
      {
        return this.rating;
      }
    setRating(rating)
    {
          this.rating=rating;
    }
    }
var emp=new Employee();
console.log(emp.name)
console.log(emp.empName)
emp.empName = "Geetha";
console.log(emp.empName)
//console.log(emp.getName())
//console.log(emp.getRating());
emp.setName("Naren");
emp.setRating(9);
console.log(emp.getName())
console.log(emp.getRating());
