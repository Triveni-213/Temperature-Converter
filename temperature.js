document.getElementById("convert").onclick=tempConvert;
document.getElementById("clear").onclick=clearform;

function tempConvert(){
 var Fahrenheit=document.getElementById("Fahrenheit").value;
 var Celsius=document.getElementById("Celsius").value;
 if(Fahrenheit !=''){
    Celsius=(parseFloat(Fahrenheit)-32)/1.8;
 }
   else{
    Fahrenheit=(parseFloat(Celsius)*1.8)+32;
   }

   document.getElementById("Fahrenheit").value=parseFloat(Fahrenheit).toFixed(1);
   document.getElementById("Celsius").value=parseFloat(Celsius).toFixed(1);
}
function clearform(){
  document.getElementById("Fahrenheit").value='';
  document.getElementById("Celsius").value='';
}
 