var count=0;
function store(){
    var name1=document.getElementById('regname').value;
    if(name1 == "")
    {
        var p2=document.getElementById("p1");
        p2.innerText="please enter name";
        p2.style.color="red"; 
        count++;
    }
    var gender=document.getElementById('gender').value;
    if(gender == "")
    {
        var p4=document.getElementById("p3");
        p4.innerText="please enter gender";
        p4.style.color="red"; 
        count++;
    }
    var dob=document.getElementById('dob_day').value;
    if(dob == "")
    {
        var p6=document.getElementById("p5");
        p6.innerText="please enter Date of Birth";
        p6.style.color="red"; 
        count++;
    }
    var curr=document.getElementById('current_location').value;
    if(curr == "")
    {
        var p8=document.getElementById("p7");
        p8.innerText="please enter current_Location";
        p8.style.color="red"; 
        count++;
    }
   
    var pre=document.getElementById('preferred_location').value;
    if(pre == "")
    {
        var p10=document.getElementById("p9");
        p10.innerText="please enter Preferred Location";
        p10.style.color="red"; 
        count++;
    }
    var phone=document.getElementById('ph').value;
   
    var industry=document.getElementById('industries').value;
    if(industry == "")
    {
        var p14=document.getElementById("p13");
        p14.innerText="please enter Industry";
        p14.style.color="red"; 
        count++;
    }
    var func=document.getElementById('functional_area').value;
    if(func == "")
    {
        var p16=document.getElementById("p15");
        p16.innerText="please enter functional area";
        p16.style.color="red"; 
        count++;
    }
    var notice=document.getElementById('notice_period').value;
    if(notice == "")
    {
        var p18=document.getElementById("p17");
        p18.innerText="please enter notice Period";
        p18.style.color="red"; 
        count++;
    }
    var exp=document.getElementById('expyear').value;
    if(exp == "")
    {
        var p20=document.getElementById("p19");
        p20.innerText="please enter experience Month";
        p20.style.color="red"; 
        count++;
    }
    var expmonth=document.getElementById('expmonth').value;
    if(expmonth == "")
    {
        var p22=document.getElementById("p21");
        p22.innerText="please enter experience Month";
        p22.style.color="red"; 
        count++;
    }
    var currannual=document.getElementById('currentctc').value;
    if(currannual == "")
    {
        var p24=document.getElementById("p23");
        p24.innerText="please enter curent Salary";
        p24.style.color="red"; 
        count++;
    }
    var expecannual=document.getElementById('expectedctc').value;
    if(expecannual == "")
    {
        var p26=document.getElementById("p25");
        p26.innerText="please enter Expected Salary";
        p26.style.color="red"; 
        count++;
    }

    const profile={
        name1:name1,
        gender:gender,
        dob:dob,
        curr:curr,
        pre:pre,
        phone:phone,
        industry:industry,
        func:func,
        notice:notice,
        exp:exp,
        expmonth:expmonth,
        currannual:currannual,
        expecannual:expecannual,
        

    }
 if(count === 0)
 {

window.localStorage.setItem("info",JSON.stringify(profile)); 
}
}
window.onload=function(){
    document.getElementById("registeruser").onsubmit=store
}
var getting=localStorage.getItem("info");
var get=JSON.parse(getting);

