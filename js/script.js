/*  window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
}) 
 */
$(document).ready(function(){
    // Modal
    $('.modal__close').on('click', function() {
        $('.overlay, #thanks, #order').fadeOut('slow');
    });

    $('.button_contact').on('click', function() {
        $('.overlay, #thanks').fadeIn('slow');
    });

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.price-block__name').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    });

    $('.button_submit').on('click', function() {
        $('#order').fadeOut('slow');
        $('#thanks').fadeIn('slow');
    });
})