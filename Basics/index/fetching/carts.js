fetch("https://dummyjson.com/carts")
    .then((res)=>{
        console.log(res);
        return res.json();
    })
    .then((v)=>{
        // console.log(v);
    output=""
    v.carts.map((v)=>{
        // console.log(v);
        v.products.map((t)=>{
            console.log(t);
            output=output+`
            
            <main>
            <img src="${t.thumbnail}"/>
              <h2>${t.title}</h2>
            </main>`;
        
        })
    })
    document.getElementById("root").innerHTML=output;

});   
   
