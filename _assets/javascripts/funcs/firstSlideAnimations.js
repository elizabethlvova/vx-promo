function firstSlideAnimations() {

    var firstSlideSel = '#first-slide',
        scrollableContentSel = '.first-slide__scrollable';

    $.fn.scrollStopped = function(callback) {
        var that = this, $this = $(that);

        $this.scroll(function(ev) {
            clearTimeout($this.data('scrollTimeout'));
            $this.data('scrollTimeout', setTimeout(callback.bind(that), 200, ev));
        });
    };

    $(window).on('scroll', function() {
        if ($(window).scrollTop() <= $(firstSlideSel).outerHeight()) {
            $(firstSlideSel).find(scrollableContentSel).css('top', 0 - $(window).scrollTop()/2);
            // $(firstSlideSel).find(scrollableContentSel).addClass('blur');
        }
    });

    // $(window).scrollStopped(function() {
    //     $(firstSlideSel).find(scrollableContentSel).removeClass('blur');
    // });

}