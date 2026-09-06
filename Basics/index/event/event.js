//!--onclick as an argument in html
// function demo(event){
//     console.log('demo');
//     console.log(event);
    
// }

//!---using addEventListener()-----------
// let btn=document.getElementById('btn')
// btn.addEventListener('click',(e)=>{
//     console.log(e);
//     console.log('hello');
    
    
// })

//!----onclick in js
// btn.onclick=function demo(){
//     console.log('demo onlck js');
// }



//!--types of an event---------------------------------------------------------------------
//!--1.MouseEvent
// let btn=document.getElementById('btn')
// btn.addEventListener('click',()=>{
//     console.log('mouse event');
    
// })

//!--double click
// let btn=document.getElementById('btn')
// btn.addEventListener('dblclick',()=>{
//     console.log('dbclick mouse event');
// })

//!--mouse enter

// btn.addEventListener("mouseenter",()=>{
//     console.log('mouse enter ');
    
// })
//!--mouse leave
// btn.addEventListener("mouseleave",()=>{
//     console.log('mouse leave ');
    
// })

//!---mouse over
// btn.addEventListener("mouseover",()=>{
//     console.log('mouse over ');
    
// })

//!--mouse out
// btn.addEventListener("mouseout",()=>{
//     console.log('mouse out ');
    
// })

//!---mouse move
// btn.addEventListener("mousemove",()=>{
//     console.log('mouse move ');
    
// })

//!---mouseup
// btn.addEventListener("mouseup",()=>{
//     console.log('mouse up ');
    
// })



// btn.addEventListener("mousedown",()=>{
//     console.log('mouse down ');
    
// })


//!-----Keyboard events--------------------------------------------------------

//!---keydown-----
// let user=document.getElementById("user");
// user.addEventListener("keydown",(e)=>{
//     console.log(e.key);
    
// })

//!---keyup
// user.addEventListener("keyup",(e)=>{
//     console.log(e.key);
    
// })

//!---keypress

// user.addEventListener("keypress",(e)=>{
//     console.log(e.key);
    
// })

//!---Form/input events---------------------------------
//!--input
// let user=document.getElementById("user");
//  user.addEventListener("input",(e)=>{
//     console.log(e.target.value);
// })


//!--focus
// let user=document.getElementById("user");
//  user.addEventListener("focus",(e)=>{
//     console.log(e.target.value);
// })


//!--blur
// let user=document.getElementById("user");
//  user.addEventListener("blur",(e)=>{
//     console.log(e.target.value);
// })


//!--change
// let user=document.getElementById("user");
//  user.addEventListener("change",(e)=>{
//     console.log(e.target.value);
// })


//!----Pointer events---------------------------

// let btn=document.getElementById("btn");
//  btn.addEventListener("pointerenter",(e)=>{
//     console.log("pointer event");
// })


// let btn=document.getElementById("btn");
//  btn.addEventListener("pointerleave",(e)=>{
//     console.log("pointer leave");
// })


// let btn=document.getElementById("btn");
//  btn.addEventListener("pointerover",(e)=>{
//     console.log("pointer event");
// })


// let btn=document.getElementById("btn");
//  btn.addEventListener("pointerout",(e)=>{
//     console.log("pointer event");
// })


// let btn=document.getElementById("btn");
//  btn.addEventListener("pointermove",(e)=>{
//     console.log("pointer event");
// })


// let btn=document.getElementById("btn");
//  btn.addEventListener("pointerdown",(e)=>{
//     console.log("pointer event");
// })

// let btn=document.getElementById("btn");
//  btn.addEventListener("pointerup",(e)=>{
//     console.log("pointer event");
// })



