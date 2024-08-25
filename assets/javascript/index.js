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
    var itemWidth = $items.outerWidth(true); // Largura dos itens
    var itemCount = $items.length;
    var totalWidth; // Largura total do carousel
    var visibleItems = 3; // Número de itens visíveis
    var carouselInterval;
    var intervalTime = 2000; // Tempo entre as transições (em milissegundos)
    var currentPosition = 0;

    function setupCarousel() {
        // Ajustar a largura do contêiner
        // itemWidth = $items.outerWidth(true);
        itemCount = $items.length;
        // totalWidth = itemWidth * itemCount;

        // Definir a largura total do contêiner para permitir o loop contínuo
        $carouselItems.width(totalWidth * 2); // Largura é o dobro para o efeito de loop contínuo
        $carouselItems.css("transform", "translateX(0)");

        // Duplicar os itens para o efeito de rotação contínua
        $carouselItems.append($items.clone());
    }

    function moveCarousel() {
        currentPosition -= itemWidth;
        if (Math.abs(currentPosition) >= totalWidth) {
            currentPosition = 0; // Reinicia a posição
            $carouselItems.css("transition", "none");
            $carouselItems.css("transform", "translateX(" + currentPosition + "px)");
            setTimeout(function () {
                $carouselItems.css("transition", "transform 0.5s ease-in-out");
            }, 50);
        } else {
            $carouselItems.css("transform", "translateX(" + currentPosition + "px)");
        }
    }

    function startAutoSlide() {
        carouselInterval = setInterval(moveCarousel, intervalTime); // Move para frente a cada intervalo
    }

    function stopAutoSlide() {
        clearInterval(carouselInterval);
    }

    setupCarousel();
    startAutoSlide();

    $(window).resize(function () {
        setupCarousel(); // Ajusta o tamanho e reinicia o carousel
    });

    $(".carousel").hover(stopAutoSlide, startAutoSlide);
});




