//==========================================================================//
//This one is  typescript code to demonstrate the use of interface and function.
interface user{
    name: string;
    age:number;
    email: string;
    gender?:string; //optional property
}

function getuserdata(param:user):void{
    console.log("Hello")
}
getuserdata({name:"John", age:30, email:"john@example.com"});

//==========================================================================//

//Extending Interfaces

interface admin extends user{ //admin get the property of user by extend 
    admin:Boolean;    // and get its own property

}

function getadmindata(param:admin):void{
    param.name; //it get the property of user 
    param.admin; //also gets its own property
}
getadmindata({name:"Bobby",age:29,email:"abc.gmail.com",admin:true,gender:"Male"})


//===========================================================================//

//If interfaces have same name, they dont overwrite ,they  will be merge//

interface One{  //first interface
    name:string;
}
interface One{ //second interface same name as first 
    age:Number;
}
function test(param:One){
    param.name;
    param.age;
}
test({name:"Bobby",age:12})

//=============================================================================//
// class and constructor
class Person{
    constructor(public name:string,public age:number){}
}
let p1=new Person("Bobby",22)
let p2=new Person("Ram",21)

//=============================================================================//

//this keyword

class Info {
   name="harsh";
   changeinfo(){
    this.name="bobby" //to acess the class variable inside the method we should use this keyword//
   }

}

//================================================================================//
// public private protected 

class Car{
    constructor(private model:string,public price:number,public type:string){} //model is private so it can only be accessed inside the class//
}

class EvCar extends Car{
    constructor(public battery:number,model:string,price:number,type:string){
        super(model,price,type) //super is used to call the constructor of parent class//
    }
    getDetails(){
        console.log(this.model) //this will give error because model is private in parent class//
    }

}
let ev1=new EvCar(100,"Tesla",100000,"Electric")

//=================================================================================//
// Readonly property

class Info1{
    constructor(public readonly name:string){}

    changename(){
        this.name="bobby" //this will give error because name is readonly property//
    }

}
let info1=new Info1("Biru")
info1.changename() // This will cause a compile-time error

//=================================================================================//
//Getters and Setters
class Info2{
    constructor(public _name:string,public age:Number){}
    get name(){
        return this._name;  //Getter is always return type and it is used to get the value of the property
    }
    set name(value:string){
        this._name=value; //Setter is always void type and it is used to set the value of the property
    }
}
let i1=new Info2("Alice", 30);
i1.name; // This will call the getter method to retrieve the name
i1.name="Bob"; // This will call the setter method to change the name   

//=================================================================================//
// static property and method

class Info3{
    static version="1.0.0"; //static property can be accessed without creating an instance of the class

    static getVersion(){
        return Math.random(); //static method can be accessed without creating an instance of the class
    }
}
Info3.version; // This will access the static property
Info3.getVersion(); // This will call the static method

//=================================================================================//
