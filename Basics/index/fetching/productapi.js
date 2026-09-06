fetch("https://dummyjson.com/products")
    .then((res)=>{
        console.log(res);
        return res.json();
    })
    .then((v)=>{
        // console.log(v.recipes);
        console.log(v);
        
    let output="";
     v.products.map((v)=>{
        console.log(v);
        output=output+`
            
            <main>
            <div id="container">
            <div id="b1">
            <img src="${v.thumbnail}"/>
            </div>

            <div id="b2">
            <h2 id="title">${v.title}</h2>
            <h2 id="brand">${v.category}</h2>
            <h3 >Availability: ${v.availabilityStatus}</h3>
            <h3>Category:${v.category}</h3>
            <h3>Return policy:${v.returnPolicy}</h3>
            <h3>Shipping Information:${v.shippingInformation}</h3>
            <h3>Stock:${v.stock}</h3>
            <h3>warranty Information:${v.warrantyInformation}</h3>
            <h3>Price:${v.price}</h3>
            </div>

            <div id="b3">
            <button >Remove</button>
            </div>
            </div>
            
            
            </main>`;
    });
    document.getElementById("root").innerHTML=output;
});   