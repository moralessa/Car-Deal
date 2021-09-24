
const parallax = document.getElementById("paralaxMotorHome");

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = 1400 -offset  * .5 + "px";
})


