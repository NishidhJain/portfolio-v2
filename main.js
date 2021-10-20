$(document).ready(function () {

    $(window).scroll(function () {

        // change the header styling when scrolled
        if (this.scrollY > 20) {
            $("header").addClass("header--scrolled");
        }
        else {
            $("header").removeClass("header--scrolled");
        }

        if (this.scrollY > 500) {
            $(".scroll__to__top").css("display", "block");
        }
        else {
            $(".scroll__to__top").css({ 'display': 'none' });
        }
    });

    // to show or hide the side nav bar
    $(".header__bars").click(function () {
        $(".header__right").toggleClass("nav--show");
        $(".header__bars").toggleClass("close--btn");
    });

    // to close the side nav when clicked on the link
    $(".header__nav__link").click(function () {
        $(".header__right").removeClass("nav--show");
        $(".header__bars").removeClass("close--btn");
    });

    // scroll to top button
    $(".scroll__to__top").click(function () {
        $('html').animate({ scrollTop: 0 });
    });

});
