// let mas = [[2,1,1], [6,3,7],[8,5,6]];
// document.write(mas[1][2]);
// console,console.log(mas);
// console,console.table(mas);

// let vopros = ["На ноль делить можно?", "Волга впадает в Каспийское море", "Атмосферное давление увеличивается с высотой", "2x2 будет 8", "Дельфин - это рыба", "Мадонна - это настоящее имя певицы", "Первая мировая война началсь 1 сентября 1939 года"];

// let prav_otv = [false, true, false, false, false, false, false];

// let res = new Array();
// let sum = 0;

// for(let i = 0; i<vopros.length; i++){
//     let otvet = confirm(vopros[i]);
//     if(otvet == prav_otv[i]){
//         res[i]=10;
//         sum +=res[i];
//     }
//     else{
//         res[i]=0;
//     }
// }
// document.write("<table border='1' width='500'>");
// document.write("<tr>");
// document.write("<th>Вопрос</th>");
// document.write("<th>Баллы</th>");
// document.write("</tr>");

// for(let i=0; i<vopros.length; i++){
//     document.write("<tr>");
//     document.write("<td>" + vopros[i] + "</td>");
//     document.write("<td>"+ res[i] + "</td>");
//     document.write("</tr>");
// }

// document.write("<tr>");
// document.write("<th>Итого</th>");
// document.write("<th>"+ sum +"</th>");
// document.write("</tr>");
// document.write("</table>");

// let text1 = document.getElementById("text_1");
// console.log(text1);
// console.log(text1.textContent);

// text1.textContent = "Новое значение";

// let text2 = document.getElementById("text_2");
// console.log(text2);
// console.log(text2.textContent);
// text2.innerHTML = "Новое <b>содержимое</b>";

// let res = +prompt("Выберите изображение", "1 - собака, 2 -кот, 3 -птица, 4 - рыба");
// document.write("<div id='image'></div>");
// let img = document.getElementById("image");

// switch(res){
//     case 1:
//         img.innerHTML = "<img src='img/dog.jpg'>";
//     break;
//     case 2:
//         img.innerHTML = "<img src='img/cat.jpg'>";
//         break;
//     case 3:
//         img.innerHTML = "<img src='img/bird.jpeg'>";
//         break;
//     case 4:
//         img.innerHTML = "<img src='img/fish.jpeg'>";
//         break;
//     default:
//         alert("Такого изображения нет");
// }

// let tag = document.getElementsByTagName("p")[2];
// console.log(tag);
// tag.innerHTML = "Hello tag";
// tag.style.color = "blue";
// tag.style.fontWeight = "bold";
// tag.style.background = "silver";
// tag.style.padding = "10px 20px"

// tag.id = "test";
// tag.className = "x";

// let q = document.getElementsByClassName('a');
// console.log(q);
// q[1].style.color = "red";

// document.querySelector(css)
// document.querySelectorAll(css)

// let w = document.querySelector("p");
// console.log(w);
// let r = document.querySelectorAll("#text_1");
// console.log(r);

// let w = document.querySelector(".a");
// console.log(w);
// let r = document.querySelectorAll(".a")[1];
// console.log(r);

// let el = document.querySelectorAll("li");
// // alert(el.length);
// for(let i=0; i<el.length;i++){
//     el[i].innerHTML += "!!! фрукты";
// }

// let red = document.querySelectorAll(".red li");
// for (let j = 0; j<red.length; j++){
//     red[j].style.color = 'red';
//     red[j].innerHTML += "???";
// }
// let purple = document.querySelectorAll(".purple li");
// for (let i = 0; i<purple.length; i++){
//     purple[i].style.color = 'purple';
//     purple[i].innerHTML += "???";
// }

// let red = document.querySelectorAll(".red li")[1];
// red.style.color = 'red';