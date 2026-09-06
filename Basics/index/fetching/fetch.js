fetch("https://dummyjson.com/recipes")
    .then((res)=>{
        console.log(res);
        return res.json();
    })
    .then((v)=>{
        // console.log(v.recipes);
    let output="";
     v.recipes.map((v)=>{
        console.log(v);
        output=output+`
            
            <main>
            <img src="${v.image}"/>
            <h2>${v.name}</h2>
            <h3 id="rat">⭐${v.rating}</h3>
            <h3 id='serving> Serving: ${v.servings}</h3>
            <button>ADD TO CART 🛒</button>
            </main>`;
    });
    document.getElementById("root").innerHTML=output;
});   