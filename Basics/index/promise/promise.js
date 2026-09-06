// console.log('first line');

// let p1 = new Promise((res,rej)=>{
//     res('i am resolved');

    // rej('i am rejected')
// });

// console.log(p1);

// p1.then((v) =>{
//     console.log(v);
//     console.log('i am then block');
    
    
// }).catch(()=>{
//     console.log(' i am catch block');
    
// }).finally(()=>{
//     console.log('i am finally block');
    
// })

// console.log('last line');

//!----------------------------------------------------------------------------------------

// setTimeout(()=>{
//     console.log('happy birthday');
    
// },9000)

// setInterval(()=>{
//     console.log('happy birthday zoyaa--interval');
    
// },4000)

// console.log('last line');


//!---static method of promise

//!--1.all()
//!---if any one of promises in p1,p2,p3 rejected then catch block will be executed  
// let p1 = new Promise((resolved,rejected)=>{
//     resplved('i am p1');
// })


// let p2 = new Promise((resolved,rejected)=>{
//     rejected('i am p2');
// })


// let p3 = new Promise((res,rej)=>{
//     resolved('i am p3');
// })


// Promise.all([p1,p2,p3]).then(()=>{
//     console.log('i am then block');
    
// }).catch(()=>{
//     console.log('iam catch block');
    
// }).finally(()=>{
//     console.log('i am finally block');
    
// })

//!----------------------------------------------------------------------------------------------

// !---2.allsettled()
//!--it checks whether promises p1,p2,p3 are settled or not
//!--catch block will never execute
// let p1 = new Promise((resolved,rejected)=>{
//     resolved('i am p1');
// })


// let p2 = new Promise((resolved,rejected)=>{
//     rejected('i am p2');
// })


// let p3 = new Promise((resolved,rejected)=>{
//     resolved('i am p3');
// })


// Promise.allSettled([p1,p2,p3]).then(()=>{
//     console.log('i am then block');
    
// }).catch(()=>{
//     console.log('iam catch block');
    
// }).finally(()=>{
//     console.log('i am finally block');
// })

//!----------------------------------------------------------------------------------------------
//!---3.race()

// let p1 = new Promise((resolved,rejected)=>{
//     rejected('i am p1');
// })


// let p2 = new Promise((resolved,rejected)=>{
//     resolved('i am p2');
// })


// let p3 = new Promise((resolved,rejected)=>{
//     resolved('i am p3');
// })


// Promise.race([p1,p2,p3]).then((v)=>{
//     console.log(v);    
//     console.log('i am then block');
    
// }).catch(()=>{
//     console.log('iam catch block');
    
// }).finally(()=>{
//     console.log('i am finally block');
    
// })


//!------ex2--------------
// let p1 = new Promise((resolved,rejected)=>{
//     setTimeout(()=>{
//         rejected('i am p1');
//                 },3000)
// });


// let p2 = new Promise((resolved,rejected)=>{
// setTimeout(()=>{
//         rejected('i am p2');
//                 },7000)
// });


// let p3 = new Promise((resolved,rejected)=>{
// setTimeout(()=>{
//         rejected('i am p3');
//              },11000)
// });


// Promise.race([p1,p2,p3]).then((v)=>{
//     console.log(v);    
//     console.log('i am then block');
    
// }).catch(()=>{
//     console.log('iam catch block');
    
// }).finally(()=>{
//     console.log('i am finally block');
    
// })

//!---------------------------------------------------------------
//!---4.any()

// let p1 = new Promise((resolved,rejected)=>{
//     resolved('i am p1');
// })


// let p2 = new Promise((resolved,rejected)=>{
//     rejected('i am p2');
// })


// let p3 = new Promise((resolved,rejected)=>{
//     rejected('i am p3');
// })


// Promise.any([p1,p2,p3]).then((v)=>{
//     console.log(v);
    
//     console.log('i am then block');
    
// }).catch(()=>{
//     console.log('iam catch block');
    
// }).finally(()=>{
//     console.log('i am finally block');
    
// })


//!---ex2---------------------------

// let p1 = new Promise((resolved,rejected)=>{
//     setTimeout(()=>{
//         rejected('i am p1');
//                 },3000)
// },3000);


// let p2 = new Promise((resolved,rejected)=>{
// setTimeout(()=>{
//         rejected('i am p2');
//                 },3000)
// },1000);


// let p3 = new Promise((resolved,rejected)=>{
// setTimeout(()=>{
//         resolved('i am p3');
//              },3000)
// },5000);


// Promise.any([p1,p2,p3]).then((v)=>{
//     console.log(v);
    
//     console.log('i am then block');
    
// }).catch(()=>{
//     console.log('iam catch block');
    
// }).finally(()=>{
//     console.log('i am finally block');
    
// })

//!-------------------------------------------------------------------------------------------


//!--promise chaining----------------


