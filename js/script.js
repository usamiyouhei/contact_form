$(function () {
  $(".js-hamburger,.js-drawer").click(function () {
    $(".js-hamburger").toggleClass("is-active");
    $(".js-drawer").fadeToggle();
  });

  // ヘッダーの高さ分だけコンテンツを下げる
  $(function () {
    const height = $(".js-header").height();
    $("main").css("margin-top", height);
  });

  $(function () {
    const headerHeight = $(".js-header").height();
    $('a[href^="#"]').click(function () {
      const speed = 600;
      let href = $(this).attr("href");
      let target = $(href == "#" || href == "" ? "html" : href);

      let position = target.offset().top - headerHeight;
      $("body,html").animate({ scrollTop: position }, speed, "swing");
      return false;
    });
  });
});

const params = new URLSearchParams(window.location.search);

document.getElementById("confirm-name").textContent = params.get("name");
document.getElementById("confirm-mail").textContent = params.get("mail");
document.getElementById("confirm-tel").textContent = params.get("tel");
document.getElementById("confirm-address").textContent = params.get("contents");
document.getElementById("confirm-type").textContent = params.get("inquiryType");
document.getElementById("confirm-quantity").textContent =
  params.get("quantity");
document.getElementById("confirm-wrap").textContent = params.get("wrap");
document.getElementById("confirm-message").textContent = params.get("message");
