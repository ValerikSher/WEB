document.write("<div id='pok'>Показать</div>");
document.write("<div id='scr'>Скрыть</div>");
document.write('<img src="riki.png" id="cart">');

let pok=document.querySelector("#pok");
let scr=document.querySelector("#scr");
let cart=document.querySelector("#cart");

pok.addEventListener('click', function(){
    cart.style.display="block";
});

scr.addEventListener('click', function(){
    cart.style.display="none";
})