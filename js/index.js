var navdata = {
    mobile : [
        {
            name : "iOS",
            image : "https://staticlogo.hirist.com/ios.png",
            link : "D:\\hirist-clone\\ios.html" 
        },
        {
            name : "Android",
            image : "https://staticlogo.hirist.com/android.png",
            link : "D:\\hirist-clone\\android.html" 
        },
         {
            name : "React Native",
            image : "https://staticlogo.hirist.com/react-native.png"
        },
         {
            name : "Ionic",
            image : "https://staticlogo.hirist.com/ionic.png"
        },
         {
            name : "Phonegap",
            image : "https://staticlogo.hirist.com/phonegap.png"
        },
         {
            name : "Xamarin",
            image : "https://staticlogo.hirist.com/xamarin.png"
        },
         {
            name : "OpenGL",
            image : "https://staticlogo.hirist.com/opengl.png"
        }
    ],
    frontend : [
        {
            name : "Javascript",
            image : "https://staticlogo.hirist.com/javascript.png",
            link : "D:\\hirist-clone\\javascript.html" 
        },
        {
            name : "ReactJS",
            image : "https://staticlogo.hirist.com/reactjs.png",
            link : "D:\\hirist-clone\\react.html" 
        },
         {
            name : "AngularJS",
            image : "https://staticlogo.hirist.com/angularjs.png"
        },
         {
            name : "JQuery",
            image : "https://staticlogo.hirist.com/jquery.png"
        },
         {
            name : "Bootstrap",
            image : "https://staticlogo.hirist.com/bootstrap.png"
        },
         {
            name : "UI",
            image : "https://staticlogo.hirist.com/ui.png"
        },
         {
            name : "UX",
            image : "https://staticlogo.hirist.com/ux.png"
        }
    ],
    backend : [
        {
            name : "Python",
            image : "https://staticlogo.hirist.com/python.png"
        },
        {
            name : "Java",
            image : "https://staticlogo.hirist.com/java.png"
        },
         {
            name : "Golang",
            image : "https://staticlogo.hirist.com/golang.png"
        },
         {
            name : "Ruby on Rails",
            image : "https://staticlogo.hirist.com/ruby-on-rails.png"
        },
         {
            name : "R",
            image : "https://staticlogo.hirist.com/r.png"
        },
         {
            name : "Django",
            image : "https://staticlogo.hirist.com/django.png"
        },
         {
            name : "NodeJs",
            image : "https://staticlogo.hirist.com/nodejs.png"
        },
         {
            name : "Rest API",
            image : "https://staticlogo.hirist.com/rest-api.png"
        }
    ],
    devops : [
        {
            name : "Cloud Architecture",
            image : "https://staticlogo.hirist.com/cloud-architecture.png"
        },
        {
            name : "AWS",
            image : "https://staticlogo.hirist.com/aws.png"
        },
         {
            name : "Google Cloud",
            image : "https://staticlogo.hirist.com/google-cloud.png"
        },
         {
            name : "Azure",
            image : "https://staticlogo.hirist.com/azure.png"
        },
         {
            name : "Kubernetes",
            image : "https://staticlogo.hirist.com/kubernetes.png"
        },
         {
            name : "Docker",
            image : "https://staticlogo.hirist.com/docker.png"
        },
         {
            name : "Jenkins",
            image : "https://staticlogo.hirist.com/jenkins.png"
        },
         {
            name : "Chef",
            image : "https://staticlogo.hirist.com/chef.png"
        }
    ],
    tech : [
        {
            name : "Blockchain",
            image : "https://staticlogo.hirist.com/blockchain.png"
        },
        {
            name : "Cryptocurrency",
            image : "https://staticlogo.hirist.com/cryptocurrency.png"
        },
         {
            name : "Augmented Reality",
            image : "https://staticlogo.hirist.com/augmented-reality.png"
        },
         {
            name : "Virtual Reality",
            image : "https://staticlogo.hirist.com/virtual-reality.png"
        },
         {
            name : "iOT",
            image : "https://staticlogo.hirist.com/iot.png"
        },
         {
            name : "Data Scientist",
            image : "https://staticlogo.hirist.com/data-scientist.png"
        }
    ],
    data : [
        {
            name : "Artificial Intelligence",
            image : "https://staticlogo.hirist.com/artificial-intelligence.png"
        },
        {
            name : "Machine Learning",
            image : "https://staticlogo.hirist.com/machine-learning.png"
        },
         {
            name : "Data Analytics",
            image : "https://staticlogo.hirist.com/data-analytics.png"
        },
         {
            name : "NLP",
            image : "https://staticlogo.hirist.com/nlp.png"
        },
         {
            name : "Data Mining",
            image : "https://staticlogo.hirist.com/data-mining.png"
        },
         {
            name : "Data Modeling",
            image : "https://staticlogo.hirist.com/data-modeling.png"
        },
         {
            name : "Big Data",
            image : "https://staticlogo.hirist.com/big-data.png"
        }
    ]

}
var company_data = {
    mobile :{
        img1 : "images/zycus.png",
        img2 : "images/meesho.png",
        img3 : "images/mpl.jpeg"
    },
    frontend :{
        img1 : "images/redbus.png",
        img2 : "images/accenture.png",
        img3 : "images/xebia.png"
    },
    backend :{
        img1 : "images/ola.png",
        img2 : "images/gsngames.png",
        img3 : "images/vdart.png"
    },
    devops :{
        img1 : "images/cogni.jpeg",
        img2 : "images/porter.jpeg",
        img3 : "images/yulu.jpeg"
    },
    tech :{
        img1 : "images/zs.png",
        img2 : "images/infoedge.png",
        img3 : "images/accenture.png"
    },
    data :{
        img1 : "images/global.jpeg",
        img2 : "images/yulu.jpeg",
        img3 : "images/mpl.jpeg"
    }

}
display("mobile");

var nav = document.querySelector('#navbar');
var navdivs = nav.querySelectorAll('div');
navdivs.forEach(element => {
    element.onmousemove = function(){
        changeOrange(element);
    }
    element.onmouseout = function(){
        changeOriginal(element);
    }
});

function changeOrange(event){
    event.setAttribute("class","change-orange");
    var icon = event.querySelector("i");
    icon.style.color = "#e9630c";
    event.querySelector("p").setAttribute("class","change-orange");
    if( event.querySelector(".bar") == null){
        var bardiv = document.createElement("div");
        bardiv.setAttribute("class","bar");
        event.appendChild(bardiv);
    }
}
function changeOriginal(event){
    var icon = event.querySelector("i");
    icon.style.color = "lightgray";
    event.querySelector("p").removeAttribute("class","change-orange");
    var bardiv = event.querySelector(".bar");
    bardiv.remove();
}

function display(type){
    var cat_info = document.getElementById("sub-categories");
    cat_info.innerHTML = "";
    var info = navdata[type];
    info.forEach(element => {
         var divdata = document.createElement("div");
         var image = element.image;
         divdata.style.background = "url(" + image +  ")";
         var atag = document.createElement("a");
         atag.innerText = element.name;
         atag.setAttribute("href",element.link);
         divdata.appendChild(atag);
         cat_info.appendChild(divdata);
    });
    
    var company_div =  document.getElementById("companies"); 
    company_div.innerHTML = "";
    var company = company_data[type];

    var img1 = document.createElement("img");
    img1.setAttribute("src",company.img1);

    var img2 = document.createElement("img");
    img2.setAttribute("src",company.img2);

    var img3 = document.createElement("img");
    img3.setAttribute("src",company.img3);

    company_div.append(img1,img2,img3);
}

function showdiv(idname){
    var status = document.getElementById(idname).getAttribute("style");
    if("display: block;" == status){
         document.getElementById(idname).style.display = "none";
    }
    else{
         document.getElementById(idname).style.display = "block";
    }
    
}
var exp_div = document.getElementById("showexp");
var exp_class =exp_div.querySelector(".show");
var exp_list = exp_class.querySelectorAll("div");
for(var exp = 0; exp<exp_list.length; exp++){
    exp_list[exp].onclick = function(){
        var year = document.getElementById("year");
        year.value = event.target.innerHTML; 
        document.getElementById("showexp").style.display = "none";
    }
}

function selLocation(){
    document.getElementById("location").value = "1 selected";
}
