let choose = document.querySelector("input[type='button']");

let otv = ["ель", "ромашка", "паровоз", "маьрёшка", "лампочка"];

choose.addEventListener("click", chooseZagad);

function chooseZagad(){
    let f = document.form3;
    for(let i=0; i<f.radio2.length; i++){
        if(f.radio2[i].checked){
            alert(otv[i]);
        }
    }
}