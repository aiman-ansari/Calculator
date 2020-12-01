function getHistory(){
    return document.getElementById("history").innerHtml;
  }
  function insert(num){
   document.getElementById("result").value =   document.getElementById("result").value+num;
  }
  
  
  function equal(){
    let eq = document.getElementById("result").value
    document.getElementById("result").value = eval(eq)
  }
   
   function c(){
     
   document.getElementById("result").value = "";
   
   }
   function back(){
     
  let eq = document.getElementById("result").value
    document.getElementById("result").value = eq.substring(0,eq.length-1)
     
   }
  function getOutput(){
    return document.getElementById("result").innerHtml; 
  }
  function printOutput(num){
    if (num == "")
    {
      document.getElementById("result").innerText = num; 
    }
    else {
      document.getElementById("result").innerHtml.getFormattedNumber(num);
    }
  }
  
  
  