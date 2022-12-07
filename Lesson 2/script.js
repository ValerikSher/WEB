// let a =parseInt( prompt("Введите первое число: "));
// let b = +prompt("Введите второе число: ");
// // console.log(typeof(a));
// // a = parseInt(a);
// // b = +b;
// alert("Сумма: " + (a + b));

// console.log(parseInt(21.84));
// console.log(parseFloat(21.84));
// console.log(parseFloat(21.84123).toFixed(2));
// console.log(Number(21.84));
// console.log(-"21.84");
// console.log(+true);
// console.log(+false);

// let a1 = parseInt(prompt("Любое число: ", 2));
// alert("Квадрат: " + a1 ** 2 + "\nКуб: " + a1 ** 3 + "\nВ четвёртой: " + a1 ** 4);

// let num = +prompt("Введите пятизначное число: ", "39671");
// let a, b, c, d, e;
// a = num % 10; //5
// e = parseInt(num / 10000); //1
// d = parseInt(num / 1000) - e * 10; //2
// c = parseInt(num / 100) - parseInt(num / 1000) * 10; //123.45 - 12.345*10 = 123.45 - 123.45 // 3
// b = parseInt(num / 10) - parseInt(num / 100) * 10; //4
// // alert(a,b,c,d,e);
// console.log(b);
// alert("Произведение: " + a*b*c*d*e + "\nСреднее арифметическое: " + (a+b+c+d+e)/5);

// let a = 0, b = 0;
// ++a; // a = a + 1
// console.log(a);
// b++;
// console.log(b);

// let a = 0, b = 0;
// let c = a++;
// let d = ++b;
// console.log(a); //1
// console.log(b); //1
// console.log(c); //0
// console.log(d); //1

// let a = 1;
// let b = a++;
// let c = b + 5 + a;
// alert(c);

// let sum = +prompt("Первое число: ", 5);
// console.log(sum);
// sum += +prompt("Введите 2 число: ", 4);
// // sum = sum +prompt("Введите 2 число: ", 4);
// console.log(sum);
// sum += +prompt("Введите 3 число: ", 6);
// console.log(sum);

// let st = "Строка";
// st += "Добавленная строка";
// console.log(st);

// console.log(5>3);
// console.log(5<3);
// console.log(5>=3);
// console.log(5<=3);
// console.log(5==3);
// console.log(5==5);
// console.log(5!=5);
// console.log(5!=3);
// console.log(5===5);
// console.log(5==="5");
// console.log(5!=="5");

// (7>3) ?  alert("7") : alert("3");

// let ch = +prompt("Угадайту число от 1 до 10");
// ch == 7 ? alert("Угадали!") : alert("Не угадали!");
// let num = 7;
// ch == num ? alert("Угадали!") : ch < num ? alert("Загаданное число больше!") : alert("Загаданное число меньше!");

//Операторы логического ветвления
/* 
if(условие){
    истина
}
else{
    ложь (false)
}
*/

// if (3 > 7) {
//     alert("7")
// }
// else {
//     alert("3")
// }
// alert(+false);

//False - 0, false, "", null, undefined, NaN

// let a = NaN;
// if(a){
//     alert(true);
// }

// let a = 12;
// let b = 6;
// if (b != 0){
//     let res = a / b;
//     alert("Результат: " + res);
// }
// else{
//     alert("Делить на 0 нельзя!");
// }

// let a = 12;
// let b = 16;
// if (a>b){
//     alert(a + " > " + b);
// }
// if{
//     alert(a + " < " + b);
// }
// if(a==b){
//     alert(a + " == " + b);
// }

// let d = prompt("Введите день недели (цифрами): ");
// if (d == 1) {
//     alert("Понедельник");
// }
// else if (d == 2) {
//     alert("Вторник");
// }
// else if (d == 3) {
//     alert("Среда");
// }
// else if (d == 4) {
//     alert("Четверг");
// }
// else if (d == 5) {
//     alert("Пятница");
// }
// else if (d == 6) {
//     alert("Суббота");
// }
// else if (d == 7) {
//     alert("Воскресенье");
// }
// else{
//     alert("Такого дня недели нет");
// }
// if(d > 7, d<1){
//     alert("Такого дня недели нет");
// }

// if(5 == 5 && 5 > 2){
//     console.log("True");
// }
// else{
//     console.log("False");
// }

// let age = prompt("Введите возраст: ");
// if(age >= 18 && age < 70){
//     alert("Получи права");
// }
// else{
//     alert("Права не давать");
// }

let age = prompt("Введите возраст: ");
if(age < 18 || age > 70){
    alert("Права не давать");
}
else{
    alert("Получи права");
}