var something_json = localStorage.getItem("ent");
var ent = JSON.parse(something_json);

var somethings_json = localStorage.getItem("log");
var logs = JSON.parse(somethings_json);



function prev_div()
{
    var next = document.getElementById("hide2");
    next.style.display = "none";
    var prev = document.getElementById("hide1");
    prev.style.display = "";

    var n = document.getElementById("u1");
    n.style.backgroundColor = "white";
    n.style.color = "black";
    var p = document.getElementById(" u2");
    p.style.backgroundColor = "orangered";
    p.style.color = "white";
}

function android1()
{
    if(logs == null || logs == undefined || logs.log == "no")
        location.assign("../landing_page/login.html");
    else if(ent == null || ent == undefined) 
        location.assign("../resume_page/resume1.html");
    else if(ent.enter === "yes")
        location.assign("apply_android1.html");
    else
        location.assign("../resume_page/resume1.html");   
}

function android2()
{

    if(logs == null || logs == undefined || logs.log == "no") 
        location.assign("../landing_page/login.html");

    else if(ent == null || ent == undefined) 
        location.assign("../resume_page/resume1.html");
    else if(ent.enter === "yes")
        location.assign("apply_android2.html");
    else
        location.assign("../resume_page/resume1.html");
}

function ios1()
{
    if(logs == null || logs == undefined || logs.log == "no")
        location.assign("../landing_page/login.html"); 
    else if(ent == null || ent == undefined) 
        location.assign("../resume_page/resume1.html");
    else if(ent.enter === "yes")
        location.assign("apply_ios1.html");
    else
        location.assign("../resume_page/resume1.html");  
}

function ios2()
{
    if(logs == null || logs == undefined || logs.log == "no") 
        location.assign("../landing_page/login.html");

    else if(ent == null || ent == undefined) 
        location.assign("../resume_page/resume1.html");
    else if(ent.enter === "yes")
        location.assign("apply_ios2.html");
    else
        location.assign("../resume_page/resume1.html");   
}

function js1()
{
    if(logs == null || logs == undefined || logs.log == "no") 
        location.assign("../landing_page/login.html");

    else if(ent == null || ent == undefined) 
        location.assign("../resume_page/resume1.html");
    else if(ent.enter === "yes")
        location.assign("apply_js1.html");
    else
        location.assign("../resume_page/resume1.html");   
}

function js2()
{
    if(logs == null || logs == undefined || logs.log == "no") 
        location.assign("../landing_page/login.html");

    else if(ent == null || ent == undefined) 
        location.assign("../resume_page/resume1.html");
    else if(ent.enter === "yes")
        location.assign("apply_js2.html");
    else
        location.assign("../resume_page/resume1.html");   
}

function react1()
{
    if(logs == null || logs == undefined || logs.log == "no") 
        location.assign("../landing_page/login.html");

    else if(ent == null || ent == undefined) 
        location.assign("../resume_page/resume1.html");
    else if(ent.enter === "yes")
        location.assign("apply_react1.html");
    else
        location.assign("../resume_page/resume1.html");
}



function react2()
{
    if(logs == null || logs == undefined || logs.log == "no") 
        location.assign("../landing_page/login.html");
    else if(ent == null || ent == undefined) 
        location.assign("../resume_page/resume1.html");
    else if(ent.enter === "yes")
        location.assign("apply_react2.html");
    else
        location.assign("../resume_page/resume1.html");   
}


function next_div()
{
    var next = document.getElementById("hide2");
    next.style.display = "";
    var prev = document.getElementById("hide1");
    prev.style.display = "none";

    var n = document.getElementById("u2");
    n.style.display = "";
    n.style.color = "black";
    n.style.backgroundColor = "white";
    var p = document.getElementById("u1");
    p.style.backgroundColor = "orangered";
    p.style.color = "white";
}

function changebg1()
{
    var btn = event.target;
    btn.style.color = "white";
    btn.style.backgroundColor = "#e9630c";
}

function changebg2()
{
    var btn = event.target;
    btn.style.color = "#e9630c";
    btn.style.backgroundColor = "white";
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
