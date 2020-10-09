
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


function resized(){  //Prevents nav colapsing to wrong size.
    var nav = document.getElementsByTagName("nav")[0];
    if (document.documentElement.clientWidth > 725){
        nav.style.width = "15%";
    } else if( document.documentElement.clientWidth < 725){
        nav.style.width = "0";
    }
}




$(document).ready(function() {
    $('#jNav').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 400,
	scrollThreshold: 0.5,
	filter: '',
	easing: ''
    });
    
    $('.do').click(function(e) {
      $('#section-4').append('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>');
      e.preventDefault();
    });
    
  });

