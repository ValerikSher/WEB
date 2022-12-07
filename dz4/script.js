// document.write("<table border='1' align='center' width='300' height='300'>");
// for(let i = 1; i<11;i++){
//     document.write("<tr align='center'>");
//     for(let j = 1; j<11;j++){
//         if(j%2==0 && i%2!=0){
//             document.write("<td bgcolor='yellow'>" + i*j + "</td> ")
//         }
//         else if(j%2!=0 && i%2==0){
//             document.write("<td bgcolor='yellow'>" + i*j + "</td> ")
//         }
//         else{
//             document.write("<td bgcolor='red'>" + i*j + "</td> ")
//         }
//     }
//     document.write("</tr>");
// }
// document.write("</table>")

document.write("<table border='1' align='center' width='300' height='300'>");

for(let i = 0; i<11; i++){
    document.write("<tr align='center'>");
    for(let j = 0;j<11;j++){
        // document.write("<td>*</td>")
        if(j%2==0 && i%2!=0 && i>0 && j>0){
            document.write("<td bgcolor='yellow'>" + i*j + "</td> ")
        }
        else if(j%2!=0 && i%2==0 && i>0 && j>0){
            document.write("<td bgcolor='yellow'>" + i*j + "</td> ")
        }
        else if(j%2==0 && i%2==0 && i>0 && j>0){
            document.write("<td bgcolor='red'>" + i*j + "</td> ")
        }
        else if(j%2!=0 && i%2!=0 && i>0 && j>0){
            document.write("<td bgcolor='red'>" + i*j + "</td> ")
        }
        else{
            document.write("<td bgcolor='white'>" + (i+j) + "</td>")
        }
    }
    document.write("<tr/>")
}
document.write("</table>")
