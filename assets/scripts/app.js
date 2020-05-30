/* ladowanie particles.js */
particlesJS.load('particles-js', 'assets/styles/particles.json');

/* sticky navbar */
window.addEventListener('scroll', function (e) {
    var nav = document.getElementById('navbar');
    var navlogo = document.getElementById('logo');
    if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
            nav.classList.add('nav-scrolled');
            navlogo.classList.add('navimg-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
            navlogo.classList.remove('navimg-scrolled');
        }
    
});