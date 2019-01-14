$(document).ready(function () {
    // On Refresh Default should be at the top
    $('html,body').animate({ scrollTop: 0 });
    // Find the Current Browser and saves it in browser variable
    var ua = navigator.userAgent.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i),
        browser;
    if (navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/Trident.*rv[ :]*11\./i)) {
        browser = "Edge";
    }
    else {
        browser = ua[1].toLowerCase();
    }
    // According to the browser name css being applied
    switch (browser) {
        case 'chrome':
            $('#popup_box').css({ "top": "15px", "right": "15px" });
            break;
        case 'Edge':
            $('#popup_box').css({ "bottom": "15px", "left": "50%", "transform": "translateX(-50%)" });
            break;
        case 'safari':
            $('#popup_box').css({ "top": "15px", "right": "15px" });
            break;
        case 'firefox':
            $('#popup_box').css({ "top": "15px", "left": "15px" });
            break;
        default:
            $('#popup_box').css({ "top": "50%", "left": "50%", "transform": "translate(-50%,-50%)" });
            $('#popup_box').html("Browser Not Supported")
    }
    // On button click show popup and hide it after 3 secs of interval
    $("#popup-btn").click(function () {
        $("#popup-wrapper").fadeIn();
        setTimeout(function () {
            $("#popup-wrapper").fadeOut();
        }, 3000)
    });
    // Go To Top 
    $('#go-to-top').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 'slow');
    });
    $("#uninstall").click(function(){
        $(this).toggleClass('active');
        $("#unistall-wrap").slideToggle();
        $('html,body').animate({ scrollTop: $(document).height() }, 'slow');
    });
});

// On Scroll show go to top button
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 500) {
        $('#go-to-top').fadeIn();
    } else {
        $('#go-to-top').fadeOut();
    }
});