//for loop

// let num=2;
// for(let i=1; i<=10; i++){
//     console.log(num + '*' + i + '='+ num*i);
    
// }

// let fact=1;
// let num=7
// for(let i=7; i>=1; i--){
//     fact=fact*i;
    
// }
// console.log(fact);



let num=153;
let sum=0;//27+125+1=153

let temp=num

while(temp>0){
    let rem=rem%10;//3 //5
    sum = sum+ rem* rem * rem;//3*3*3 //5*5*5  //1
    temp=parseInt(temp/10); //15 //1 //0

}

if(sum==num){
    console.log("armstrong")
}

else{
    console.log("not armstrong")
}