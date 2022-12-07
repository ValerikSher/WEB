// let menu = {
//     width: 300,
//     height: 200,
//     title: "Menu",
// };

// let counter = 0;
// for(let key in menu){
//     document.write("<br>Ключ: " + key + ", значение: " + menu[key]);
//     counter++;
// }

// document.write("<br>Всего свойств" + counter + "<br>");
// document.write("<br>Имена ключей" + Object.keys(menu) + "<br>");
// document.write("<br>Всего ключей" + Object.keys(menu).length + "<br>");

// Object.keys(menu).forEach(function(key){
//     document.write("<br>" + key + ": " + menu[key]);
// })



// let car = {
//     name: "Volvo",
//     year: 2013
// };

// console.log(car);

// let obj = {
//     name: "Гомер",
//     colors: {
//         first: "yellow",
//         second: "blue"
//     },
//     color: [
//         "black",
//         "white",
//         "red",
//         "blue"
//     ],
//     hello: function(){
//         document.write("Привет");
//     }
// }

// let mas = Object.keys(obj.color).map(function(elem){
//     return  elem + ": " + obj.colors[elem] + "<br>";
// })
// document.write("<br>" + mas + "<br>");

// document.write(obj.name + " " + obj.color[1] + obj.colors.first + "<br>");
// obj.hello();

// let fil = obj.color.filter(function(elem){
//     return elem.length < 5;
// })
// document.write("<br>" + fil + "<br>");
// let mas = obj.color.map(function(elem, index, all){
//     return  elem + " " + index + " " + all + "<br>";
// })
// document.write("<br>" + mas + "<br>");

// let mas1= obj.color.map(elem => elem.toUpperCase());
// document.write("<br>" + mas1 + "<br>");


// let calc = {
//     num1: 5,
//     num2: 5,
//     computer: function(){
//         this.result = this.num1 * this.num2;
//         // calc.result = calc.num1 * calc.num2;
//     }
// }

// calc.computer();
// document.write(calc.result);

// let x = 15, y = 10;

// let coords = {
//     x: x, //свойство (ключ)
//     y: y, //свойство (ключ)
//     calc: function(){ // метод
//         document.write(this.x * this.y);
//     }
// }

// coords.calc(); // метод 


// let x = 15, y = 10;

// let coords = { x, y, 
//     calc: function(){document.write(this.x * this.y);}
// }
// coords.calc(); 


// let user = {
//     login: {
//         firstName: 'Kate',
//         lastName: 'Petrova'
//     },
//     passw: 'qwerty',
//     role: 'guest'
// }

// let {login: {firstName: f, lastName}, passw, role} = user;
// document.write(f + " " + lastName + " " + passw + " " + role + "<br>");
// let a = user.login
// document.write(a + "<br>");

// let number = [3,5,6];
// let [a,b,c] = number;
// // document.write(b);
// // document.write(number[1]);
// document.write(c);

// let user = {
//     login: {
//         firstName: 'Kate',
//         lastName: 'Petrova'
//     },
//     passw: 'qwerty',
//     role: 'guest'
// }

// let {login: {firstName: f, ...el}, ...rest} = user;
// document.write(f + " " + rest.role + "<br>");
// let a = user.login
// document.write(a + "<br>");


// let pers = {
//     name: "Игорь",
//     colors: [
//         "красный",
//         "белый",
//         "синий",
//         "черный",
//     ],
//     brand: "Bentley",
//     start: function(){
//         let color = Math.floor(Math.random()*4);
//         document.write(this.name + " имеет " + this.colors[color] + " " + this.brand);
//     }
// }
// pers.start();


// let pers = {
//     name: "Игорь",
//     colors: [
//         "красный",
//         "белый",
//         "синий",
//         "черный",
//     ],
//     brand: "Bentley",
//     start(){
//         let {name, colors, brand} = this;
//         let color = Math.floor(Math.random()*4);
//         document.write(name + " имеет " + colors[color] + " " + brand);
//     }
// }
// pers.start();


//функция-конструктор

// function Car(name, year){
//     this.name = name;
//     this.year = year; 
// }

// Car.prototype.getAge = function(){
//     return new Date().getFullYear() - this.year;
// }

// Car.prototype.color = "black";

// let ford = new Car("Ford", 2019);
// console.log(ford);
// console.log(ford.color);
// console.log(ford.getAge())

// let bmw = new Car("BMW", 2017);
// bmw.color = "red";
// console.log(bmw); 
// console.log(bmw.color); 
// console.log(bmw.getAge()); 


function User(pName, pAge){
    this.name = pName;
    this.age = pAge;
    this.displayInfo = function(){
        document.write("Имя: " + this.name + ", возраст: " + this.age + "<br>");
    }
}

let tom = new User ("Том", 26);
document.write(tom.name + "<br>");
tom.displayInfo();
let kate = new User("Катя", 24);
kate.displayInfo();