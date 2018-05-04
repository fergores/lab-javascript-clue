// function color() {

//     var color = '#' + Math.floor(Math.random()*16777215).toString(16);
//     console.log(color);
//     return color;
// }


// function changeColor () {
   
//     element.style.backgroundColor = color();
// }




  
// function changeText() {

//   var element = document.getElementById("two");
//   if (element.innerHTML == "Inicio"){
//         element.innerHTML== "HOLA";
//   }else if (element.innerHTML == "HOLA"){
//         element.innerHTML == "ADIOS";
//   }else if (element.innerHTML == "ADIOS"){
//         element.innerHTML.HTML == "BUENAS";
//   }else if (element.innerHTML == "BUENAS"){
//         element.innerHTML == "YA ESTA";
//   }
 
// }

// function changing(){

//     changeColor();
//     changeText();
// }

// setInterval(changing,500);

var element = document.getElementsByClassName("one");
function changeColor() {
    

for ( i = 0 ; i < element.length; i++){
    var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    element[i].style.backgroundColor = color;

}

}

setInterval(changeColor,500);



