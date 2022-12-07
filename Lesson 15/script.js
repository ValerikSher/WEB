// let form = document.form1;
// form.addEventListener("submit", event => {
//     event.preventDefault();
//     let title = form.title.value;
//     let text = form.text.value;
//     let description = form.description.value;

//     saveForm({title, text, description}); // title: title, text: text
// })
// // оператор Rest
// function saveForm(...obj){
//     console.log("Аргументы: ", obj);
//     let [{title, text, description}] = obj;
//     let formData = {
//         date: new Date().toDateString(),
//         title, text, description
//     }
//     console.log("Form data: ", formData);
// }


// function saveForm(obj){ //{title, text, description}
//     // let {title, text, description} = obj;

//     let formData = {
//         date: new Date().toDateString(),
//         ...obj// title, text, description // оператор Spred (...)
        
//     }
//     console.log("Form data: ", formData);
// }


// class User{

//     constructor(name){
//         this.n = name; //свойство (ключ)
//     }

//     sayHi(){
//         document.write("Hello, " + this.n + "!"); // метод
//     }
// }

// let user = new User("Иван");
// document.write(user.n + "<br>");
// user.n = "465832439";
// document.write(user.n + "<br>");
// console.log(user);
// user.sayHi();
// user.sayHi();

// console.log(typeof(User));
// console.log(typeof(user));


// class User{
//     constructor(login){
//         this.login = login;
//     }

//     get login(){ // получаем логин
//         return this._login;
//     }

//     set login(value){ // установка нового логина
//         if(value.length < 6){
//             alert("Логин слишком короткий")
//             return;
//         }
//         this._login = value;
//     }
// }

// let user = new User("administrator");
// console.log(user.login);
// user.login = "admin-admin";
// console.log(user.login);


// class Person{
//     constructor(firstName, lastName){
//         this._firstName = firstName;
//         this._lastName = lastName;
//     }

//     get fullName(){
//         return this._firstName + " " + this._lastName;
//     }

//     set fullName(value){
//         [this._firstName, this._lastName] = value.split(/\s+/g);
//     }
// }

// let people = new Person("John", "Dou");
// document.write(people._firstName + "<br>"); 
// document.write(people.fullName + "<br>"); 
// people.fullName = "Anna    Petrova";
// document.write(people.fullName + "<br>");


// class Animal{
//     constructor(name){
//         this.name = name;
//         this.speed = 0;
//     }

//     run(speed){
//         this.speed = speed;
//         document.write(`${this.name} бежит со скоростью ${this.speed} км/час. <br>`);
//     }

//     stop(){
//         this.speed = 0;
//         document.write(`${this.name} стоит.<br>`);
//     }
// }

// class Rabbit extends Animal{ //дочерний класс
//     constructor(name, earLength){
//         super(name);
//         this.earLength = earLength;
//     }

//     hide(){
//         document.write(`${this.name} прячется!<br>`);
//     }
//     stop(){
//         super.stop();
//         this.hide();
//     }
// }

// let animal = new Animal("Мой питомец");
// animal.run(80);
// animal.stop();

// let rabbit = new Rabbit("Белый кролик", 10);
// console.log(rabbit);
// rabbit.run(5);
// rabbit.hide();
// rabbit.stop();
// document.write(rabbit.name + "<br>");
// document.write(rabbit.earLength + "<br>");

class Header{
    constructor(img, h1, h2){
        this.src = img;
        this.h1 = h1;
        this.h2 = h2;
        this.out = "";
    }

    render(id){
        this.out = `
            <img src="${this.src}" alt="">
            <h1>${this.h1}</h1>
            <h2>${this.h2}</h2>
        `;
        document.querySelector(`#${id}`).innerHTML = this.out;
    }
}

// class HeaderExt extends Header{
//     constructor(img, h1, h2, tel){
//         super(img, h1, h2);
//         this.tel = tel;
//     }
//     get tel(){
//         return this._tel;
//     }
//     set tel(t='+7 901 456-78-56'){
//         let reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
//         if(reg.test(t)){
//             this._tel = t;
//         }
//         else{
//             alert("Некорректый номер телефона");
//             return;
//         }
//     }
//     renderExt(id){
//         super.render(id);
//         this.out += `
//             <p>${this.tel}</p>
//         `;
//         document.querySelector(`#${id}`).innerHTML = this.out;
//     }
// }

let img = "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-64.png";
let header = new Header(img, "Заголовок", "Описание");
header.render("header");

let img2 = "https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/js-64.png";
let header2 = new Header(img2, "Заголовок", "Описание");
header2.render("header2");


// let img3 = "https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/angular-js-64.png";
// let header3 = new HeaderExt(img3, "Дочерний класс", "Дочерниий класс наследует все свойства и методы родительского класса", "+7 901 456-78-56");

// // header3.tel = "+7 999 555-55-55";
// // header3.tel = "Hello";
// header3.renderExt("ext")