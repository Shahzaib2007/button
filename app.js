// // var a = document.getElementById("box");

// // function shape(cls){
// //     console.log("button click")
// //     a.className = cls;
// // }
// // var parent = document.getElementById("parent");

// // var a = parent.getElementsByTagName("P")
// // console.log(a);




// var min =0
// var sec =0
// var miliSec =0
// var displayMin = document.getElementById("displayMin");
// var displaySec = document.getElementById("displaySec");
// var displayMiliSec = document.getElementById("displayMiliEc");

// var interval;

// function timer(){
//    miliSec++;
//    if(miliSec = 10)
//     sec = 0;
//     min = 0; 
// };


// function startTimer(){
//     interval =
//      setInterval(function
// (){  
//    timer();
// },100);
// };

// function pauseTimer(){
//     clearInterval
//     (interval);
// }

// function resetTimer(){
//     pauseTimer();
//     min = 0;
//     sec = 0;
//     milisec = 0;
//     displayMiliSec .innerHTML = Milisec

//     displaySec .innerHTML = Sec
    
//     displayMin .innerHTML = Min
// }
var inp = document.getElementById("input");
var main = document.getElementById("main");
console.log(input);
  function  add(){
      console.log(input.value);
      if(input.value == ""){
         alert("plaese enter todo");
      }else{
             
    li = document.createElement("Button");
    li = document.createTextNode("EDIT TODO");
    li.appendChild(aditBtnText);
    editBtn.appendChild(editBtnText);
    editBtn.setAttribute("onlick", "edittodo()");
    li.appendChild(editBtn);
    main.appensChild(li);
    input.value = "";
    
      }
   }
   function ediTtodo(elament){
      var newValue = prompt ("Enter update valur");
      console.log(elament.perentNode.firstChild.nodeValue);
      element.perentNode.firstChild.nodeValue = newValue;

   }


   































