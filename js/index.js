$('.slideshow').flickity({
    wrapAround: true,
    autoPlay: 1500,
    cellAlign: 'left',
    contain: true,
    pageDots: false,
});

$('.wrap').flickity({
    wrapAround: true,
    autoPlay: 1000,
    cellAlign: 'left',
    contain: true,
    freeScroll: true,
    prevNextButtons: false,
    pageDots: false
});

function bindAnimation(container, target, animationName) {
    function bind() {
        const rect = $(container).position();
        $(target).toggleClass(animationName, window.scrollY + window.innerHeight / 2 > rect.top);
    }
    $(document).on('scroll', bind);
}

bindAnimation('.fixed_img', '.sliding-text', 'slide_txt');
bindAnimation('.fixed_img2', '.circle', 'circle-focused');