// //!using literal way-----------------

// let arr=['html','css','js'];
// console.log(arr);
// console.log(arr[1]);


// arr[3]='react js'
// console.log(arr);

// arr[2]='javascript';
// console.log(arr);

// delete arr[1];
// console.log(arr);
// console.log(arr[1]);



//!-using in built array constructor

// let arr=new Array();
// console.log(arr);
// arr[0]='html'
// arr[1]='css'
// console.log(arr);



//!----using array.of()

// let arr=Array.of(1,2,3,4)
// console.log(arr);
// arr[4]='hi'
// arr[5]='js'
// console.log(arr);

//!--Array methods----------------------------------------------------------
// let arr=['html','css','js','react']
// console.log(arr.length);  //!------1

// arr.push('react js','next js')  //!------2
// console.log(arr);


// arr.pop(); //!------3
// console.log(arr);


// arr.unshift('java','pyhton') //!------4
// console.log(arr);


// arr.shift();     //!------5
// console.log(arr);

// arr.splice(1,2)         //!-----6
// arr.splice(1,2,'java','sql','python','django')
// console.log(arr);


// let arr1=arr.slice(1,3)   //!-----7
// console.log(arr1);


// let arr=['html','css','js','html','react'];
// console.log(arr.indexOf('html'));   //!-----8
// console.log(arr.indexOf('html',1));


// console.log(arr.lastIndexOf('html'));
// console.log(arr.lastIndexOf('html',2));   //!-----9


// console.log(arr.includes('js'));  //!-----10



// let arr=[10,20,30,40,50,60]

// arr.map((v,i)=>{  //!------11

//     console.log(v+5,i);
    
// });


// let arr1=arr.map((val)=>{ //!---12
//     return val+5;
// }
// )
// console.log(arr1);


// let arr=[10,20,35,65,75,121,143,21,41] //!------13
// let arr1=arr.filter((v)=>{
//     return v%2==0
// })

// console.log(arr1);



// let food=['paneer biryani','pizza','butter chicken','paneer chilli','shawarma','gulab jamun','ice cream','patato chips','chinese soup'];

// let filteredfood=food.filter((v)=>{
//     return v.includes('chi')
// })
// console.log(filteredfood);


// let values=[10,true,false,20,undefined,50,null,'hello'];
// let arr2=values.filter((v)=>{
//         return typeof(v)=='number';
// })
// console.log(arr2);


// let food=['paneer biryani','pizza','butter chicken','paneer chilli','shawarma','gulab jamun','ice cream','patato chips','chinese soup'];

// let filteredfood=food.find((v)=>{ //!-----14-- it returns first element which is satisfied condtion
//     return v.includes('chi')
// })
// console.log(filteredfood);


// let arr=[10,22,12,54,39,32,11,1]
// let arr1=arr.some((v)=>{   //!----15--atleast one lement should satisfy condition then it returns true else false
//     return v>53;
// })
// console.log(arr1);



// let arr2=arr.every((v)=>{  //!----16--all elements should stisfy condition then it returns true else false
//     return v>0;
// })
// console.log(arr2);




// let arr=[1,2,3,4,5]
// let arr1=arr.reduce((acc,cv)=>{ //!---17--it reduces all elemts to one element
//     console.log(acc,'accumulator');
//     console.log(cv,'current value');   
//     return acc+cv   
// },0);

// console.log(arr1);



// let arr=['html','css','js','react'];
// arr.reverse(); //!---18
// console.log(arr);


// let arr=['html','css','js','react'];
// arr.fill('java',3)//!---19
// console.log(arr);


// let arr=['html','css','js','react'];
// let str=arr.toString(); //!---20
// console.log(str);




// let arr=['html','css']
// let arr1=['js','react']
// let arr2=['java','sql']


// let arr3=arr.concat(arr1,arr2) //!---21
// console.log(arr3);



// let a=['html',['css',['js',['react']]]]

// let a1=a.flat(3) //!---22---it merges mulple arrays to single array
// console.log(a1);


// let str='jspiders';
// let b=Array.from(str); //!----23
// console.log(b);









//!---examples
// let emp={
//     name:'sai',
//     age:22,
//     skill:['html','css','js']
// }
// console.log(emp.skill);

// emp.skill.map((v)=>{
//     console.log(v);
    
// })


//!------question---1------------
// let student =[
//     {
//         name:'a',
//         city:'hyd',
//         skill:['html','css','js']
        
//     },
//     {
//         name:'b',
//         city:'pune',
//         skill:['java','sql','adv java']

//     },
//     {
//         name:'c',
//         city:'delhi',
//         skill:['java','sql','adv java']
//     }
// ]
// student.map((v)=>{
//     v.skill.map((m)=>{
//         console.log(m);
//     })
// })


// //!question--2-----------------

// let student = {
//     data: [
//     {
//         name:'a',
//         city:'hyd',
//         skill:['html','css','js']
        
//     },
//     {
//         name:'b',
//         city:'pune',
//         skill:['java','sql','adv java']

//     },
//     {
//         name:'c',
//         city:'delhi',
//         skill:['java','sql','adv java']
//     },
//     ],
// };
// student.data.map((v)=>{
//     v.skill.map((m)=>{
//         console.log(m);  
//     })
// })



//!-----question--4

// let student = {
//     data: [
//     {
//         name:'a',
//         city:'hyd',
//         skill:['html','css','js'],
//         rating:{
//             html:1,
//         },
        
        
//     },
//     {
//         name:'b',
//         city:'pune',
//         skill:['java','sql','adv java'],
//         rating: {
//             html:2,
//         },

//     },
//     {
//         name:'c',
//         city:'delhi',
//         skill:['java','sql','adv java'],
//         rating:{
//             html:3,
//         },
//     },
//     ],
// };

// student.data.map((v)=>{
//     console.log(v.rating.html);
  
// })


//!--question--5
// let student = {
//     data: [
//     {
//         name:'a',
//         city:'hyd',
//         skill:['html','css','js'],
//         rating:{
//             html:1,
//         },
//         Comment:{
//             user1:['nice']
//         }
        
        
//     },
//     {
//         name:'b',
//         city:'pune',
//         skill:['java','sql','adv java'],
//         rating: {
//             html:2,
//         },
//          Comment:{
//             user1:['super']
//         }

//     },
//     {
//         name:'c',
//         city:'delhi',
//         skill:['java','sql','adv java'],
//         rating:{
//             html:3,
//         },
//         Comment:{
//             user1:['awesome']
//         }
//     },
//     ],
// };

// student.data.map((v)=>{
//     v.Comment.user1.map((m)=>{
//         console.log(m);
        
//     })
// })


//!---question--6

let user=[{
    name:'smith',
    active:false
},
{
    name:'blake',
    active:true
},{
    name:'adam',
    active:true
}
]
//!---ouput should {name:'blake',active:true}

let result=user.find((v)=>{
    return v.active==true
})
console.log(result);
































