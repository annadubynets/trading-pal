$(function() {
    $('.selectpicker').selectpicker();
});

let el = $('.switch');
let cur = el.find('.current');
let options = el.find('.options li');
let content = $('#content');

// Open language dropdown panel

el.on('click', function(e) {
    el.addClass('show-options');

    setTimeout(function() {
        el.addClass('anim-options');
    }, 50);

    setTimeout(function() {
        el.addClass('show-shadow');
    }, 200);
});


// Close language dropdown panel

options.on('click', function(e) {
    e.stopPropagation();
    el.removeClass('anim-options');
    el.removeClass('show-shadow');

    let newLang = $(this).data('lang');

    cur.find('span').text(newLang);
    content.attr('class', newLang);

    setLang(newLang);

    options.removeClass('selected');
    $(this).addClass('selected');

    setTimeout(function() {
        el.removeClass('show-options');
    }, 600);
});


// Save selected options into Local Storage

function getLang() {
    let lang;
    if (localStorage.getItem('currentLang') === null) {
        lang = cur.find('span').text();
    } else {
        lang = JSON.parse(localStorage.getItem('currentLang')).toLowerCase();
    }

    // console.log(lang);

    cur.find('span').text(lang);
    options.parent().find(`li[data-lang="${lang}"]`).addClass('selected');

    content.attr('class', lang);
}

getLang();

function setLang(newLang) {
    localStorage.setItem('currentLang', JSON.stringify(newLang).toLowerCase());

    content.attr('class', newLang);
}

if ($('.team .owl-carousel').length > 0) {
    $('.team .owl-carousel').owlCarousel({
        loop: true,
        margin: 60,
        responsiveClass: true,
        autoplay: false,
        dots: false,
        navContainer: '.team .tech-carousel-nav',
        responsive: {
            0: {
                items: 1,
                stagePadding: 60,
                nav: false
            },
            992: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    })
}