function getNumber(){
var numberBox = document.getElementById("number");
/****************Click here to increase the limit on random numbers***************/
var number = Math.floor(Math.random()* 9 + 1);
numberBox.innerHTML = number;
}