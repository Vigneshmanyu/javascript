//!-- Methods of DOM -----!
//!-- 1 ----!
// let a=document.getElementById("root");
// console.log(a);
// a.style.backgroundColor="red"

//!--- 2 ---!
// let b=document.getElementsByClassName("content")
// console.log(b);
// b[0].style.color="red"
// b.item(1).style.backgroundColor="green"

// let c=Array.from(b);
// console.log(c);
// c.map((v) => {
//     v.style.color="green"
// })

//!-- 3 ---!
// let a=document.getElementsByTagName("p")
// console.log(a);
// a[1].style.backgroundColor="green"
// a.item(1).style.color="grey"

//!-- 4 ---!
// let a=document.querySelector("#root")
// let a=document.querySelector(".content")
// let a=document.querySelector(".content")
// console.log(a);
// a.style.color="blue"

//!---5
// let a=document.querySelectorAll('.content');
// console.log(a);
// a[1].style.backgroundColor='violet';
// a.item(1).style.color='red';


//!---6
// let a=document.querySelector("p")
// console.log(a.getAttribute('class'));  //!---6
// console.log(a.getAttribute('style'));

//!------7
// let a=document.querySelector("p")
// a.setAttribute('id','para')
// a.setAttribute('style','color:green')


// let a=document.getElementById('root');

// let newelement=document.createElement('h1'); //!----8
// console.log(newelement);
// newelement.innerText='i am H1 tag';
// newelement.setAttribute('id','newelem')



// a.append(newelement) //!---9

// a.appendChild(newelement) //!---10


// a.prepend(newelement) //!---11











