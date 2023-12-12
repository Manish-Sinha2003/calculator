var keys= document.querySelectorAll("#calc span");
var operators = ["+","-","*","+"];
var decimalAdded = false;

for(var i=0;i<keys.length;i++){
    keys[i].onclick = function(e){
        var input= document.querySelector(".display");
        var inputval= input.innerHTML;
        var btnval= this.innerHTML;

        if(btnval == "C"){
            input.innerHTML= "";
            
        }
    }
}