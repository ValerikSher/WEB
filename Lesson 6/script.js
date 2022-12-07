// let js = ['нужно', 'учить', 'JavaScript'];
// document.write(js + "<br>");

// let a = js.pop()
// document.write(a + "<br>");
// document.write(js + "<br>");

// js.push("JavaScript", "!");
// document.write(js + "<br>");

// document.write(js.shift() + "<br>");
// document.write(js + "<br>");

// js.unshift("Почему", "нужно");
// document.write(js + "<br>"); // добавляет элемент в начало массива

// js.splice(1, 3);
// document.write(js + "<br>"); //удаляет из массива указанное число элементов начиная с заданной позиции (первый параметр), второй параметр указывает количество для удаления

// js.splice(0, 2, "Мы", "изучаем");
// document.write(js + "<br>");

// js.splice(2, 0, "сложный", "язык");
// document.write(js + "<br>");

// js.splice(-2, 0, "но", "очень", "интересный");
// document.write(js + "<br>");

// let st1 = js.join(" ");
// document.write(st1 + "<br>");

// console.log(js);
// console.log(st1);






// let js = ['нужно', 'учить', 'JavaScript'];

// document.write(js + "<br>");

// js.reverse(); // меняет парядок следования элементов в массиве на обратный
// document.write(js + "<br>");



// let a = js.pop()

// document.write(a + "<br>");  // удаляет последний элемент из массива и возвращает удаленный элемент

// document.write(js + "<br>");



// js.push("JavaScript", "!");

// document.write(js + "<br>");  // добавляет элемент в конец массива



// document.write(js.shift() + "<br>");  // удаляет первый элемент из массива и возвращает удаленный элемент

// document.write(js + "<br>");



// js.unshift("Почему", "нужно");

// document.write(js + "<br>");  // добавляет элемент в начало массива



// js.splice(0, 1);

// document.write(js + "<br>");  // удаляет из массива указанное число элементов начиная с заданной позиции (первый параметр), второй параметр указывает количество для удаления



// js.splice(0, 2, "Мы", "изучаем");

// document.write(js + "<br>");



// js.splice(2, 0, "сложный", "язык");

// document.write(js + "<br>");



// js.splice(-2, 0, "но", "очень", "интересный");

// document.write(js + "<br>");



// let st1 = js.join(" & ");

// document.write(st1 + "<br>");



// console.log(js);

// console.log(st1);

let st=['Фамилия','Имя','Отчество']
let fio = new Array(3);

for(let i=0; i< fio.length; i++){
    fio[i] = prompt("Введите данные: \n" + st[i]);
}
console.log(fio);

let st2 = fio.join(" ");
document.write(st2);

// функции

/* 
function(){
    тело функции
}
*/

// function hello(firstName){ //аргументы
//     alert("Hello, " + firstName + "!");
// }
// hello("Игорь");
// hello("Ирина");

// function test(a, b, c){
//     alert(a + b+ c);
// }

// let n1 = 10, n2 = 20, n3 = 30, m1 = 5, m2 = 2, m3 = 3;
// test(n1, n2, n3);
// test(m1, m2, m3);

// function test(a, b, c){
//     let res = a+b+c;
//     return res;
// }

// let n1 = 10, n2 = 20, n3 = 30;
// let q = test(n1, n2, n3);
// alert("Возвращаемое значение: " + q);


// let s =0;
// for(let i=0; i<5; i++){
//     let  s = 5;
//     document.write(i+ " ");
// }
// document.write("<br>s = " + s + " ");

// let s =0;
// for(let i=0; i<5; i++){
//     s = 5;
//     document.write(i+ " ");
// }
// document.write("<br>s = " + s + " ");

// let s =1;
// if(s< 5){
//     let s = 5;
//     // document.write(i+ " ");
// }
// document.write("<br>s = " + s + " ");


// function test(a, b, c){
//     let res = a+b+c;
//     return res;
// }

// let n1 = 10, n2 = 20, n3 = 30;
// let q = test(n1, n2, n3);
// alert("Возвращаемое значение: " + q);

// function test2(n, m){
//     if(m==0){
//         alert("Hello")
//         return "На ноль делить нельзя";
//     }
//     // else{
//         return n/m;
//     // }
// }

// let a1 = test2(10, 2);
// console.log(a1);


// let a2 = test2(10, 0);
// console.log(a2);



// function showArrayContent(arrayToShow) {
//     if(arrayToShow.length==1){
//         return arrayToShow;
//     }
//     else{
//         let a = arrayToShow.pop();
//         let st = arrayToShow.join(", ")
//         let b = st + " и " + a;
//         return b;
//     }
// }
//     let a = new Array('Текст');
//     let b = new Array('день', 'ночь');
//     let c = new Array('зима', 'весна', 'лета', 'осень');
//     alert(showArrayContent(a));
//     alert(showArrayContent(b));
//     alert(showArrayContent(c));


/* 
let func = function(Аргументы){
    тело функции;
}
*/

// function sum1(a,b){
//     return a +b;
// }

// let sum2 = function (a,b){
//     return a +b;
// }

// console.log(sum1(2, 3));
// console.log(sum2(2, 3));


// let kolkop = function(k){
//     let kop = k;
//     if(k>=0 && k<=99){
//             if(k==11||k==12||k==13||k==14){
//         alert(k + " копеек");
//     }
//     // else if(k%2==1){
//     //     alert(k + " копейка");
//     // }
//     // else if(k%2==)
//     else{
//         kop = kop % 10;
//         if(kop==1){
//             alert(k + " копейка");
//         }
//         else if(kop>=2 && kop<=4){
//             alert(k + " копейки");
//         }
//         else{
//             alert(k + " копеек");
//         }
//     }
//     }
//     else{
//         alert("Вы ввели некорректное значение");
//     }

// }

// let a = +prompt("Введите число от 1 до 99");
// kolkop(a);