window.onscroll = function() {
    const nav = document.querySelector('.navbar');
    const heroHeight = document.querySelector('.hero').offsetHeight;
    
    if (window.pageYOffset > (heroHeight - 75)) {
        nav.style.backgroundColor = 'white';
    } else {
        nav.style.backgroundColor = '#FFC017';
    }
};
