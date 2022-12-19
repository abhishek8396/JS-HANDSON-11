// const parent ={
//     firstname: "Aman",
//     lastname: "kumar",
//     fullname(){
//         return (this.firstname+" "+this.lastname)
//     }
// }
// const child={
//     _proto_:parent
// }
// console.log(child.fullname());

// function person(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }

arr = [2, 4, 98, 56, 23];
const arraysum ={
    addAll:function(arr){
        let sum = 0;
        for(let i = 0; i < arr.length; i++){
            sum = sum+arr[i];
        }
        console.log(sum);
    }
}
Array._proto_=arraysum;
Array.addAll(arr);


    