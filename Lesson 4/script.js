// for(let i = 1; i <6; i++){
//     document.write(i + " ")
// }

// let start = 5;
// let end = 10;
// let sum = 0;
// let p = 1;
// for(let i = start; i <= end; i++){
//     if(i%2==0){
//         sum += i;
//     }
//     else{
//         p *= i;
//     }
// }
// document.write("Сумма чётных чисел в диапазоне от " + start + " до " + end + " = " + sum + "<br>");
// document.write("Произведение нечётных чисел в диапазоне от " + start + " до " + end + " = " + p + "<br>");

// let i = 1;
// for(; ;){
//     if(i==6){
//         break;
//     }
//     document.write(i + " ");
//     i++;
// }

// разбить на цифры 12345

// let ch = 12345;
// let sum = 0;
// let k;
// let p = 1;
// let count = 0;
// for(let i = 1;;i*=10){  //10
//     let res = parseInt(ch/i); //12345
//     // if(i>ch){
//     // break;
//     // }
//     if(res==0){
//         break;
//     }
//     k = res%10;
//     sum += k;
//     p *= k;
//     // document.write(res%10);  //5 4 3 2 1
//     count++;
// }
// document.write(sum + "<br>");
// document.write(p + "<br>");
// document.write(sum/count);

// for(let i = 0; i < 4; i++){
//     document.write("+++ <br>");
//     for(let j = 0; j< 2; j++){
//         document.write( "&nbsp;&nbsp;&nbsp;&nbsp; =>" + j + "<br>");
//     }
// }

/* 
<table border='1'>
    <tr>
        <td>*<td>
        <td>*<td>
        <td>*<td>
    </tr>    
        <tr>
        <td>*<td>
        <td>*<td>
        <td>*<td>
    </tr>   
</table>    
*/
// let symbol = prompt("Символ: ");
// let tr = +prompt("Кол-во столбцов: ");
// let td = +prompt("Кол-во строк: ");
// document.write("<table border='1'>");
// for(let i = 0; i<tr;i++){
//     document.write("<tr>");
//     for(let j = 0; j<td;j++){
//         document.write("<td>" + symbol + "</td>");
//     }
//     document.write("</tr>");
// }
// document.write("</table>")

// document.write("<table border='1' align='center' width='300' height='300'>");
// for(let i = 1; i<11;i++){
//     document.write("<tr align='center'>");
//     for(let j = 1; j<11;j++){
//         if(j%2==0 && i%2!=0){
//             document.write("<td bgcolor='yellow'>" + i*j + "</td> ")
//         }
//         else if(j%2!=0 && i%2==0){
//             document.write("<td bgcolor='yellow'>" + i*j + "</td> ")
//         }
//         else{
//             document.write("<td bgcolor='red'>" + i*j + "</td> ")
//         }
//     }
//     document.write("</tr>");
// }
// document.write("</table>")

// let arr = [2, 3, 6, 7, 8, 9];
// console.log(arr);
// document.write(arr[0]);

// let arr = [2, 3, 6, 7, 8, 9]; //массив на 6 элементов 

// let arr1 = [2]; //массив на 1 элемент

// let arr2 = new Array(2, 3, 6, 7, 8, 9); //массив на 6 элементов 

// let arr3 = new Array(2); //массив на 2 элемента но пустой

// console.log(arr);
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// let arr = [2, 3, 6, 7, 8, 9];
// document.write(arr + "<br>");
// document.write(arr.length + "<br>");

// arr.length = 3;
// document.write(arr + "<br>");
// arr.length = 6;
// document.write(arr + "<br>");
// arr.length = 0;
// document.write("Пустой массив" + arr + "<br>");

//length = последний индекс массива + 1
// последний индекс массива = length - 1

// let arr = [5,9,-3,-1,4,-8,7,4,-6];
// for(let i =0; i<arr.length; i++){
//     document.write(arr[i] + "<br>")
// }

// console.table(arr);

// let arr = [5,9,-3,-1,4,-8,7,4,-6];
// for(let i =0; i<arr.length; i++){
//     if(arr[i]<0){
//         arr[i] = arr[i]*(-1);
//     }
//     document.write(arr[i] + "<br>")
// }


// let k = 0;
// let arr = [5,9,-3,-1,4,-8,7,4,-6];
// for(let i =0; i<arr.length; i++){
//     if(arr[i]<0){
//         k +=arr[i];
//     }
//     document.write(arr[i] + "<br>")
// }
// document.write(k);

// let mas = new Array();// let mas = [];
// mas[0] = 15;
// mas[1] = 6;
// mas[2] = 9;
// mas[6] = 10;

// document.write(mas + "<br>");

let mas = new Array(5);
for(let i = 0;i<mas.length; i++){
    mas[i] = prompt("Введите " + (i+1) + "элемент массива: ");
}
document.write(mas + "<br>");
for(let i=mas.length - 1; i>=0; i--){
    document.write(mas[i] + " ");
}
