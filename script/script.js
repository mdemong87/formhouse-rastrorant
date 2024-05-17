const navberHeader = document.getElementById('navberHeader');

window.addEventListener('scroll', (e) => {

    if (window.scrollY > 200) {
        navberHeader.style.position = "fixed";
        navberHeader.style.width = "100vw";
        navberHeader.style.top = "0";
    } else {
        navberHeader.style.position = "static";
        navberHeader.style.width = "100%";
    }


});




//navbar toggleing
const navbarMenu = document.getElementById('navbarMenu');
const navbars = document.getElementById('navbars');
navbarMenu.addEventListener("click", () => {
    navbars.style.display = "flex";
});

const crossBTn = document.getElementById('crossBTn');
crossBTn.addEventListener('click', () => {
    navbars.style.display = "none";
});

window.addEventListener('resize', (e) => {
    const width = e.target.innerWidth;
    if (width > 1024) {
        navbars.style.display = "flex";
    } else {
        navbars.style.display = "none";
    }
})