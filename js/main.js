

$(document).ready(function() {
    "use strict";

 

    //scroll
    $(document).scroll(function() {
        toTop();
    });

    toTop();

    function toTop() {
        if ($(document).scrollTop() > 200) {
            $(".to-top").fadeIn();
            $(".to-top").css({
                display: "flex",
            });
        } else {
            $(".to-top").fadeOut();
        }
    }
    $(".to-top").on("click", function() {
        $("html, body").animate({ scrollTop: 0 }, 400);
    });


    //filter
    $(document).on("click", ".filter-list .filter-list-item", function() {
        let dataSelect = $(this).attr("data-id");
        $(".filter-list .filter-list-item").removeClass("active-filter");
        $(this).addClass("active-filter");
        if ("all" !== dataSelect) {
            $(".products .col-lg-3").each(function() {
                let data = $(this).attr("data-id");
                if (data == dataSelect) {
                    $(this).fadeIn();
                } else {
                    $(this).fadeOut(0);
                }
            });
        } else {
            $(".products .col-lg-3").fadeIn();
        }

    });
    $(".filter-dropdown").on("click", function() {
        $($(this).next()).toggleClass("filter-max-height");
    });
    $(".filter-dropdown-left").on("click", function() {
        $($(this).children(".nav-dropdown")).toggleClass("filter-max-height");
    });


    //accardions
    $(document).on("click", "#accordions .card-header", function() {
        let t = $(this);
        t.parents(".cards").find(".active-header").removeClass("active-header");
        t.addClass("active-header");
        t.next().slideDown(function() {
            $(this).addClass("active");
        });

        t.parents(".cards").find(".active").slideUp(function() {
            t.removeClass("active-header");
            $(this).removeClass("active");
        });
    });


    //slider (ama ishlemir)
    $('.one-time').slick({
        dots: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        slidesToShow: 1,
        adalptiveHeight: true,
        prevArrow: '<i class="fas fa-long-arrow-alt-left"></i>',
        nextArrow: '<i class="fas fa-long-arrow-alt-right"></i>',
    })




})