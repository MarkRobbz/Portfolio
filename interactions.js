window.addEventListener('resize', resized);


function openNav() {
    var nav = document.getElementsByTagName("nav")[0];
    nav.style.width = "55%";
}

function closeNav() {
    var nav = document.getElementsByTagName("nav")[0];
    nav.style.width = "0";
}


function resized() { //Prevents nav being wrong size when closed.
    var nav = document.getElementsByTagName("nav")[0];
    if (document.documentElement.clientWidth > 725) {
        nav.style.width = "15%";
    } else if (document.documentElement.clientWidth < 725) {
        nav.style.width = "0";
    }
}


$(document).ready(function () {
    $('#jNav').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 400,
        scrollThreshold: 0.5,
        filter: '',
        easing: ''
    });
});