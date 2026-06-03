function initSlider(ctrSelector, sldrSelector, prvSelector, nxtSelector) {
    var sldr = $(sldrSelector),
        slideWidth = $(ctrSelector).outerWidth(),
        slideCount = $(sldrSelector + ' img').length,
        prv_b = $(prvSelector),
        nxt_b = $(nxtSelector),
        sldrInterval = 3300,
        animateTime = 1000,
        course = 1,
        margin = -slideWidth,
        interval;

    $(sldrSelector + ' img:last').clone().prependTo(sldrSelector);
    $(sldrSelector + ' img').eq(1).clone().appendTo(sldrSelector);
    sldr.css('margin-left', -slideWidth);

    function nxt_bSlide() {
        interval = window.setInterval(animate, sldrInterval);
    }

    function animate() {
        if (margin == -slideCount * slideWidth - slideWidth) {
            sldr.css({ 'marginLeft': -slideWidth });
            margin = -slideWidth * 2;
        } else if (margin == 0 && course == -1) {
            sldr.css({ 'marginLeft': -slideWidth * slideCount });
            margin = -slideWidth * slideCount + slideWidth;
        } else {
            margin = margin - slideWidth * (course);
        }
        sldr.animate({ 'marginLeft': margin }, animateTime);
    }

    function sldrStop() {
        window.clearInterval(interval);
    }

    function updateSlideWidth() {
        slideWidth = $(ctrSelector).outerWidth();
    }

    $(window).resize(function() {
        updateSlideWidth();
        sldr.css('margin-left', margin);
    });

    prv_b.click(function() {
        if (sldr.is(':animated')) return false;
        var course2 = course;
        course = -1;
        animate();
        course = course2;
    });

    nxt_b.click(function() {
        if (sldr.is(':animated')) return false;
        var course2 = course;
        course = 1;
        animate();
        course = course2;
    });

    sldr.add(nxt_b).add(prv_b).hover(function() {
        sldrStop();
    }, nxt_bSlide);

    nxt_bSlide();
}

$(document).ready(function() {
    initSlider('.sl_ctr_1', '.sldr_1', '.prv_b_1', '.nxt_b_1');
    initSlider('.sl_ctr_2', '.sldr_2', '.prv_b_2', '.nxt_b_2');
    initSlider('.sl_ctr_3', '.sldr_3', '.prv_b_3', '.nxt_b_3');
});