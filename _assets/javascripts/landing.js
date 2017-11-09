//= require libs/jquery.min.js
//= require libs/jquery-ui.min.js
//= require libs/jquery-ui-touch-punch.min.js
//= require libs/slick.min.js
//= require libs/is-mobile.min.js
//= require_directory ./funcs

$(function() {

    window.breakpoints = {
        mobileWidth: 480,
        tabletWidth: 768,
        smallDesktopWidth: 1024,
        mediumDesktopWidth: 1366,
        largeDesktopWidth: 1600
    };


    scrollParams();
    scrollbarWidth();

    headerColor();
    initSlidedMenu();


    if (!isMobile.any)
        $('body').addClass('at-desktop');

    if (isMobile.phone)
        $('body').addClass('at-mobile');

    if (isMobile.tablet)
        $('body').addClass('at-tablet');

    if (isMobile.apple.device)
        $('#features-slide').find('.features-slide__content__item').addClass('without-play-icon');


    // index page's scripts
    if ($('.page').length < 1) {
        initConfigurationsCalculator();
        initReviewsSlider();

        // play/pause video
        $('.features-slide__content__item').on('click', function() {
            var videoParentEl = $(this),
                video = document.getElementById('vexor-video');

            if (video.paused) {
                videoParentEl.addClass('playing');
                video.play();
            }
            else {
                video.pause();
                videoParentEl.removeClass('playing');
            }
        });
    }
    // scripts for other pages
    else {
        $('body').addClass('alternate');
        $('footer').addClass('inversed');

        if ($('#documentation').length > 0)
            initDocumentationNav();
    }


    $('a[data-action="scroll"]').on('click', function(ev) {
        ev.preventDefault();

        var sel = $(this).attr('href'),
            target = (sel == '#configuration-slide') ? $(sel).offset().top - 0.15*$(window).height() : $(sel).offset().top,
            duration = getScrollDuration(target);

        $('html, body').animate({
            scrollTop: target
        }, duration);
    });


    $('input[readonly]').on('click focus touchmove', function (ev) {
        ev.preventDefault();
    });

});

$(document).on('ready, body:load', prepareAuth());
