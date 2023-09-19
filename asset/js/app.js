const navToggle = document.querySelector(".mobile-nav-toggle");
const navigation = document.querySelector(".primary-navigation");
const showNavMask = document.querySelector('.navbar-mask');


navToggle.addEventListener('click', ()=> { 
   navigation.hasAttribute('data-visible') 
    ? navToggle.setAttribute('aria-expanded', false)
    : navToggle.setAttribute('aria-expanded', true);
    navigation.toggleAttribute('data-visible');

});


// const visibility = navigation.getAttribute('data-visible');
//     if (visibility === "false") {
//         navigation.setAttribute('data-visible', true);
//         navToggle.setAttribute('aria-expanded', true);
//         showNavMask.classList.toggle('show');
//     } else if (visibility === "true"){
//         navigation.setAttribute('data-visible', false);
//         navToggle.setAttribute('aria-expanded', false);
//     } 