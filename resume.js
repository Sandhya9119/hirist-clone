var count=0;
function store(){
    //console.log("Hello");
    var design=document.getElementById('regdesignation_1').value;
    console.log(design);console.log("Hi");
    if(design == "")
    {
        //console.log("Empty");
        var p2=document.getElementById("p1");
        p2.innerText="please enter designation";
        p2.style.color="red";
        count++;
    }
    var organisation=document.getElementById('regorganizationval_1').value;
    if(organisation == "")
    {
        var p4=document.getElementById("p3");
        p4.innerText="please enter organisation";
        p4.style.color="red"; 
        count++;
    }
    var salary=document.getElementById('salary').value;
    if(salary == "")
    {
        var p6=document.getElementById("p5");
        p6.innerText="please enter organisation";
        p6.style.color="red"; 
        count++;
    }
    const profile={
        design:design,
        organisation:organisation,
        salary:salary,
       
    }
    if(count === 0)
    {
window.localStorage.setItem("edu",JSON.stringify(profile)); 
    }

}
window.onload=function(){
    document.getElementById("professionForm").onsubmit=store
}