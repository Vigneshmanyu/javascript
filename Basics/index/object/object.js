//!--using literal way
// let emp={
//     name:'anish',
//     age:27,
//     city:'hyd'
// }

// console.log(emp); 
// console.log(emp.name); //!---read

// emp.skill='css';  //!---insert
// console.log(emp);

// emp.age=10;   //!---update
// console.log(emp);

// delete emp.city;  //!---delete
// console.log(emp);


//!---using object constructor
// let emp=new Object();

// console.log(emp);

// emp.name='sai',
// emp.age=10;
// console.log(emp);


//!--using function as constructor
// function Cake(cname,cprice){
//     this.cakename=cname;
//     this.cakeprice=cprice;
// }


// let c1=new Cake('red velvet',400);
// console.log(c1);
// let c2=new Cake('vanilla',500);
// console.log(c2);

//!---Methods in object----------------------------------------------------------------------

// let emp={
//     name:'raju',
//     age:30,
//     city:'hyd'
// }

// let objkey=Object.keys(emp);  //!------1
// console.log(objkey);


// let objval=Object.values(emp);   //!------2
// console.log(objval);


// Object.freeze(emp);  //!------3
// emp.skills='html';
// emp.age=23;
// delete emp.age;
// console.log(emp);


// console.log(Object.isFrozen(emp));  //!------4


// Object.seal(emp);  //!------5
// emp.skills='html';
// emp.age=23;
// delete emp.age;
// console.log(emp);


// console.log(Object.isSealed(emp));  //!------6

// console.log(Object.hasOwn(emp,'age'));   //!------7


// let product={
//     brand:'puma',
//     price:5000
// };


// let product2=Object.assign(product); //!------8 shallow copy of an object
// product2.brand='nike';
// console.log(product2);
// console.log(product);




//!--date and time---------------------------------------------------------------------------------------------------------

// let ref=new Date();
// console.log(ref);
// console.log(ref.getFullYear());
// console.log(ref.getMonth());
// console.log(ref.getDay());
// console.log(ref.getHours());
// console.log(ref.getSeconds());
// console.log(ref.getMinutes());
// console.log(ref.getMilliseconds);
// console.log(ref.toLocaleDateString);
// console.log(ref.toLocaleTimeString);


//!----math-------------------------------------------------

// let a=Math.PI;

// let a=Math.floor(20.9);
// let a=Math.ceil(20.1)
// let a=Math.round(20.4)

// let a=Math.random()
// let a=Math.ceil(Math.random()*100000)


// let a=Math.min(32,221,3244)
// let a=Math.max(32,221,3244)

// let a=Math.sqrt(4)
// let a=Math.cbrt(8)

// let a=Math.pow(5,3)
// console.log(a);


























