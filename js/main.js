$(document).ready(function(){
    $('.nav_menu').click(function(){
        $('.menu_link').addClass('active')
    })
    $('.btn-close').click(function(){
        $('.menu_link').removeClass('active')
    })
})
