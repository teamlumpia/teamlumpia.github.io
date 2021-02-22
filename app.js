function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

var clicked = false;


function changeColor(id) {
    if(id == "svc") {
        document.getElementById(id).style.color= "red";
        document.getElementById("abt").style.color= "white";
        document.getElementById("get").style.color= "white";
        document.getElementById("test").style.color= "white";
    }
    if(id == "abt") {
        document.getElementById(id).style.color= "red";
        document.getElementById("svc").style.color= "white";
        document.getElementById("get").style.color= "white";
        document.getElementById("test").style.color= "white";
    }
    if(id == "get") {
        document.getElementById(id).style.color= "red";
        document.getElementById("svc").style.color= "white";
        document.getElementById("abt").style.color= "white";
        document.getElementById("test").style.color= "white";
    }
    if(id == "test") {
        document.getElementById(id).style.color= "red";
        document.getElementById("svc").style.color= "white";
        document.getElementById("abt").style.color= "white";
        document.getElementById("get").style.color= "white";
    }
    if(id == "lets") {
        document.getElementById("svc").style.color= "white";
        document.getElementById("abt").style.color= "white";
        document.getElementById("get").style.color= "white";
        document.getElementById("test").style.color= "white";
    }
}  