// function Qwe(qName, qAge, qJob){
//     this.name = qName;
//     this.age = qAge;
//     this.job = qJob;
//     this.Who = function(){
//         document.write("Я " + this.name + " мне " + this.age + " лет. Я работаю " + this.job + "." + "<br>");
//     }
// }

// let dima = new Qwe("Дмитрий", 26, "Дизайнером");
// dima.Who();
// let stan = new Qwe("Станислав", 29, "Программистом");
// stan.Who();
// let serg = new Qwe("Сергей", 35, "Менеджером");
// serg.Who();




function Automobile(aColor, aModel, aYear, aManufact){
    this.color = aColor;
    this.model = aModel;
    this.year = aYear;
    this.manufact = aManufact;
    this.whatColor = function(){
        document.write("Цвет машины: " + this.color + "<br>");
    }
    this.autoInfo = function(){
        document.write("Модель машины: " + this.model + "<br>" + "Год выпуска: " + this.year + "<br>" + "Производитель автомобиля: " + this.manufact + "<br>" + "<br>");
    }
}

let nis = new Automobile("Красный", "Nissan Skyline", 2007, "Nissan");
nis.whatColor();
nis.autoInfo();
let toy = new Automobile("Чёрный", "Toyota Corolla", 2009, "Toyota");
toy.whatColor();
toy.autoInfo();
let vol = new Automobile("Синий", "Volkswagen Golf", 2009, "Volkswagen");
vol.whatColor();
vol.autoInfo();
