
// log in slider JS

var x = document.querySelector("#login");
var y = document.querySelector("#register");
var z = document.querySelector("#btn");
var btn = document.querySelectorAll("button");

function register(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";

    btn.classList.add("onClickTextStyle");
}

function login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";

}

// log in slider JS
