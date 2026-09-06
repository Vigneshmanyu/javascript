
//!--aync&await
// async function demo() {
//     let p1=new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res('i am resolved')
//         },4000)
//     })
//     let result=await p1;
//     console.log(result);
// }
// demo()


//!---realtime using of async await

// async function fetching() {
//     let res=await fetch("https://dummyjson.com/recipes")
//     let data=await res.json();
    // console.log(data);

//     output="";
//     data.recipes.map((v) => {
//         output += `
//         <main>
//         <img src="${v.image}"/>
//         <h2>${v.name}</h2>
//         </main>
//         `
//     })
//     document.getElementById("root").innerHTML=output;
    
// }
// fetching()



//!--try & catch block

// async function fetching() {
//     try {let res=await fetch("https://dummyjson.com/recipes")
//     let data=await res.json();
//     console.log(data);

//     output="";
//     data.recipes.map((v) => {
//         output += `
//         <main>
//         <img src="${v.image}"/>
//         <h2>${v.name}</h2>
//         </main>
//         `
//     })
//     document.getElementById("root").innerHTML=output;
// }
// catch(err){
//     console.log(erorr);   
// }
// }
// fetching()



