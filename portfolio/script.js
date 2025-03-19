const openBtn = document.querySelector(".ri-menu-fill");
const one = document.querySelector(".menuicon.one");
const closeBtn = document.querySelector(".ri-close-fill");
const dropDown = document.querySelector(".dropdown");
const body = document.querySelector("body");


openBtn.addEventListener("click", function() {
    openBtn.style.display = "none";
    closeBtn.style.display = "block";
    dropDown.style.scale = "1";
});
closeBtn.addEventListener("click", function() {
    openBtn.style.display = "block";
    
    closeBtn.style.display = "none";
    dropDown.style.scale = "0";
});