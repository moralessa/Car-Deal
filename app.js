
const parallax = document.getElementById("paralaxMotorHome");

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = 2650 -offset  * .7 + "px";
})
