let sum = +prompt("Введите сумму покупки: ", "1200");
if (sum > 1000){
    alert(sum*0.95);
}
else if(sum > 500){
    alert(sum*0.97);
}
else if(sum >=0){
    alert(sum);
}
else{
    alert("Неверно введена сумма покуки");
}