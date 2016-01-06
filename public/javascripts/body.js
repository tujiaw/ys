/**
 * Created by jiawei.tu on 1/6 0006.
 */
$(function() {
    $('ul.nav > li').click(function (e) {
        //e.preventDefault();
        //$('ul.nav > li').removeClass('active');
        //$(this).addClass('active');

        window.location.href = $(this).children('a').attr('href');
    });


    $('ul.nav > li').removeClass('active');
    var activeTab = $('p.activeTab').html();
    $('ul.nav > li').each(function() {
        if ($(this).children('a').attr('href') == activeTab) {
            $(this).addClass('active');
        }
    });
});