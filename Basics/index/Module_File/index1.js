
//!---default export
export default function add(a,b){
    console.log(a+b);
    
}



//!----named export
export function multiply(a,b){
    console.log(a*b);
    
}


export let num=55;


//!-----2 way  for exporting------------------------------------------------------------

// export{
//     multiply ,num
// }


//!---using alias
export{
    multiply as mul,num as n
}

