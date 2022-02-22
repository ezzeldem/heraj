$(document).ready(function () {
    if ($("html").attr("dir") == "rtl") {
        var dir_lang = true;
    } else {
        var dir_lang = false;
    }




    $(document).click(function(){
        $(".nav-drop, .delete-box, .drop-masseg").removeClass("open-drop");
    })

    //  fixed menu

    var fixedMenu = $(".fixed-nav"),
        overFlow = $(".over-flow");

    $(".menu-icon i").click(function () {
        fixedMenu.addClass("openMenu");
        overFlow.addClass("over-flow-open");
        $("body").addClass("over-flow-body");
    });
    $(".exite-icon i,.over-flow").click(function () {
        fixedMenu.removeClass("openMenu");
        overFlow.removeClass("over-flow-open");
        $("body").removeClass("over-flow-body");
    });

    //  open pop up

    $(".contant-section .rating-bar .opensearch-box i").click(function (drop) {
        drop.preventDefault();
        $(".open-box-search").addClass("open-popUp");
        $("body").addClass("over-flow-body");
    });
    $(".exite-icon-popUP").click(function () {
        $(".open-box-search").removeClass("open-popUp");
        $("body").removeClass("over-flow-body");
    });

    //  open drop down

    $(".main-nav .ul-nav2 ul li .drop-down-link ").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(".nav-drop").toggleClass("open-drop");
    });

    //  open search-form-chat

    $(".chat-page .chat-user-ul .search-chat-buttom ").click(function () {
        $(".chat-page .chat-user-ul .search-form-chat .saerch-formChat ").toggle(250);
        $(".chat-page .chat-user-ul .search-form-chat .saerch-formChat .saerch-inputChat").focus();
    });

    //  open chat delet drop down

    $(".chat-page .chat-body .chat-title .user-name .clean-chat .clean-chat-buttom i ").click(function (e2) {
        e2.preventDefault();
        e2.stopPropagation();
        $(".delete-box").toggleClass("open-drop");
    });

    //  massage ul-scrollTop
    $(".chat-page .chat-body .chat-ul-massage .ul-massage").scrollTop($(document).height());

    //  open pop up masseg

    $(".profile-pag .user-info .buttom-profile .pop-up-butoom a").click(function () {
        $(".massge-bootom").addClass("open-popUp");
        $("body").addClass("over-flow-body");
    });
    $(".exite-icon-popUP").click(function () {
        $(".massge-bootom").removeClass("open-popUp");
        $("body").removeClass("over-flow-body");
    });

    //  open drop down masseg

    $(".profile-pag .user-info .buttom-profile .drop-shere a").click(function (massege) {
        massege.preventDefault();
        massege.stopPropagation();
        $(".drop-masseg").toggleClass("open-drop");
    });

    //  open pop up

    $(".chat-page .chat-body .chat-title .user-name .open-chat-ul i").click(function () {
        $(".chat-page .chat-user-ul").show();
    });
    $(".chat-page .chat-user-ul .box-title .exite-icon-massage i").click(function () {
        $(".chat-page .chat-user-ul").hide();
    });

    //  price display
    $(".add-ad-ditalis-contant .form-content .box-ditalis .radio-buttom").click(function () {
        if ($(this).attr("id") == "dispaly-b") {
            $("#price-display").show();
        }
        if ($(this).attr("id") == "dispaly-n") {
            $("#price-display").hide();
        }
    });

    $(".slider-top").slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        rtl: dir_lang,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $(".right-arrow"),
        nextArrow: $(".left-arrow"),
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                },
            },
        ],
    });

    // show password
    $(".toggle-password").click(function () {
        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });
});
