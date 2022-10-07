var input1=document.querySelector(".number1");
var input2=document.querySelector(".number2");
var addBtn=document.querySelector("#add-btn");
var subBtn=document.querySelector("#sub-btn");
var mulBtn=document.querySelector("#mul-btn");
var divBtn=document.querySelector("#div-btn");
var outputDiv=document.querySelector("#output-div");


function checkinput(num1,num2){
    if(num1||num2)
    return 1
    else
    return 0
}

function add(){
    var number1=Number(input1.value);
    var number2=Number(input2.value);
    // console.log(number1);
   var check= checkinput(number1,number2);
   if(check === 1){
    var sum=number1+number2;
    outputDiv.innerText=sum;
   }
   else
   {
    outputDiv.innerText= "Input valid number";
   }
}

function sub(){
    var number1=Number(input1.value);
    var number2=Number(input2.value);
    // console.log(number1);
   var check= checkinput(number1,number2);
   if(check === 1){
    var sum=number1-number2;
    outputDiv.innerText=sum;
   }
   else
   {
    outputDiv.innerText= "Input valid number";
   }
}

function mul(){
    var number1=Number(input1.value);
    var number2=Number(input2.value);
    // console.log(number1);
   var check= checkinput(number1,number2);
   if(check === 1){
    var sum=number1*number2;
    outputDiv.innerText=sum;
   }
   else
   {
    outputDiv.innerText= "Input valid number";
   }
}

function div(){
    var number1=Number(input1.value);
    var number2=Number(input2.value);
    // console.log(number1);
   var check= checkinput(number1,number2);
   if(check === 1){
    var sum=number1/number2;
    outputDiv.innerText=sum;
   }
   else
   {
    outputDiv.innerText= "Input valid number";
   }
}

addBtn.addEventListener('click',add);
subBtn.addEventListener('click',sub);
mulBtn.addEventListener('click',mul);
divBtn.addEventListener('click',div);