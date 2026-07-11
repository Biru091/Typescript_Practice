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