var paybtn = document.querySelector("#payBtn");
var show = document.querySelector("#succes");
var unsho = document.querySelector("#unSucces")
var totlPri = 2000;




paybtn.addEventListener("click", function(){
    let prom = prompt("please type your total price");
       if(prom == totlPri){
        show.style.display="block"
       } else{
        unsho.style.display="block"

       }
})
