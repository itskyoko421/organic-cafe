
$(function () {
    /*=================================================
    ヘッダー
    ===================================================*/
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 500) {
        $('.sticky-header').addClass('show');
        } else {
        $('.sticky-header').removeClass('show');
        }
    });
});


$(function () {
    /*=================================================
    スムーススクロール
    ===================================================*/
    $('a[href^="#"]').click(function () {
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? "html" : href);
        let position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, 600, "swing");
        return false; 
    });
});


$(function () {
    /*=================================================
    ハンバーガ―メニュー
    ===================================================*/
    $(".hamburger").on("click", function () {
    $(".header-hbg").toggleClass("open");
    });
    // メニューのリンクをクリックした時
    $("#navi a").on("click", function () {
    $(".header-hbg").toggleClass("open");
    });
});

