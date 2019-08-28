// Confetti Module
var Confetti = (function() {
    var create = function() {
        var width = Math.ceil(Math.random() * 15);
        var height = width * 0.4;
        var colorIdx = Math.ceil(Math.random() * 4);
        var color = getColor(colorIdx);
        $('<span class="confetti ' + color + '"></span>').css({
            "width": width + "px",
            "height": height + "px",
            "top": -(Math.random() + 0.5) * 20 + "%",
            "left": Math.random() * 100 + "%",
            "opacity": Math.random() + 0.5, // so that opacity always more than half
            "transform": "rotate(" + Math.random() * 360 + "deg)"
        }).appendTo('.confettiContainer'); // instead of appending each node,
        // better to accumulate all nodes and then append all at once.
        //
        // at first i implemented confettiDrop using jquery animate
        // but then choose to use CSS animations to implement confettiDrop
        // dropConfetti(i);
    }
    var getColor = function(colorIdx) {
        // Select random color for particle
        switch (colorIdx) {
            case 1:
                color = "yellow";
                break;
            case 2:
                color = "blue";
                break;
            case 3:
                color = "green";
                break;
            case 4:
            default:
                color = "red";
        }
        return color;
    }
    var createConfetti = function(x) {
        for (var i = 0; i < x; i++) {
            create();
        }
    }
    // var dropConfetti = function(x) {
    //     $('.confetti-' + x).animate({
    //         top: "100%",
    //         left: "+=" + Math.random() * 15 + "%"
    //     }, Math.random() * 2000 + 20000, function() {
    //         resetConfetti(x);
    //     });
    // };
    // var resetConfetti = function(x) {
    //     $('.confetti-' + x).animate({
    //         top: "0%",
    //         "left": "-=" + Math.random() * 15 + "%"
    //     }, 0, function() {
    //         dropConfetti(x);
    //     });
    // }
    return {
        init: createConfetti
    }
})();
$(document).ready(function() {
    Confetti.init(200);
});