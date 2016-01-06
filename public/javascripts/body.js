/**
 * Created by jiawei.tu on 1/6 0006.
 */
$(function() {
    $('ul.nav > li').click(function (e) {
        e.preventDefault();
        $('ul.nav > li').removeClass('active');
        $(this).addClass('active');
    });
});