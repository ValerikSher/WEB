//Date
// let d = new Date();
// document.write(d + "<br>");
// document.write(d.toDateString() + "<br>");
// document.write(d.getFullYear() + "<br>");
// document.write(d.getMonth() + 1 + "<br>");
// document.write(d.getDate() + "<br>");
// document.write(d.getDay() + "<br>");


//Сегодня: 7 ноября 2022, Понедельник
// let month =['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];

// let days =['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота']

// let d = new Date();
// let fullDate = "Сегодня: " + d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear() + ", " + days[d.getDay()];
// document.write(fullDate);



// setInterval(функция, интервал)

// setInterval(setColor, 3000);

// function setColor(){
//     document.body.style.background = document.body.style.background == "yellow" ? "orange" : "yellow";
// }




// document.write("<input type='button' value='Start/Stop'>");
// document.querySelector("input").addEventListener('click', start);

// let act, flag=false;

// function start(){
//     if(!flag){
//         act = setInterval(setColor, 1000);
//     }
//     else{
//         clearInterval(act);
//     }
//     // console.log(act);
//     flag = !flag
// }

// function setColor(){
//     let x =document.body;
//     x.style.background = x.style.background == "yellow" ? "orange" : "yellow";
// }



// document.write("<div id='text'>Здесь будет отображаться текущее время</div>");
// window.addEventListener('load', () => setInterval(time, 1000));

// function time(){
//     let d = new Date();
//     let hour = d.getHours();
//     let  min = d.getMinutes();
//     let sec = d.getSeconds();
//     if(sec<10){
//         sec = "0" + sec;
//     }
//     let tim = hour + ":" + min + ":" + sec;
//     document.querySelector("#text").innerHTML = tim;
// }

// let a = document.querySelector("#cl");
// a.addEventListener("click", myMove);



// function myMove(){
//     let elem = document.getElementById("animate");
//     let pos = 0;
//     setInterval(frame, 5);

//     function frame(){
//         if(pos == 350){
//             clearInterval(id);
//         }
//         else{
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + "px";
//         }
//     }
// }


// document.image.border =1;


// document.image.width =  200;
// document.image.height = 50;
// document.write("<br>Ширина изображения: " + document.image.width + "px");
// document.write("<br>Высота изображения: " + document.image.height + "px<br>");
// document.image.src="blue_star.png";



// document.image.addEventListener("click", changeImage);

// let flag = 0;
// function changeImage(){
//     if(flag == 0){
//         document.image.src="blue_star.png";
//         flag=1;
//     }
//     else{
//         document.image.src="golden_star.png";
//         flag=0;
//     }
// }

// let array = new Array('2.jpg', '3.jpg', '4.jpg');
// document.write("<input type='button' name='left' value='<'>");
// document.write("<img src='" + array[0] + "' id='sl'>");
// document.write("<input type='button' name='right' value='>'>");

// document.getElementsByName('right')[0].addEventListener("click", fnRight);
// document.getElementsByName('left')[0].addEventListener("click", fnLeft);

// let image = document.getElementById("sl");
// let i = 0;


// function fnRight(){
//     i++;
//     if(i==array.length){
//         i=0;
//     }
//     image.src = array[i];
// }

// function fnLeft(){
//     i--;
//     if(i<0){
//         i= array.length - 1;
//     }
//     image.src = array[i];
// }




// let t = document.querySelectorAll("#clock img");
// let imgTime=['c0.gif', 'c1.gif', 'c2.gif', 'c3.gif', 'c4.gif', 'c5.gif', 'c6.gif', 'c7.gif', 'c8.gif', 'c9.gif'];

// function clock(){
//     let d = new Date();
//     let hour = d.getHours();
//     let min = d.getMinutes();
//     let sec = d.getSeconds();
//     getImg(hour, min, sec);
//     setTimeout('clock()', 1000);
// }


// function getImg(h, m, s){
//     t[0].src = imgTime[Math.floor(h/10)];  //17=1 
//     t[1].src = imgTime[h%10] //17%10=7

//     t[3].src = imgTime[Math.floor(m/10)];
//     t[4].src = imgTime[m%10]

//     t[6].src = imgTime[Math.floor(s/10)];
//     t[7].src = imgTime[s%10]
// }
// clock();
