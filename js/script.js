// event click on mobile at menu-hamburger
const menuIcon = document.querySelector('.hamburger-menu');
const navBar = document.querySelector('.header');
const navCollapses = document.querySelectorAll('.nav-collapse .nav li a');

menuIcon.addEventListener('click', () => {
    navBar.classList.toggle('change');
})

// event click on mobile inside menu-hamburger at nav-navbar
function menu_hamburger() {
    const navMore = document.querySelector('.nav .expand-nav');
    navMore.addEventListener('click', () => {
    navMore.classList.toggle('notHover');
})
}

// nav-collapse
navCollapses.forEach((element) => {
    
    element.addEventListener('click', (event)=> {
        const isSibling = element.nextElementSibling && element.nextElementSibling.classList.contains('subnav');
        if (isSibling) {
            event.preventDefault();
        }
        else {
            navBar.classList.remove('change');
        }
    })
})

// scroll to top 

function scrollTop() {
    const scrollTop = document.querySelector('.scrollTop');

    window.addEventListener('scroll', ()=>{
        if (window.pageYOffset > 100) {
            scrollTop.classList.add('Active');
        }
        else {
            scrollTop.classList.remove('Active');
        }
    })
}

// choose the blog
function chooseBlogs() {
    const authorBlogs = Array.from(document.querySelectorAll(".nav-tabs li"));
    const contentBlogs = Array.from(document.querySelectorAll(".tab-content .tab__pane"));
    let oldValue = document.querySelector(".nav-tabs .showUp").attributes[0].value - 1;
    authorBlogs.forEach((element, index)=> {
        element.addEventListener('click', (event)=> {
            if (authorBlogs[oldValue].attributes[0].value != element.attributes[0].value) {
                contentBlogs[oldValue].classList.remove(("showUp"));
                authorBlogs[oldValue].classList.remove(("showUp"));
            }
            if (element.attributes[0].value === contentBlogs[index].attributes[0].value) {
                contentBlogs[index].classList.add("showUp");
                authorBlogs[index].classList.add("showUp");
                oldValue = index;
            }
        })
    })
}

menu_hamburger();

scrollTop();

chooseBlogs();