//alert(document.documentElement.innerHTML);
// alert(document.head.innerHTML);
// alert(document.body.innerHTML);
// let a =document.querySelector("h1").innerHTML;
// console.log(a);

// // let b =document.querySelector("p").firstChild.nodeValue;
// let b =document.querySelector("p").childNodes[0].nodeValue;
// console.log(b);

// let myTitle = document.querySelector("h1");
// alert(myTitle.nodeName); //H1

// let d = document.querySelector("#one");

// if(d.nodeName == "DIV"){
//     d.innerHTML = "Hello new tag";
// }

// let myTitle = document.querySelector("h1");
// console.log(myTitle.firstChild);
// console.log(myTitle.firstChild.nodeType);

// let elem = document.querySelector("#root");
// let tag = document.createElement("p"); //tag=<p></p> - создали тэг
// let node = document.createTextNode("Новый текст!!!"); // создали текстовую ноду
// tag.append(node); //<p></p> + Новый текст!!! = <p>Новый текст!!!</p>
// elem.append(tag); //добавляем новый элемент последним дочерним элементом внутри родительского
// elem.prepend(tag); // добавляем новый элемент первым дочерним элементом внутри родительского

// elem.before(tag); // добавляет новый элемент до выбранного id
// elem.after(tag); // добавляет новый элемент после выбранного id

// elem.replaceWith(tag);

// let list = document.querySelector("ul");

// let newItem = document.createElement("li");
// newItem.innerHTML = "Новый элемент списка"

// list.append(newItem);
// let i = 1;
// document.querySelector("#func2").addEventListener("click", add);
// document.querySelector("#func1").addEventListener("click", change);
// function add(){
//     let elem = document.createElement("li");
//     elem.innerHTML = "Water" + i;
//     i++;
//     document.querySelector("#list2").append(elem);
// }

// function change(){
//     let elem = document.querySelector("#list2").lastChild;
//     document.querySelector('#list1').append(elem);
// }


// let div = document.querySelector("#root");
// div.insertAdjacentHTML('beforebegin', '<p>До выбранного элемента</p>')
// div.insertAdjacentHTML('afterend', '<p>После выбранного элемента</p>')
// div.insertAdjacentHTML('afterbegin', '<p>Первым внутри выбранного элемента</p>')
// div.insertAdjacentHTML('beforeend', '<p>Последним внутри выбранного элемента</p>')

// let child = document.querySelector("#p1");
// // child.remove();

// let second = document.querySelector("#p2");
// second.after(child);

// let list = document.querySelector("ul");
// let li = list.cloneNode(true); // клонирование элемента

// li.querySelector("li").innerHTML
// list.after(li);

// let list = document.querySelector(".list")
// list.insertAdjacentHTML("beforebegin",  "<h2>Список </h2><hr>");
// let list_inner = document.querySelector("h2");
// list_inner.insertAdjacentText('beforeend', "планет");
// list.insertAdjacentHTML("afterend", "<hr>");
// let hr = document.querySelectorAll("hr")[1];
// let h4 = document.createElement("h4");
// h4.innerHTML = "Конец списка";
// hr.insertAdjacentElement("afterend", h4);

// let idRemove = setInterval(function(){
//     let li = document.querySelector("li:last-child");
//     if(li === null){
//         clearInterval(idRemove);
//         list.insertAdjacentHTML("afterbegin", "<li>Список удалён</li>");
//     }
//     else{
//         li.remove();
//     }
// }, 1000)

let div = document.querySelector("div");
div.className = 'alert';
let activeDiv  = document.querySelector(".active");
activeDiv.classList.add('hidden');
// activeDiv.classList.remove('hidden');
activeDiv.classList.toggle('hidden');
activeDiv.classList.replace("active", "alert");