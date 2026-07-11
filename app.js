"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getuserdata(param) {
    console.log("Hello");
}
getuserdata({ name: "John", age: 30, email: "john@example.com" });
function getadmindata(param) {
    param.name; //it get the property of user 
    param.admin; //also gets its own property
}
getadmindata({ name: "Bobby", age: 29, email: "abc.gmail.com", admin: true, gender: "Male" });
function test(param) {
    param.name;
    param.age;
}
test({ name: "Bobby", age: 12 });
//=============================================================================//
//# sourceMappingURL=app.js.map