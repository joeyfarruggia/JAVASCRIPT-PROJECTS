$(document).ready(function () {
    // The shine loop function utilizes the chaining technique to 
    //utilize multiple animate event methods in the same function.
    function shineLoop() {
        $('.shine').animate({ backgroundPositionX: '1600px' }, 3000)
            .animate({ backgroundPositionX: '-800px' }, 3000);
    };

    //setinterval will repeat the shineLoop function and 0
    //sets the delayed amount of time between each repeat.
    setInterval(shineLoop, 0);
});

//Shrinks header size when user scrolls down 50px
$(document).on("scroll", function () {
    if ($(document).scrollTop() > 50) {
        $("h1").addClass("header-scrolled");
    } else {
        $("h1").removeClass("header-scrolled");
    }
});


