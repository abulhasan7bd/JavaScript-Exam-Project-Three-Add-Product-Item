var applebtn  = document.querySelector("#appleBtn");
var lichubtn  = document.querySelector("#lichuBtn");
var mangobtn  = document.querySelector("#mnagoBtn");
var onragebtn = document.querySelector("#orageBtn");
var diliteBtn = document.querySelector("#appleDB");



//apple 
var apple1 = document.querySelector("#apple1");
var appleDL = document.querySelector("#appleDB");
var applDiv = document.querySelector("#apple-delet");
//discount
var disco = document.querySelector("#DiscountP");
//promt code
var prmCode = document.querySelector("#promtCode").value;
//summery
var netpric2 = document.querySelector("#netPr");
var discount = document.querySelector("#disC");
var apppleP = 500;
var mangoP  = 300;
var orangP  = 200;
var luchuP  = 400;
//click btn
applebtn.addEventListener("click",function(){
    //sumery
    var totalPrice = document.querySelector("#totalPr");
    totalPrice.innerHTML=apppleP;
    netpric2.innerHTML="450"
    disco.innerHTML="5%"
     var promt = prmCode.innerHTML=3333;
     prmCode.innerHTML=promt
    
    




    var a = apple1.innerHTML="Apple"
    var v = appleDL.innerHTML="Delete"
    applDiv.appendChild(a , v);





    
})
    
//lichu
var netpric3 = document.querySelector("#netPr");
lichubtn.addEventListener("click",function(){
    //sumery
    var totalPrice = document.querySelector("#totalPr");
    totalPrice.innerHTML=luchuP
    disco.innerHTML="5%"
    netpric3.innerHTML="300"

    var x = apple1.innerHTML="Lichu"
    var y = appleDL.innerHTML="Delete"
    applDiv.appendChild(x + y);



    
});
// mango
var netpric4 = document.querySelector("#netPr");
mangobtn.addEventListener("click",function(){
    //sumery
    var totalPrice = document.querySelector("#totalPr");
    totalPrice.innerHTML=mangoP
    disco.innerHTML="7%"
    netpric3.innerHTML="260"

    var x = apple1.innerHTML="Mango"
    var y = appleDL.innerHTML="Delete"
    applDiv.appendChild(x + y);



    
});
//ornge
var netpric5 = document.querySelector("#netPr");
onragebtn.addEventListener("click",function(){
    //sumery
    var totalPrice = document.querySelector("#totalPr");
    totalPrice.innerHTML=orangP
    disco.innerHTML="5%"
    netpric3.innerHTML="190"

    var x = apple1.innerHTML="Orange"
    var y = appleDL.innerHTML="Delete"
    applDiv.appendChild(x + y);



    
});





















// remove item
diliteBtn.addEventListener("click", function(){
    var dilitDiv = document.querySelector(".apple-delet");
    (dilitDiv).remove();
})