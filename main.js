const burger = document.querySelector(".burger");
const nav = document.querySelector(".flex-nav");
const iconBurger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");
const h1PlayerTitle = document.querySelector(".player-content h1")
const title = document.querySelector(".title")


// h2 extra
setTimeout(() => {
    const grow = 20

    const h2PlayerTitle = document.createElement('h2');
    h2PlayerTitle.textContent = 'Welcome to the Official Web Site ';
    title.appendChild(h2PlayerTitle);
    h2PlayerTitle.style.fontSize = `${grow}px`

}, 3000);

//  burger

const menu = () => {
    burger.classList.toggle("active");
    nav.classList.toggle("showMenu");
    iconBurger.classList.toggle("active");
    iconX.classList.toggle("active");
};

burger.addEventListener("click", menu);

const closeMenu = () => {
    console.log('działa')
}

document.body.addEventListener('click', closeMenu)



// nav jQuery
$('nav a').on('click', function () {
    const goToSection = "[data-section=" + $(this).attr('class') + "]";
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    })
})


// scroll clubs 

const showClub = () => {

    const windowHeight = $(window).height()
    const scrollValue = $(this).scrollTop();
    // console.log(scrollValue);

    //Pierwsza sekcja
    const $s2 = $('.s2');
    const s2FromTop = $s2.offset().top
    const s2Height = $s2.outerHeight()


    if (scrollValue > s2FromTop + s2Height - windowHeight) {
        console.log("jestem art 2 wywietlony w całości");
        $s2.addClass('active');
    }
    const $club = $('.s2');

    const clubFromTop = $s2.offset().top;


    const clubHeight = $club.height();

    if (scrollValue > clubFromTop + clubHeight / 2 - windowHeight) {
        $s2.addClass('active');
        console.log('załączeni animacji op1');
    }

}

$(document).on('scroll', showClub)