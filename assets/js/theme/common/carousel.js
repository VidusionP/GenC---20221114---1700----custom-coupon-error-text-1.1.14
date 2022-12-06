import 'slick-carousel';

export default function () {
    const $carousel = $('[data-slick]');
    const $brand = $('.brand-list');

    if ($carousel.length) {
        // papathemes-beautify: improve accessibility
        $carousel.on('init afterChange', (event, slick) => {
            const $slider = slick.$list.find('.slick-slide');
            $slider.not('.slick-active').find('a, button').attr('tabindex', '-1');
            $slider.filter('.slick-active').find('a, button').attr('tabindex', '0');
            $('.brand-list .slick-list').addClass('brand-banner-list')
            $('.brand-list .slick-track').addClass('brand-banner-track')
            $('.brand-list .slick-prev').addClass('brand-prev')
            $('.brand-list .slick-next').addClass('brand-next')
            $('.home-list .slick-prev').addClass('home-prev')
            $('.home-list .slick-next').addClass('home-next')
        });

        $carousel.slick();
        $('.brand-list .slick-list').addClass('brand-banner-list')
        $('.brand-list .slick-track').addClass('brand-banner-track')
        $('.brand-list .slick-prev').addClass('brand-prev')
        $('.brand-list .slick-next').addClass('brand-next')
        $('.home-list .slick-prev').addClass('home-prev')
        $('.home-list .slick-next').addClass('home-next')
        $('.home-list .slick-track').addClass('home-banner-track')
    }


    // Supermarket theme MOD: doesn't need below script
    // // Alternative image styling for IE, which doesn't support objectfit
    // if (typeof document.documentElement.style.objectFit === 'undefined') {
    //     $('.heroCarousel-slide').each((index, element) => {
    //         const $container = $(element);
    //         const imgUrl = $container.find('img').data('lazy');

    //         if (imgUrl) {
    //             $container.css('backgroundImage', `url(${imgUrl})`).addClass('compat-object-fit');
    //         }
    //     });
    // }
}
