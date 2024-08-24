const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navBar = document.getElementById('nav'); // Seleciona o elemento <nav>

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
    navBar.classList.toggle('active'); // Usa vanilla JavaScript para adicionar/remover a classe 'active'
});

$('.accordion-header').click(function () {
    const target = $(this).data('target');
    const $body = $(target);
    const $header = $(this);
    const arrowDown = `<img src="./src/img/VectorSetaUp.svg" alt="">`;
    const arrowUp = `<img src="./src/img/VectorSetaDown.svg" alt="">`;

    if ($body.hasClass('open')) {
        $body.slideUp(300, function () {
            $body.removeClass('open');
            $header.removeClass('open');
            $header.find('.icon').html(arrowUp);
        });
    } else {
        $('.accordion-body').slideUp(300).removeClass('open');
        $('.accordion-header').removeClass('open');
        $('.accordion-header .icon').html(arrowUp);

        $body.slideDown(300, function () {
            $body.addClass('open');
            $header.addClass('open');
            $header.find('.icon').html(arrowDown);
        });
    }
});
