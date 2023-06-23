import Swiper, { Pagination } from 'swiper'

Swiper.use([ Pagination ])

if(window.innerWidth <= 768) {
    const pagenavSlider = new Swiper('.page-nav-slider', {
        slidesPerView: 'auto',
    })
}

console.log(window.innerWidth)
if(window.innerWidth <= 440) {
    const pricePlansSlider = new Swiper('.price-plans-slider', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        autoHeight: true
    })
}

if(window.innerWidth <= 375) {
    const brandsSlider = new Swiper('.brands-slider', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    })

    const techTypesSlider = new Swiper('.tech-types-slider', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    })
}