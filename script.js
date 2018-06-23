/* Video pause/play */

let video = document.querySelector('video');

video.addEventListener('click', function(){  
    this.paused ? this.play() : this.pause();
});


/* navbar background change on scroll */

let navbar = document.getElementById('topNav');
var height = navbar.offsetHeight;

document.addEventListener('scroll', function(){
    
    let scrollTop = window.pageYOffset;
        
    if (window.pageYOffset >= height){
        navbar.classList.add("navbar-scrolled");
    }else{
        navbar.classList.remove("navbar-scrolled");
    }

});
