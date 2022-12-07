// let st = "I\'m a JavaScript \"programmer\"";
// let st2 = "Я учу JavaScript. Мне нравится JavaScript.";
// st = st.concat(st2);
// document.write(st + "<br>");
// document.write(st.slice(0,3) + "<br>"); //возвращает подстроку начиная с начальной позиции не включая её
// document.write(st.slice(6)+"<br>");
// document.write(st.slice(-23)+"<br>");
// document.write(st.substring(0, 3)+"<br>"); //возвращает подстроку начиная с начальной позиции до конечной позиции не вкдючая её
// document.write(st.substring(-23)+"<br>"); //отрицательный индекс будет браться как значение 0

// let a = st.split("JavaScript");
// console.log(a);
// document.write(a.join("C++"));

// let style = prompt("Введите свойство CSS", "background-color");
// alert(def(style));

// function def(str){
//     let arr = str.split("-"); // arr=['background','color']
//     for(let i = 1; i < arr.length; i++){
//         arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
//     }
//     return arr.join('');
// }

// события

// function loadStr(){
//     alert("Страница была загружена");
// }

// let m =document.getElementById("mes");

// function over(){
//     m.style.color = 'red';
// }

// function out(){
//     m.style.color = 'yellow';
// }

// function change(){
//     let id = document.getElementById('h');
//     id.style.color = 'blue';
// }


// function randomBg(){
//     let r = Math.floor(Math.random()*256);
//     let g = Math.floor(Math.random()*256);
//     let b = Math.floor(Math.random()*256);
//     document.body.style.background = "rgb(" + r + ", " + g +", " + b + ")";
// }

// let newImg = document.getElementById('newimg');

// function on(){
//     newImg.src = 'night.png';
// }

// function off(){
//     newImg.src = 'day.png';
// }


// function change(id){
//     id.innerHTML = "Новый текст";
// }

// function setColor(color){
//     document.body.style.background = color.className;
// }

// let q = document.getElementById("but");

// q.onclick = function(){
//     alert("Спасибо!");
// }


// but.onclick = function(){
//     alert("Спасибо!");
// }

// function hello(){
//     alert("Спасибо!");
// }

// but.onclick = hello;


let el = document.querySelector("#elem");

el.addEventListener('click', function(){
    el.innerHTML = "Новый текст";
});

el.addEventListener("contextmenu", function(){
    el.style.color = 'green';
    el.style.background = "yellow";
})

// let c = document.querySelector("#ev");

// document.addEventListener('mousemove', function(event){
//     let x = event.clientX;
//     let y = event.clientY;
//     c.textContent = "X = " + x + ", Y = " + y;
//     c.addEventListener('dblclick', function(event){
//         event.target.style.background = 'red';
//     });
// })

// document.addEventListener('mousemove', function(event){
//     let x = event.clientX;
//     let y = event.clientY;
//     k = x - 110;
//     n = y -110;
//     c.textContent = "X = " + k + ", Y = " + y;
//     c.addEventListener('dblclick', function(event){
//         event.target.style.background = 'red';
//     });
// })



// let input = document.querySelector("#but");
// input.addEventListener('click', handle);
// function handle(){
//     alert("Спасибо");
//     input.removeEventListener('click', handle);
// }

// // setTimeout(функция, задержка);

// setTimeout("alert('Текст')", 3000);


// document.write("<div id='dt'>Создание анимированного текста</div>");

// let text = document.querySelector('#dt').innerHTML;
// console.log(text);
// let i = 0;

// window.addEventListener('load', animText);

// function animText(){
//     let tag = document.querySelector("#dt");
//     console.log(tag);
//     tag.innerHTML = text.substring(0, i);
//     i++;
//     if (i>text.length){
//         i = 0;
//     }
//     setTimeout(animText, 100);
// }