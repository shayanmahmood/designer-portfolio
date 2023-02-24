/*
┌─────────────────────────────────────────────────────────────────┐
┃                   LAYOUT MADE BY VIPERESOLIDE                	┃
┌─────────────────────────────────────────────────────────────────┐
┃  Please montion me in your code. This layout is free but I		┃
┃  request a place in your project. You can just copy-paste			┃
┃  this piece of text if you don't want to write another one.		┃
┃																						┃
┃  On this, have fun using this template :D                    	┃
└─────────────────────────────────────────────────────────────────┘
*/


var cursor = document.createElement("div");
cursor.style.width = "10px";
cursor.style.height = "10px";
cursor.style.border = "1px solid #fff";
cursor.style.background = "#fff";
cursor.style.borderRadius = "50%";
cursor.style.position = "absolute";
body = document.getElementsByTagName("body")[0];
body.appendChild(cursor);

var cursorFllw = document.createElement("div");
cursorFllw.style.width = "50px";
cursorFllw.style.height = "50px";
cursorFllw.style.border = "1px solid #fff";
cursorFllw.style.borderRadius = "50%";
cursorFllw.style.position = "absolute";
cursorFllw.style.transition = "all .25s cubic-bezier(0,.02,1,.99)";
body = document.getElementsByTagName("body")[0];
body.appendChild(cursorFllw);

document.addEventListener("mousemove", (e) => {
	
	cursor.style.top = (e.clientY - 5) + "px";
	cursor.style.left = (e.clientX - 5) + "px";
	
	cursorFllw.style.top = (e.clientY - 25) + "px";
	cursorFllw.style.left = (e.clientX - 25) + "px";
	
});



const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ$@#%*&()";

let interval = null;

document.querySelector("h1").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}





$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});



