
window.addEventListener('resize', resized);


function openNav() {
    var nav = document.getElementsByTagName("nav")[0];
    nav.style.width = "55%";
}

function closeNav() {
    var nav = document.getElementsByTagName("nav")[0];
    //element.style.display = "none";
    nav.style.width = "0";
}


function resized(){
    var nav = document.getElementsByTagName("nav")[0];
    if (document.documentElement.clientWidth > 700){
        nav.style.width = "15%";
    } else if( document.documentElement.clientWidth < 700){
        nav.style.width = "0";
    }
}



