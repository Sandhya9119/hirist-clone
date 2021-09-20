function prev_div()
{
    var first1 = document.getElementById("first1");
    first1.style.display = "";
    var second1 = document.getElementById("second1");
    second1.style.display = "none";

    var n = document.getElementById("u1");
    n.style.backgroundColor = "white";
    n.style.color = "black";
    var p = document.getElementById("u2");
    p.style.backgroundColor = "orangered";
    p.style.color = "white";
}  

function next_div()
{

    var first1 = document.getElementById("first1");
    first1.style.display = "none"; console.log("first is ",first1);
    var second1 = document.getElementById("second1");
    second1.style.display = ""; console.log("second is ",second1);

    var n = document.getElementById("u2");
    n.style.color = "black";
    n.style.backgroundColor = "white";
    var p = document.getElementById("u1");
    p.style.backgroundColor = "orangered";
    p.style.color = "white";
} 

  
setInterval(changeimage,1500);
var co = 0;
function changeimage()
{
co++;
if(co == 4)
    co = 1;
var sli = document.getElementById("sli");

if(co == 1)
    sli.src = "https://d3qr48lsanmyop.cloudfront.net/1623847728390.jpeg"
else if(co == 2)
    sli.src = "https://d3qr48lsanmyop.cloudfront.net/1623847639465.jpeg"
else if(co == 3)
sli.src = "https://d3qr48lsanmyop.cloudfront.net/1628668272024.jpeg"
}

function changered()
{
var a =  document.getElementById("num");
if(a.value == "")
{ 
   var e = document.getElementById("disp");
   var b =  document.getElementById("opt");

    e.style.display = "";
}
else if(a.value != "")
{
    
   var e = document.getElementById("disp");
   e.style.color= "blue";
   e.style.textContent = "Please enter a valid number";
   var b =  document.getElementById("opt");

    e.textContent = "Message with link sent to download the app."
    e.style.color = "green";
    e.style.display = "";
}
a.style.border = "1px solid orange";
b.style.border = "1px solid orange";
}
