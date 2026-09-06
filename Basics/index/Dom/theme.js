let btn=document.getElementById('btn');
let theme='light';

btn.addEventListener('click',()=>{
    if (theme=='light'){
        document.body.style.backgroundColor='black';
        document.body.style.color='white';
        btn.textContent='light mode';
        theme='dark';  // change light → dark
    }
    else{
        document.body.style.backgroundColor='white';
        document.body.style.color='black';
        btn.textContent='Dark mode';
        theme='light';  // change dark → light
    }
})