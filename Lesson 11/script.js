// let greenFrog = document.querySelector("#greenFrog");

// console.log(greenFrog.id);
// console.log(greenFrog.className);
// console.log(greenFrog.src);
// console.log(greenFrog.getAttribute("data-img"));
// console.log(greenFrog.getAttribute("src"));
// console.log(greenFrog.setAttribute("src", 'blue_star.png'));
// // greenFrog.removeAttribute('src');
// console.log(greenFrog.hasAttribute('src'));



//формы

// document.form1.style.background = 'silver';

// document.forms[0].style.padding = '16px';
// document.forms['form1'].style.margin = '20px';
// document.forms.form1.style.border = '2px dotted gray';


// document.form1.name1.style.color = 'blue';
// document.form1['name1'].style.background = 'aqua';

// let txt = document.querySelector("#text1");
// let but = document.querySelector("button");

// but.addEventListener('click', content);

// function content(){
//     alert(txt.value);
// }


// let input = document.querySelectorAll("input[type='checkbox']");
// let form1 = document.forms.form1;
// console.log(form1.length);

// for(let i=0; i<input.length; i++){
//     input[i].addEventListener('click', checkAll);
// }

// function checkAll(){
//     let numChecked = 0;
//     for(let i=0; i<input.length; i++){
//         if(input[i].checked){
//             numChecked++;
//         }
//     }
//     if(numChecked==3){
//         for(let i=0; i<input.length; i++){
//             if(!input[i].checked){
//                input[i].disabled=true; 
//             }
//         }
//     }
//     else{
//         for(let i=0; i<input.length; i++){
//             input[i].disabled=false;
//         }
//     }
//     console.log(numChecked);
// }



let choose = document.querySelector("input[type='button']");

choose.addEventListener('click', chooseColor);

function chooseColor(){
    let f = document.form3;
    console.log(f.length); // 7
    console.log(f.radio2.length); // 5
    for(let i=0; i<f.radio2.length; i++){
        if(f.radio2[i].checked){
            document.body.style.background = f.radio2[i].value;
        }
    }
}

/* свойства select:
options - коллекция из псевдоэлементов <option>
value - значение выбранного <option>
selectedIndex - номер выбранного <option> 
*/

// let city = document.querySelector("#city");
// city.addEventListener('change', setImage);

// function setImage(){
//     let cities = city.selectedIndex;
//     //console.log(cities);
//     let options = city.options;
//     //console.log(options);
//     let code = options[cities].value;
//     console.log(code);

//     let div = document.querySelector("#image");
//     div.innerHTML = "<img src='img/"+ code +".png'>"
// }