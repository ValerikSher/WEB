// JSON 
// *.json

let info = '{"first_name":"Ivan","age":36,"mother":{"name":"Olga","age":58},"children":["Kate","Igor","Misha"],"marrid":true,"dog":null}';

document.write(info + "<br>");
console.log(info);

/* 
JSON.parse() - преобразовывает объект JavaScript (десериализация)
JSON.stringify() - преобразовывает объект JavaScript в объект JSON (сериализация)
*/

let person = JSON.parse(info);
console.log(person);

person.first_name = "Petr";
document.write(person.first_name + "<br>");

delete (person.age);

for (let i in person){
    document.write(i + ": " + person[i] + "<br>");
}

person.work = "programmer";
for (let i in person){
    document.write(i + ": " + person[i] + "<br>");
}

delete (person.children[1]);
document.write(person.children + "<br>");

person.children.splice(1, 1);
document.write(person.children + "<br>");

person.children.push("Ira");
document.write(person.children + "<br>");

let personString = JSON.stringify(person);
console.log(personString);