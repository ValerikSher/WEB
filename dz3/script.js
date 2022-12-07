// Первая задача

// let i = 10;
// let a = 1;
// while(i<30){
//     if(i%2!=0){
//         a = a *i;
//     }
//     i++;
// }
// document.write("Произведение= " + a);

// Вторая задача

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