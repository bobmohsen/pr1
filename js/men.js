let shoppeng = document.querySelector('.shoppeng')
let quonted = document.querySelector('.quonted') ;Number
let liast = document.querySelector('.liast')
let clos = document.querySelector ('.clos')
let listCard = document.getElementById('listCard')
let boby = document.querySelector('body')
let total= document.querySelector('.total')
let card = document.querySelector('.card')
let btn = document.querySelector('.btn')



shoppeng.addEventListener('click',function(){
    boby.classList.add('actev')


})
clos.addEventListener ('click',function(){
    boby.classList.remove('actev')

})
let products =[
    {
        id:1,
        name: 'pizza',
        img: '/صور اكلات/28.jpg',
        priss: 200,
        del: 250
    },
    {
        id :2,
        name: 'chicken figers',
        img: '/صور اكلات/11.jpg',
        priss: 175,
        del : 200

    },
    {
        id :3,
        name: 'Dougnut',
        img: '/صور اكلات/12.jpg',
        priss: 100,
        del : 200

    },
    {
        id :4,
        name: 'sandwich',
        img: '/صور اكلات/14.jpg',
        priss: 177,
        del : 200

    },{
        id :5,
        name: 'main course',
        img: '/صور اكلات/15.jpg',
        priss: 100,
        del : 120

    },{
        id :6,
        name: 'anndwich jarboua',
        img: '/صور اكلات/16.jpg',
        priss: 100,
        del : 150

    },{
        id :7,
        name: 'fries',
        img: '/صور اكلات/17.jpg',
        priss: 115,
        del : 132

    },{
        id :8,
        name: 'twister chicken',
        img: '/صور اكلات/19.jpg',
        priss: 200,
        del : 250

    },{
        id :9,
        name: 'biscuit',
        img: '/صور اكلات/20.jpg',
        priss: 150,
        del : 188

    },{
        id :10,
        name: 'mozz sticks',
        img: '/صور اكلات/21.jpg',
        priss: 250,
        del : 300

    },{
        id :11,
        name: 'burger means',
        img: '/صور اكلات/23.jpg',
        priss: 120,
        del : 154

    },{
        id :12,
        name: 'taco',
        img: '/صور اكلات/24.jpg',
        priss: 150,
        del : 154

    },{
        id :13,
        name: 'soups',
        img: '/صور اكلات/25.jpg',
        priss: 120,
        del : 154

    },{
        id :14,
        name: 'clean eating bowl',
        img: '/صور اكلات/26.jpg',
        priss: 188,
        del : 252

    },{
        id :15,
        name: 'healthy bowl',
        img: '/صور اكلات/27.jpg',
        priss: 157,
        del : 200

    },{
        id :16,
        name: 'quinoa salad',
        img: '/صور اكلات/3.jpg',
        priss: 259,
        del : 300

    },{
        id :17,
        name: 'lenti soup',
        img: '/صور اكلات/22.jpg',
        priss: 120,
        del : 130

    },{
        id :18,
        name: 'grille meat',
        img: '/صور اكلات/10.jpg',
        priss: 244,
        del : 322

    },{
        id :19,
        name: 'grilled chicken and vegetable skewers',
        img: '/صور اكلات/2.jpg',
        priss: 320,
        del : 552

    },{
        id :20,
        name: 'steamed broccoli with lemon',
        img: '/صور اكلات/4.jpg',
        priss: 200,
        del : 236

    },{
        id :21,
        name: 'spinach and feta stuffed chicken breast',
        img: '/صور اكلات/5.jpg',
        priss: 150,
        del : 178

    },{
        id :22,
        name: 'baked salmon with herbs',
        img: '/صور اكلات/6.jpg',
        priss: 180,
        del : 199

    },{
        id :23,
        name: 'vegetable stir-fry',
        img: '/صور اكلات/7.jpg',
        priss: 120,
        del : 154

    },{
        id :24,
        name: 'pasta',
        img: '/صور اكلات/8.jpg',
        priss: 120,
        del : 154

    },{
        id :25,
        name: 'beef-stuffed dandwich with a side of potatoes',
        img: '/صور اكلات/9.jpg',
        priss: 120,
        del : 154

    },{
        id :26,
        name: 'sushi',
        img: '/صور اكلات/14.jpeg',
        priss: 99,
        del : 200

    },{
        id :27,
        name: 'tacos',
        img: '/صور اكلات/29.jpg',
        priss: 77,
        del : 155

    },{
        id :28,
        name: 'croissant',
        img: '/صور اكلات/30.jpg',
        priss: 77,
        del : 120

    },{
        id :29,
        name: 'gyoza',
        img: '/صور اكلات/31.jpg',
        priss: 120,
        del : 220

    },{
        id :30,
        name: 'padthai',
        img: '/صور اكلات/32.jpg',
        priss: 87,
        del : 302

    },{
        id :31,
        name: 'guacamol',
        img: '/صور اكلات/33.jpg',
        priss: 198,
        del : 254

    },{
        id :32,
        name: 'margarta',
        img: '/صور اكلات/1a.jpg',
        priss: 100,
        del : 201

    },{
        id :33,
        name: 'espresso',
        img: '/صور اكلات/2a.jpg',
        priss: 87,
        del : 120

    },{
        id :34,
        name: 'mojito',
        img: '/صور اكلات/3a.jpg',
        priss: 65,
        del : 99

    },{
        id :35,
        name: 'smoothie',
        img: '/صور اكلات/4a.jpg',
        priss: 105,
        del : 132

    },{
        id :36,
        name: 'orange juice',
        img: '/صور اكلات/a5.jpg',
        priss: 66,
        del : 100

    },{
        id :37,
        name: 'lemonade',
        img: '/صور اكلات/a6.jpg',
        priss: 65,
        del : 132

    },{
        id :38,
        name: 'pina colada',
        img: '/صور اكلات/a7.jpg',
        priss: 80,
        del : 110

    },{
        id :39,
        name: 'sahlab',
        img: '/صور اكلات/a8.jpg',
        priss: 77,
        del : 130

    },{
        id :40,
        name: 'hot choclate',
        img: '/صور اكلات/a9.jpg',
        priss: 198,
        del : 254

    },{
        id :41,
        name: 'lced tea',
        img: '/صور اكلات/a10.jpg',
        priss: 50,
        del : 100

    },{
        id :42,
        name: 'sophisticated',
        img: '/صور اكلات/a11.jpg',
        priss: 105,
        del : 189

    },{
        id :43,
        name: 'luxury latte',
        img: '/صور اكلات/a12.jpg',
        priss: 100,
        del : 172

    },{
        id :43,
        name: 'orange date juice',
        img: '/صور اكلات/a13.jpg',
        priss: 67,
        del : 175

    },{
        id :44,
        name: 'opulent oat milk latte',
        img: '/صور اكلات/a14.jpg',
        priss: 100,
        del : 150

    },{
        id :45,
        name: 'shay alshshwkwlata',
        img: '/صور اكلات/a15.jpg',
        priss: 50,
        del : 130

    },{
        id :46,
        name: 'sumuthi alshuwkulata bialkabtshinu',
        img: '/صور اكلات/a16.jpg',
        priss: 99,
        del : 145

    },{
        id :47,
        name: 'milk chocolate',
        img: '/صور اكلات/a17.jpg',
        priss: 120,
        del : 198

    },{
        id :48,
        name: 'Apple almond juice',
        img: '/صور اكلات/a18.jpg',
        priss: 88,
        del : 180

    },{
        id :49,
        name: 'lemon juice',
        img: '/صور اكلات/a19.jpg',
        priss: 50,
        del : 100

    },{
        id :50,
        name: 'affogato',
        img: '/صور اكلات/a20.jpg',
        priss: 50,
        del : 100

    },{
        id :51,
        name: 'cofemex',
        img: '/صور اكلات/a21.jpg',
        priss: 50,
        del : 100

    },{
        id :52,
        name: 'malc drenk',
        img: '/صور اكلات/a22.jpg',
        priss: 80,
        del : 120

    },{
        id :53,
        name: 'affogato',
        img: '/صور اكلات/a23.jpg',
        priss: 50,
        del : 100

    },{
        id :54,
        name: 'nascfe cofe blak',
        img: '/صور اكلات/a24.jpg',
        priss: 50,
        del : 100

    },{
        id :55,
        name: 'affogato',
        img: '/صور اكلات/a25.jpg',
        priss: 50,
        del : 100

    },{
        id :56,
        name: 'iscrem',
        img: '/صور اكلات/a26.jpg',
        priss: 50,
        del : 100

    }
]

let data_add  = [];
// data_add.push(products)
function initApp(){
    products.forEach((e, k) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="img/${e.img}">
            <div class="title">${e.name}</div>
            <div class="price"><del class="del">${e.del}</del>$${e.priss}</div>
            <button class="btenn" onclick="addToCard(${k})">Add To Card</button>`;
            liast.appendChild(newDiv);
    })
}

initApp()

document.addEventListener('click',function(e){
    if(e.target.className === 'btenn' ){
let a = e.target.innerHTML;
e.target.classList.add('contenu')

}
})

onclick
//دي الزرار الي بدوس عليه في الصفحه 
function addToCard(e){

    if( data_add[e]==null ){
        data_add[e] = JSON.parse(JSON.stringify(products[e]));
        data_add[e].quonted= 1 // دي انا بقوله لما يشتري خليه يشتري واحد بس لو عايز يزود يبقا يزود تحت
    }   
    
    
    rpledcard()
}

// دي الي بضيفلك في السله الحاجات الي اشتريتها 
function rpledcard(){
    listCard.innerHTML = ''; // دي li
    let caunt = 0 ; // ده لي العداد
  let  totalpres = 0; // ده لي اجاي السعر 


  data_add.forEach(function(e,i){
    totalpres = totalpres +e.priss // اجملي السعر لكل المناجات
    caunt = caunt + e.quonted  // دي اعمالي الي اشتراه لكل المنتاجات

    if(e != null){
let li = document.createElement("li");

li.innerHTML = `
<div id="img"> <img src="./img/${e.img}" alt=""></div>
       <div class="name"> ${e.name}</div>
       <div class="press">${e.priss}</div>
       <div class = "i">
       <button class="add-" onclick="adds(${i}, ${e.quonted-1}) ">-</button>
       <div class="cunt"> ${ e.quonted} </div>
       <button class="add-"  onclick="adds(${i}, ${e.quonted+1} )" >+</button>
       </div>

`
listCard.appendChild(li)

    }
  })
total.innerHTML =totalpres.toLocaleString()
quonted.innerHTML = caunt
}


////

function adds(e, i){
    if(i == 0){ // لو رقم العنصر = 0 اعملي احزفلي العنصر كله 
        delete data_add[e]
        

    }else{
        data_add [e].quonted = i; 
        data_add[e].priss = i * products[e].priss;

    }
    rpledcard() // شغلي الفنكشن دي 
}





















///  دي بتاع الاسكرل لما تنزل تطلك لفوق

window.onscroll = function(){
if(window.scrollY >= 100){
btn.style.display = 'block'

}else{
    btn.style.display = 'none'
}
}

btn.onclick = function(){
    window.scroll({top : 0,behavior :'smooth'})
}