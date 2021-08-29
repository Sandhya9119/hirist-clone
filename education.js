var count=0;
function store(){
    var institute=document.getElementById('institute_1').value;
    if(institute == "")
    {
        
            var p2=document.getElementById("p1");
            p2.innerText="please enter the Institute";
            p2.style.color="red"; 
           count++;
    }
       
    var regbatch=document.getElementById('regbatchfrom_1').value;
    if(institute == "")
    {
        
            var p2=document.getElementById("p3");
            p2.innerText="please enter the Batch";
            p2.style.color="red"; 
            count++;
    }
    var regendbatch=document.getElementById('regbatchto_1').value;
    if(institute == "")
    {
        
            var p4=document.getElementById("p3");
            p4.innerText="please enter the Batch";
            p4.style.color="red"; 
            count++;
    }
    var course=document.getElementById('coursetype_1').value;
    if(institute == "")
    {
        
            var p6=document.getElementById("p5");
            p6.innerText="please enter the course";
            p6.style.color="red"; 
            count++;
    }
    var degree=document.getElementById('degree_1').value;
    if(institute == "")
    {
        
            var p8=document.getElementById("p7");
            p8.innerText="please enter the Degree";
            p8.style.color="red"; 
            count++;
    }
    const profile={
        institute:institute,
        regbatch:regbatch,
        regendbatch:regendbatch,
        course:course,
        degree:degree,
    }
if(count === 0)
{
window.localStorage.setItem("pro",JSON.stringify(profile)); 
}
}
window.onload=function(){
    document.getElementById("educationForm").onsubmit=store
}


