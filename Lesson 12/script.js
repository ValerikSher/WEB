// let gas = document.querySelectorAll(".petrol");

// for(let i=0; i<gas.length; i++){
//     gas[i].addEventListener('click', function(){
//         let gallons= document.querySelector('.gallons').value;
//         let amount = this.getAttribute('data');
//         let res = gallons * amount;
//         let sum = document.querySelector('.sum');
//         sum.innerHTML = res;
//     })
// }


// let reg = document.querySelector(".register");

// reg.addEventListener("submit", function(){
//     let log = reg.login.value;
//     let pass = reg.password.value;
//     let pass2 = reg.password2.value;
//     let error = "";

//     if(log == "" || pass=="" || pass2==""){
//         alert("Все поля должны быть заполнены");
//         return;
//     }
//     if(pass.length<6){
//         error +="Слишком короткий пароль";
//     }
//     if(pass != pass2){
//         error += "Пароли не совпадают";
//     }
//     else{
//         error += "Спасибо за регистрацию";
//     }
//     alert(error);
// })


/* методы регулярных выражений:
search - возвращает позицию, на которой регулярное выражение совпадает с вызывающей строкой, или "-1", если совпадений нет

match - вовращает все совпадения с регулярным выражением

replace - заменяет совпадения с регулярным выражением на новую подстроку

split - делит строку на массив, разбивая её по указанной подстроке

test - выполняет поиск совпадений регулярного выражения со строкой. Возвращает значения true или false
*/

// let regexp = newRegExp("шаблон");
// let regexp = /шаблон/;

let str = "Я ищу совпадения в 2023 году 7892767556_ё hello";
// let regexp = /ищу/;
document.write(str + "<br>");

// document.write(str.search(regexp) + "<br>");
// document.write(str.match(regexp) + "<br>");
// document.write(regexp.test(str) + "<br>");

// [...] - искать любой из заданных символов, но только один раз 
// let regexp = /[203]/g;
// document.write(str.match(regexp) + "<br>");

/* флаги 
g - (global) - искать все совпадения с шаблоном поиска (глобальный поиск)
i - (ignoreCase) - регистронезависимый поиск
m - (multiline) - многострочный поиск
*/

// let regexp = /я/gi;
// document.write(str.match(regexp) + "<br>");

/* диапазоны
[0-9] -  любая цифра от 0 до 9
[A-Z] - заглавныу буквы
[a-z] - строчные буквы
[А-Я]
[а-я]
[^abc] - исключающее перечисление, ни один из указанных символов
*/

// let regexp = /[0-3]/g;
// document.write(str.match(regexp) + "<br>");
// let regexp = /[А-яё]/g;
// document.write(str.match(regexp) + "<br>");
// let regexp = /[^0-9]/g;
// document.write(str.match(regexp) + "<br>");
/* количество повторений  
{3} - количество символов идущих подряд
{1,} - от 1 до бесконечного повторений
{2,5} - от 2 до 5 повторений
*/
// let regexp = /[0-9]{2,5}/g;
// document.write(str.match(regexp) + "<br>");

// let html = `
//     <table>
//         <tr>
//             <td bgcolor="#CCC4">
//                 <img src="1f3.png"
//             </td>
//             <td bgcolor="#003399">
//             <img src="222.png"
//             </td>
//             <td bgcolor="#00ccdd">
//             <img src="fff.png"
//             </td>
//         </tr>
//     </table>
// `;
// let exp = /#([0-9a-f]{3}){1,2}/gi;
// document.write(html.match(exp) + "<br>");

/* Символьные классы 
\d (digit) - любая цифра
\s (space) - пробельный символ, включая табуляцию и перевод строки
\w (word) - любая цифра буква (только англ) или символ подчёркивания
*/

/* Символьные классы 
\D (digit) - все кроме цифра
\S (space) - всё кроме пробельный символ, включая табуляцию и перевод строки
\W (word) -всё кроме любая цифра буква (только англ) или символ подчёркивания
*/
//точка - любой символ

// let regexp = /\d./g;
// document.write(str.match(regexp) + "<br>");
/* 
^ - начало строки (перед последовательностью ничего не должно быть)
$ - конец строки (после последовательности ничего не должно быть)
*/

let html = 'aaa909'
let reg = /^\d{3}$/g;
document.write(html.match(reg) + "<br>");