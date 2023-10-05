$(function () {
  var pagetop = $('.to_top');
  // ボタン非表示
  pagetop.hide();
  // 100pxスクロールしたらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    }
    else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 800);
  });
});