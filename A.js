

let amazon= document.getElementById('amazon');

function api(){
    fetch('https://fakestoreapi.com/products').then(res=>res.json()).then(data=>{
        console.log(data);
       amazon.innerHTML= `${data.map((e)=>
       ` <div class="product">
        <img src="${e.image}" alt="">
        <h2>${e.category}</h2>
        <p>Price:${e.price}</p>
        <p>${e.description}</p>
        <p>${e.title}</p>
    </div>`

       )}`

       
    }).catch=(error)=>{
        console.log(error);
    }
}
api();