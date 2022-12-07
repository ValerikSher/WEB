// let i = 0;
// let zak1 = document.getElementsByClassName("remove-button")[i];
// zak1.addEventListener("click", udal);
// console.log(zak1);
// function udal(){
//     let blk = document.getElementsByClassName("pane")[i];
//     console.log(blk);
//     blk.style.display = 'none';
//     i++;
//     let zak = document.getElementsByClassName("remove-button")[i];
//     zak.addEventListener("click", udal);
// }



let zak1 = document.getElementsByClassName("remove-button")[0];
let zak2 = document.getElementsByClassName("remove-button")[1];
let zak3 = document.getElementsByClassName("remove-button")[2];
zak1.addEventListener("click", udal1);
zak2.addEventListener("click", udal2);
zak3.addEventListener("click", udal3);
function udal1(){
    let blk1 = document.getElementsByClassName("pane")[0];
    blk1.style.display = 'none';
}
function udal2(){
    let blk2 = document.getElementsByClassName("pane")[1];
    blk2.style.display = 'none';
}
function udal3(){
    let blk3 = document.getElementsByClassName("pane")[2];
    blk3.style.display = 'none';
}