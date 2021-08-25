if(localStorage.getItem("cart") === null)
{
    localStorage.setItem("cart", JSON.stringify([]));
}

var e1 = document.getElementById("signIn");
function jump()
{
    var p = document.getElementById("passReset");
    p.style.display = "none";
    e1.style.display = "";
}

function change1()   /* signIn to signUp Change*/
{
    e1.style.display = "none";
    var e2 = document.getElementById("signUp");
    e2.style.display = "";
}

function change2()   /* signIn to forgot Password Change*/
{

    e1.style.display = "none";
    var ele = document.getElementById("passReset");
    ele.style.display = "";
}

function change3()   /* signUp to SignIn Change*/
{
    var ele = document.getElementById("signUp");
    ele.style.display = "none";
    e1.style.display ="";
}

function signUpData(e)
{
    e.preventDefault();

    var emailSup = document.getElementById("emailSup").value;
    console.log("Email is ", emailSup);
    var passSup = document.getElementById("passSup").value;
    console.log("Pass is : ", passSup);
    var rePassSup = document.getElementById("rePassSup").value;
    console.log("Repass is : ",rePassSup);

    if(emailSup == "")
    {var e2 = document.getElementById("e2");
    e2.innerText = "Please specify your email."
    e2.style.color = "red"
    e2.style.fontWeight = "bold";}

    if(passSup == "")
    {var p2 = document.getElementById("p2");
    p2.innerText = "Please specify your password."
    p2.style.color = "red"
    p2.style.fontWeight = "bold";}

    if(rePassSup == "")
    {var p3 = document.getElementById("p3");
    p3.innerText = "Please specify your confirm password."
    p3.style.color = "red"
    p3.style.fontWeight = "bold";}
    
    if(passSup == rePassSup)
    {
        console.log("Matched!");

        var cart_json = localStorage.getItem("cart");
        var cart = JSON.parse(cart_json);
        cart.push([emailSup, passSup, rePassSup]);
        localStorage.setItem("cart",JSON.stringify(cart));

    }
    else
    {
        console.log("MisMatch");
        
    }
}

function signInData(e)
{
    e.preventDefault();

    var emailSin = document.getElementById("emailSin").value;
    console.log("Email is ", emailSin);
    var passSin = document.getElementById("passSin").value;
    console.log("Pass is : ", passSin);

    var rec_cart_json = localStorage.getItem("cart");
    var saved = JSON.parse(rec_cart_json);
    console.log("Recovered Global Data is : ", saved);

    var e1 = document.getElementById("e1");
    if(emailSin == "")
    { 
        e1.innerText = "Please specify your email."
        e1.style.color = "red"
        e1.style.fontWeight = "bold";
    }

    var p1 = document.getElementById("p1");
    if(passSin == "")
    {
        p1.innerText = "Please specify your password."
        p1.style.color = "red"
        p1.style.fontWeight = "bold";
    }

    var found = 0;
    for(var i=0; i<saved.length; i++)
    {
        if( (saved[i][0] === emailSin) && (saved[i][1] == passSin) )
        {
            console.log("Genuine user");
            found = 1;
            break;
        }
    }
    if(found == 0)
    {
        console.log("Invalid User!");
    }

}

function passReset(e)
{
    e.preventDefault();

    var emailpass = document.getElementById("emailpass").value;
    console.log("Email is ", emailpass);

    var rec_cart_json = localStorage.getItem("cart");
    var saved = JSON.parse(rec_cart_json);
    console.log("Recovered Global Data is : ", saved);

    var found = 0;
    for(var i=0; i<saved.length; i++)
    {
        if( (saved[i][0] === emailpass))
        {
            console.log("Recovery email sent");
            found = 1;
            break;
        }
    }
    if(found == 0)
    {
        console.log("Not even registered!");
    }

    if(emailpass === "")
    {
        console.log("Enter something");
        var fp = document.getElementById("fp");
        fp.innerText = "Please specify your email."
        fp.style.color = "red"
        fp.style.fontWeight = "bold";
    }

}

function googleplay()
{
    window.location.assign("https://www.hirist.com/downloadapp?ref=signup")
}
