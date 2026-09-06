function bank(a){
    console.log('first');
    
    let saving=a;
      function fd(b){
        let fd_balance=b;
         console.log('second');
         
            function total(c){
                console.log('third');
                
                let total_amount=saving+fd_balance + c;
                console.log(total_amount);
                
             } return total
      } return fd
}bank(100)(200)(500);
