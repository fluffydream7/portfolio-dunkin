$('.depth1 > li').hover(
    function(){
        $(this).find('.depth2')
        .stop().slideDown(300)
    },
    function(){
        $(this).find('.depth2')
        .stop().slideUp(300)
    }
);

$('.opensns').on('click', function () {
    if ($(this).find('i').hasClass('fa-bars')){
        $(this).find('i').removeClass('fa-bars').addClass('fa-xmark')
    }else {
        $(this).find('i').removeClass('fa-xmark').addClass('fa-bars')
    }
    $('#header #nav').toggleClass('on')
    $('html').css({
        overflowY: 'hidden'
    })
})
