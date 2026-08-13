// const stu1 = {
//     name: "jalaj kamat",
//     age: 25,
//     marks: 95,
//     getMarks: function(){
//         return this.marks;
//     },
// };
// const stu2 = {
//     name: "niraj kamat",
//     age: 45,
//     marks: 25,
//     getMarks: function(){
//         return this.marks;
//     },
// };
// const stu3 = {
//     name: "nitin kamat",
//     age: 65,
//     marks: 65,
//     getMarks: function(){
//         return this.marks;
//     },
// };
// let arr = [1,2,3];
// let arr2 = [1,2,3];

// arr.sayHello = () => {
//     console.log("hello!, I am arr")
// };
// arr2.sayHello = () => {
//     console.log("hello!, I am arr")
// };
function PersonMaker(name, age){
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hi, my name is ${this.name}`);
        },
    };
    return person;
}