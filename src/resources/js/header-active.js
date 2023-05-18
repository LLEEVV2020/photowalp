$('#header__menu ul li a').click(function () {
    $(this).addClass('is-active').siblings().removeClass('is-active');
});