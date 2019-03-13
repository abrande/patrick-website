//like & shuffle button
$(document).ready(function () {
    $('.heart').click(function () {
        $(this).toggleClass('clicked');
    });

    $('.shuffle').click(function () {
        $(this).toggleClass('clicked');
    });

//show info box on hover
    $('#player').hover(function () {
        $('.info').toggleClass('up');
    });

//music player settings

    let audio = new Audio("https://soundcloud.com/patrickkeese/wish");

    $('.pause').hide(); //hide pause button until clicked

//play button
    $('.play').click(function () {
        audio.play();
        $('.play').hide();
        $('.pause').show();
    });

//pause button
    $('.pause').click(function () {
        audio.pause();
        $('.play').show();
        $('.pause').hide();
    });
});
