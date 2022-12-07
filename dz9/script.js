let a = document.querySelector("#cl");
a.addEventListener("click", myMove);
function myMove(){
    let elem = document.getElementById("animate");
    let pos = 0;
    setInterval(frame, 5);

    function frame(){
        if(pos == 350){
            a.addEventListener("click", myMove);
            // a.style.display="block";
            clearInterval(id);
        }
        else{
            a.removeEventListener("click", myMove);
            // a.style.display='none';
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}