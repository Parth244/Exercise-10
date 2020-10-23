function problem_10() {

    
    var outputObj=document.getElementById("output");
    
  
    var a = parseInt(prompt("Please enter a number: ", "number"));
      
       
    outputObj.innerHTML="number: "+a+"<br><br>number of 7's: ";
      
    var d;
    var n = a;
    
    var counter = 0;
    
   
    if(n <= 0){
      a = "num > 0";
    }

    else{
      
      while(n>0){ //using while loop
        d = n % 10;
    
        if(d === 7)
          counter++;
          n = Math.floor(n/10);
    }
    }
    outputObj.innerHTML=outputObj.innerHTML+counter;
    
   
    outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
    document.getElementsByTagName("button")[0].setAttribute("disabled","true");
    }
