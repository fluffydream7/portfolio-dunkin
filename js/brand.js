function bindAnimation(container, target, animationName) {
    function bind() {
        const rect = $(container).position();
        $(target).toggleClass(animationName, window.scrollY + window.innerHeight / 2 > rect.top);
    }
    $(document).on('scroll', bind);
}
bindAnimation('.background-img2', '.story', 'heart-beat');
bindAnimation('.background-img3', '.gif_img', 'sliding-gif');

$('section > div').on('mousewheel', function (e, delta) {
    console.log(delta)
    if (delta > 0) {
        var prevTop = $(this).prev().offset().top
        $('html, body').stop().animate({
            scrollTop: prevTop + 'px'
        }, 500)
    } else if (delta < 0) {
        var nextTop = $(this).next().offset().top
        $('html, body').stop().animate({
            scrollTop: nextTop + 'px'
        }, 500)
    }
})