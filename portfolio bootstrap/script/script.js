// Navbar Scrolled
document.addEventListener('scroll', () => {
    const navigation = document.querySelector(".navigation")
    if(window.scrollY > 400){
        navigation.classList.add("scrolled")
    }else{
        navigation.classList.remove("scrolled")
    }
}) 

// Typed Effect
var typed = new Typed('.auto-type', {
    strings: ['Larry Daniel', 'Developer','Designer'],
    typeSpeed: 50,
    shuffle: true,
    backSpeed: 50,
    loop: true,
    showCursor: false,
  });

