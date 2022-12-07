// let mes = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
// for(let i = 0; i<12;i++){
//     document.write("<div class='block'>"+mes[i]+"</div>");
//     let id = document.querySelectorAll("div");
//     createColor();
//     function createColor(){
//         let r = Math.floor(Math.random() * 256);
//         let g = Math.floor(Math.random() * 256);
//         let b = Math.floor(Math.random() * 256);
//         id.style.background = 'rgb('+ r +', '+ g +', '+ b +')';
//         return id;
//     }
// }


let mes = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
for(let i=0;i<12;i++){
    document.write("<div>"+mes[i]+"</div>");
    let id = document.querySelectorAll("div")[i];
    console.log(id)
    col()
    function col(){
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        id.style.background = 'rgb('+ r +', '+ g +', '+ b +')';
        return col;
    }
}