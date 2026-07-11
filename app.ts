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