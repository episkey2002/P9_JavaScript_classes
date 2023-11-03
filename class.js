//Class is a template for creating Javascript objects
//JavaScript class is not an object
class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}
let myCar1 = new Car("Maruti","2008");
let myCar2 = new Car("Ford","2022");
console.log(myCar1);

class BVIEER_student
{
    constructor(name, age, address, mobile_no, marks,attended)
    {
        this.name = name;
        this.age = age;
        this.address = address;
        this.mobile_no = mobile_no;
        this.attended = attended
        this.marks = marks;

    }
    passOrFail()
    {
        if(this.attended === true)
        {
            if(this.marks < 20)
            {
                console.log(`${this.name} is failed`);
            }
            else
            {
                console.log(`${this.name} is pass`);
            }    
        }
       else
       {
        console.log("Student was absent for the exam!!");
       } 
    }
}  
let student1 = new BVIEER_student("PRITI", 22, "DAUND", 7709894837, 32, true);

console.log(student1);
student1.passOrFail();