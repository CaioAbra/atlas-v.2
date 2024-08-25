$('.accordion-header').click(function () {
    const target = $(this).data('target');
    const $body = $(target);
    const $header = $(this);
    const arrowDown = `-`;
    const arrowUp = `+`;

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

//carousel
$(document).ready(function () {
    var $carouselItems = $(".carousel-items");
    var $items = $(".carousel-items .item");
    var itemWidth;
    var itemCount = $items.length;
    var visibleItems;
    var currentPosition = 0;
    var intervalTime = 2000; // Tempo entre as transições (em milissegundos)
    var carouselInterval;

    function setupCarousel() {
        $items = $(".carousel-items .item");
        itemCount = $items.length;
        itemWidth = $items.outerWidth(true);

        if (window.innerWidth < 768) {
            visibleItems = 1;
        } else if (window.innerWidth < 992) {
            visibleItems = 2;
        } else {
            visibleItems = 3;
        }

        $carouselItems.css({
            "transition": "none",
            "transform": "translateX(0px)"
        });

        currentPosition = 0;
    }

    function moveCarousel() {
        currentPosition -= itemWidth;
        $carouselItems.css("transition", "transform 0.5s ease-in-out");
        $carouselItems.css("transform", "translateX(" + currentPosition + "px)");

        if (Math.abs(currentPosition) >= itemWidth) {
            // Após a animação, move o primeiro item para o final da lista e reajusta a posição
            setTimeout(function () {
                $carouselItems.css("transition", "none");
                $carouselItems.append($items.first()); // Move o primeiro item para o final
                $carouselItems.css("transform", "translateX(0px)");
                currentPosition = 0;
                $items = $(".carousel-items .item"); // Atualiza a lista de itens
            }, 500); // 500ms para sincronizar com a duração da animação
        }
    }

    function startAutoSlide() {
        carouselInterval = setInterval(moveCarousel, intervalTime);
    }

    function stopAutoSlide() {
        clearInterval(carouselInterval);
    }

    setupCarousel();
    startAutoSlide();

    $(window).resize(function () {
        setupCarousel(); // Ajusta o tamanho e reinicia o carousel ao redimensionar a janela
    });

    $(".carousel").hover(stopAutoSlide, startAutoSlide); // Pausa o movimento ao passar o mouse sobre o carousel
});
