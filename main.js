const awardsSum = [{
    awardsNames: `National championships`,
    titles: [`Silver medal with cup.svg 2016/2017 - with Sir Sicoma Colussi Perugia
        2011/2012 Simple gold cup.svg Italian SuperCup with Lube Banca Macerata
        2013/2014 Gold medal with cup.svg Italian Championship with Lube Banca Maceratapp
        2015/2016 Simple gold cup.svg Emir of Qatar Cup, with Al Arabi
        2016/2017 Simple gold cup.svg Italian SuperCup with Sir Safety Perugia
        2017/2018 Simple gold cup.svg Italian Cup with Sir Safety Perugia
        2017/2018 Gold medal with cup.svg Italian Championship with Sir Safety Perugia`]
}, {
    awardsNames: `Individually`,
    titles: [`2010 Serie A2 – Most Valuable Player
    2013 FIVB World League – Best Outside Spiker
    2017 CEV Champions League – Best Outside Spiker`],
}, {
    awardsNames: `National team`,
    titles: [`2011 FIVB World Cup
     2012 Olympic Games
     2013 FIVB World League`]
}];

function renderTitles(titles) {
    return `
        ${titles.map(title => `${title}`)}
    `;
}

const markup = `
 <div class="awardsSum">
    <h2>
        ${awardsSum.awardsNames}
    </h2>
    <p ${awardsSum.titles}</p>
    ${renderTitles(awardsSum.title).join('')}
 </div>
`
document.innerHTML = markup;


const time = 4000;
let active = 0;

const slider = document.querySelector('.slider');
const awardName = document.createElement('h2');
const awardType = document.createElement('p');

const changeSlide = () => {
    active++
    if (active === awardsSum.length) {
        active = 0;
    }
    slider.appendChild(awardName);
    slider.appendChild(awardType);
    awardType.classList.add('award');

    awardType.textContent = awardsSum[active].titles;
    awardName.textContent = awardsSum[active].awardsNames
}



let indexInterval = setInterval(changeSlide, time)



const formErrors = []
const burger = document.querySelector(".burger");
const nav = document.querySelector(".flex-nav");
const iconBurger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");
const h2PlayerTitle = document.querySelector(".player-content h2");
const scrollBtn = document.getElementById("scroll-button");
const form = document.querySelector('.menager-contact');
const formName = document.querySelector('input[name="name"]');
const formEmail = document.querySelector('input[name="email"]');
const formArea = document.querySelector('textarea[name="message"]');
const sectionPlayer = document.querySelector('.player');


// h2 title - main section
animationTitle = () => {
    h2PlayerTitle.classList.add('on')
    // console.log('działa')
}
setTimeout(animationTitle, 3000);


//  burger menu
const openMenu = () => {
    burger.classList.toggle("active");
    nav.classList.toggle("showMenu");
    iconBurger.classList.toggle("active");
    iconX.classList.toggle("active");
    console.log('klikam w button')
};
burger.addEventListener("click", openMenu);

const closeMenu = () => {
    burger.classList.remove("active");
    nav.classList.remove("showMenu");
    iconBurger.classList.remove("active");
    iconX.classList.remove("active");
    console.log('klikam w body')
}

sectionPlayer.addEventListener('click', closeMenu)


// nav - go to section 
$('nav a').on('click', function () {
    const goToSection = "[data-section=" + $(this).attr('class') + "]";
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    })
})

// button menager - go to section 
$('.menager').on('click', function () {
    const goToSection = "[data-section=" + $(this).attr('class') + "]";
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    })
})

// show clubs 
const showClub = () => {

    const windowHeight = $(window).height()
    const scrollValue = $(this).scrollTop();
    // console.log(scrollValue);

    const $s2 = $('.s2');
    const $club = $('.s1');

    const clubFromTop = $s2.offset().top;

    const clubHeight = $club.height();

    if (scrollValue > clubFromTop + (clubHeight / 2) - windowHeight) {
        $s2.addClass('active');
        // console.log('załączenie animacji op1');
    }
}

$(document).on('scroll', showClub)



// scrollUp button; 
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// form validaion
const formValidator = (e) => {
    e.preventDefault()
    if (formName.value === "") {
        formErrors.push("Write your name.");
        formName.classList.add("invalid");
    } else {
        formName.classList.remove("invalid");
    }

    if (formEmail.value.indexOf('@') === -1) {
        formErrors.push("This e-mail address is not valid.");
        formEmail.classList.add("invalid");
    } else {
        formEmail.classList.remove("invalid");
    }

    if (formArea.value === "") {
        formErrors.push("Add a message.");
        formArea.classList.add("invalid");
    } else {
        formArea.classList.remove("invalid");
    }

    if (formErrors.length) {
        // don't send 
    } else {
        form.submit()
        // send email 
    }
}
form.addEventListener('submit', formValidator);



// achievements show