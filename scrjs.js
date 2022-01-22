function equal() {
    
    var x = document.getElementById("form").innerHTML;
    var y = eval(x);
    document.getElementById("form").innerHTML = y;
}
    

function eraser() {erase();
    document.getElementById("form").innerHTML = 0;
}

function erase() {
    
    var value = document.getElementById("form").innerHTML;
    
    if (value == 0) {
         value = "";
         document.getElementById("form").innerHTML = value;}
//delete zero from start




    document.getElementById("divide").disabled = false;
    document.getElementById("multi").disabled = false;
    document.getElementById("sub").disabled = false;
    document.getElementById("dott").disabled = false;
    document.getElementById("plus").disabled = false;
        
    }
    


function nine() {erase() 
    document.getElementById("divide").disabled = false;
    document.getElementById("multi").disabled = false;
    document.getElementById("sub").disabled = false;
    document.getElementById("dott").disabled = false;
    document.getElementById("plus").disabled = false;
    document.getElementById("form").innerHTML += 9;
}
  

function eigth() {erase()
    document.getElementById("divide").disabled = false;
    document.getElementById("multi").disabled = false;
    document.getElementById("sub").disabled = false;
    document.getElementById("dott").disabled = false;
    document.getElementById("plus").disabled = false;
    document.getElementById("form").innerHTML +=8;
}

function seven() {erase()
    document.getElementById("divide").disabled = false;
    document.getElementById("multi").disabled = false;
    document.getElementById("sub").disabled = false;
    document.getElementById("dott").disabled = false;
    document.getElementById("plus").disabled = false;
    document.getElementById("form").innerHTML += 7;
}

function six() {erase()
    document.getElementById("divide").disabled = false;
    document.getElementById("multi").disabled = false;
    document.getElementById("sub").disabled = false;
    document.getElementById("dott").disabled = false;
    document.getElementById("plus").disabled = false;
    document.getElementById("form").innerHTML += 6;
}

function five() {erase()
    document.getElementById("divide").disabled = false;
    document.getElementById("multi").disabled = false;
    document.getElementById("sub").disabled = false;
    document.getElementById("dott").disabled = false;
    document.getElementById("plus").disabled = false;
    document.getElementById("form").innerHTML += 5;
}

function four() {erase()
    document.getElementById("divide").disabled = false;
    document.getElementById("multi").disabled = false;
    document.getElementById("sub").disabled = false;
    document.getElementById("dott").disabled = false;
    document.getElementById("plus").disabled = false;
    document.getElementById("form").innerHTML += 4;
}

function three() {erase()
    document.getElementById("divide").disabled = false;
    document.getElementById("multi").disabled = false;
    document.getElementById("sub").disabled = false;
    document.getElementById("dott").disabled = false;
    document.getElementById("plus").disabled = false;
    document.getElementById("form").innerHTML += 3;
}

function two() {erase()
    document.getElementById("divide").disabled = false;
    document.getElementById("multi").disabled = false;
    document.getElementById("sub").disabled = false;
    document.getElementById("dott").disabled = false;
    document.getElementById("plus").disabled = false;
    document.getElementById("form").innerHTML += 2;
}

function one() {erase()
    
    document.getElementById("divide").disabled = false;
    document.getElementById("multi").disabled = false;
    document.getElementById("sub").disabled = false;
    document.getElementById("dott").disabled = false;
    document.getElementById("plus").disabled = false;
    document.getElementById("form").innerHTML += 1;
}

function zero() {
    document.getElementById("divide").disabled = false;
    document.getElementById("multi").disabled = false;
    document.getElementById("sub").disabled = false;
    document.getElementById("dott").disabled = false;
    document.getElementById("plus").disabled = false;
    document.getElementById("form").innerHTML += 0;
}

function multi() {
    
    document.getElementById("multi").disabled = true;
    document.getElementById("divide").disabled = true;
    document.getElementById("dott").disabled = true;
    document.getElementById("plus").disabled = true;
    document.getElementById("form").innerHTML += "*";
}

function divide() {
    document.getElementById("plus").disabled = true;
    document.getElementById("multi").disabled = true;
    document.getElementById("divide").disabled = true;
    document.getElementById("dott").disabled = true;
    document.getElementById("form").innerHTML += "/";
}

function sub() {
    document.getElementById("sub").disabled = true;
    document.getElementById("multi").disabled = true;
    document.getElementById("divide").disabled = true;
    document.getElementById("dott").disabled = true;
    document.getElementById("plus").disabled = true;
    document.getElementById("form").innerHTML += "-";
}

function dott() {
    document.getElementById("sub").disabled = true;
    document.getElementById("multi").disabled = true;
    document.getElementById("divide").disabled = true;
    document.getElementById("dott").disabled = true;
    document.getElementById("plus").disabled = true;
    document.getElementById("form").innerHTML += ".";
}

function plus() {
    document.getElementById("sub").disabled = true;
    document.getElementById("multi").disabled = true;
    document.getElementById("divide").disabled = true;
    document.getElementById("dott").disabled = true;
    document.getElementById("plus").disabled = true;
    document.getElementById("form").innerHTML += "+";
    
    }
   
      
    
    
   

   
  
  

