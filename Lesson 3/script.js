"use strict"

// let a = +prompt("Введите число")
// switch(a){ // a===1
//     case 1:{
//         alert("Код 1");
//     }break;
//     case 2:{
//         alert("Код 2");
//     }break;
//     case 3:{
//         alert("Код 3");
//     }break;
//     default:{
//         alert("Я таких значений не знаю")
//     }
// }

// let a = +prompt("Введите число '2 + 2'")
// switch(a){ // a===1
//     case 4:{
//         alert("Верно");
//     }break;
//     case 3:
//     case 5:{
//         alert("Не верно");
//     }break;
//     default:{
//         alert("Я таких значений не знаю")
//     }
// }

// let m=+prompt("Введите номаер месяца");
// let n = null;
// switch(m){
//     case 1: n = "Январь"; break;
//     case 2: n = "Февраль"; break;
//     case 3: n = "Март"; break;
//     case 4: n = "Апрель"; break;
//     case 5: n = "Май"; break;
//     case 6: n = "Июнь"; break;
//     case 7: n = "Июль"; break;
//     case 8: n = "Август"; break;
//     case 9: n = "Сентябрь"; break;
//     case 10: n = "Октябрь"; break;
//     case 11: n = "Ноябрь"; break;
//     case 12: n = "Декабрь"; break;
//     default: n ="Неправильный номер месяца";
// }
// alert("Вы ввели: " + n);

// + - * / % 

// let operator = prompt("Действие: +, -, *, /, %")
// let num1 = parseInt(prompt("Введите первое число: "));
// let num2 = parseInt(prompt("Введите второе число: "));

// switch (operator) {
//     case "+": {
//         alert("Сумма: " + (num1 + num2));
//     } break;
//     case "-": {
//         alert("Разность: " + (num1 - num2));
//     } break;
//     case "*": {
//         alert("Произведение: " + num1 * num2);
//     } break;
//     case "/": {
//         alert("Частное: " + (num1 / num2));
//     } break;
//     case "%": {
//         alert("Остаток от деления: " + (num1 % num2));
//     } break;
//     default: {
//         alert("Я таких значений не знаю")
//     }
// }

// document.write("<p>Текст выведен<u> в окно браузера</u></p>");
// document.write("<p><img src='1.jpg'></p>");

// циклы
// цикл do ... while(цикл с постусловием)

/* 
do{
    тело цикла;
}while(условие);
*/

// let i = 0;
// do {
//     document.write("Это номер: " + i + "<br>");
//     i++; // i = i +1
// } while (i < 25);

// Итерация - шаг цикла

// let i = 1;
// do {
//     document.write("Квадрат " + i + "равен " + i ** 2 + "<br>");
//     i++
//     // i = i + 5; // i = i +1
// } while (i < 25);

//Цикл while(цикл с предусловием)
/* 
while(условие){
    тело цикла;
}
*/
// написать программу выводящую четные числа в диапозоне от 1 до 20 (включительно)
// let i = 1;
// while(i<=20){
//     if (i%2!=0){
//         document.write(i + " ");
//     }
//     i++;
// }

// let i = 1;
// while(i<=30){
//     if (i%3!=0){
//         document.write(i + " ")
//     }
//     i++;
// }

// let i = +prompt("Введите меньшее число: ");
// let b = +prompt("Введите большее число: ");
// let a=0;
// while(i<=b){
//     a = a +i;
//     i++;
// }
// document.write(a);

// let i = 3;
// while(i != 0){
//     document.write(i + "<br>");
//     i--;
// }

// let a, res = 1;
// do{
//     a = +prompt("Введите число", 10);
//     if(a==0){
//         break;
//     }
//     res *= a;
// }while(true);
// alert("Сумма введённых чисел: " + res);

// let i = 0;
// do{
//     if(i==3){
//         i++;
//         continue;
//     }
//     if(i==6){
//         break;
//     }
//     document.write(i + " ");
//     i++;
// }while(i<10);

// написать программу вычисляющую произведение нечётных чисел в диапозоне от 10 до 30 
// let i = 10;
// let a = 1;
// while(i<30){
//     if(i%2!=0){
//         a = a *i;
//     }
//     i++;
// }
// document.write("Произведение= " + a);

// любое кол-во чисел найти среднее арифметическое 
let ver=0;
let a =1;
let niz=0;
let res
do{
    a = +prompt("Введите число: ", 10);
    if(a==0){
        break;
    }
    ver=ver+a;
    niz++;
}while(true);
res = ver/niz;
document.write("Среднее арифметическое: " + res);
