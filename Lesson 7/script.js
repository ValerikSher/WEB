// (function(){
//     alert("Привет мир!")
// }());

// let a = (function(n){
//     return n*n
// });

// alert(a(4));

// arrow function - стрелочная функция

// function test(a, b, c){
//     let res = a + b + c;
//     return res;
// }

// console.log(test(10,20,30));

// let test2 = (a,b,c) => a+b+c;

// console.log(test2(10,20,30));

// let test3 = (a,b,c) => {
//     let res = a+b+c;
//     return res;
// }
// console.log(test3(10,20,30));

// let hello = (n) => alert("Hello, " + n);
// hello("Irina");

// Math

// document.write(Math.round(7.9) + "<br>");
// document.write(Math.floor(7.9) + "<br>");
// document.write(Math.ceil(7.1) + "<br>");

// (function(){
//     document.write(Math.random() + "<br>");
// }());

// (function(min, max){
//     document.write(Math.floor(Math.random() * (max - min) + min) + "<br>");
// }(2, 9));

// document.write(Math.floor(Math.random() * 9) + "<br>");

// document.write(Math.floor(Math.random() * 7 +2) + "<br>");

// document.write(Math.floor(Math.random() * 8 + 7) +"<br>");

// let fn = function(words){
//     // let b =Math.floor(Math.random()* words.length);
//     // console.log(b);
//     return words[Math.floor(Math.random()* words.length)];
// }

// let mas = ['Цикл', 'Массив', 'Условие', 'Функция'];
// let a = fn(mas);
// document.write(a);

// let mas = ["blue", "black", "orange", "red", "gold", "violet"];
// let b = a(mas);

document.write("<div id='block'></div>");
let id = document.getElementById("block");

id.style.width = '100px';
id.style.height = '100px';
createColor();

function createColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    id.style.background = 'rgb('+ r +', '+ g +', '+ b +')';
}





// document.write("<div id='block'></div>");
// let id = document.getElementById("block");

// id.style.width = '100px';
// id.style.height = '100px';
// id.style.background = 'rgb('+ createColor() +', '+ createColor() +', ' + createColor() + ')';;

// function createColor(){
//     return Math.floor(Math.random() * 256);
// }



// function hello(name="незнакомец"){
//     //name = name || "незнакомец";
//     document.write("Привет, " + name + "!<br>");
// }

// hello("Сергей");
// hello();

// function square(width=120, height=100, background='green'){
//     document.write("<div id ='shape'></div>");
//     let sq = document.querySelector("#shape");

//     sq.style.width = width + "px";
//     sq.style.height = height + 'px';
//     sq.style.background = background;
// }

// // square(200, 150, 'gold');
// // square(300,50);
// square('red');

// function hello(){
//     alert("Привет");
// }
// alert(hello);



// let st = "I'm a JavaScript \"programmer\"";
// document.write(st + "<br>");
// document.write(st[2] + "<br>");

// // st[2]='y';
// st = st[2] + 'y';
// document.write(st + "<br>");

// let st = "I\'m a JavaScript \"programmer\"";
// document.write(st + "<br>");
// document.write(st.length + "<br>");
// // методы строк

// document.write(st.toUpperCase() + "<br>");
// // document.write(st + "<br>");

// let n = prompt("Введите имя", "богдан");
// alert(first(n));

// function first(str){
//     let newStr= str[0].toUpperCase();
//     for(let i=1;i<str.length;i++){
//         newStr += str[i].toLowerCase();
//     }
//     return newStr;
// }


// let st2 = "Я учу JavaScript. Мне нравится JavaScript";
// st = st.concat(st2);
// document.write(st + "<br>");

// // document.write(st.indexOf("JavaScript") + "<br>"); //возврщает индекс на котором находится подстрока или "-1", если ничего не найдено
// // document.write(st.indexOf("JavaScript", 7) + "<br>");
// // document.write(st.lastIndexOf("JavaScript") + "<br>");

// // let email;
// // do {
// //     email=prompt("Введите email");
// //     if (email.indexOf("@")==-1){
// //         alert("Некорректный email. Повторите операцию");

// //     }
// //     else{
// //         break;
// //     }
// // } while(true);


// document.write(st.split(".") + "<br>");
// console.log(st);
// console.log(st.split('JavaScript'));

