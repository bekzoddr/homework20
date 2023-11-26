
window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
		navbar.classList.remove("navbar-shrink");
	}
}
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:2,
    nav:true,
    loop:true,
    navText:['<img src="images/prev.svg"/>', '<img src="images/next.svg"/>'],
    autoplay:true,
    autoplayTimeout:5000
  });
});
window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.classList.add('backtop-show')
  } else {
    backtop.classList.remove('backtop-show')
  }
}