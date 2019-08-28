$(document).ready(function() {
    $('.confetti').on('mouseenter', '.confetti-piece', function(e) {
        // relativeOffset is randomly choosen
        var relativeOffset = (Math.random() >= 0.5) ? '-=' : '+=';
        $(this).animate({
            // set left anywhere between 5% to 10%
            // moving to left or right of current position depending on relativeOffset(+= or -=)
            "left": relativeOffset + (Math.random() + 1) * 5 + "%"
        }, 200);
    });
});