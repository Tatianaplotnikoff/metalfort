$(document).ready(() => {

    const slides = $('li.slide');
    const slidesPoints = $('div.pag-button');

    let counter = 1;
    let previousIndex;

    setInterval(() => {
        if (counter == slides.length) {
            counter = 0;
        }
        previousIndex = counter == 0 ? slides.length - 1 : counter - 1;
        $(slides[counter]).addClass('showing');
        $(slidesPoints[counter]).addClass('pag-button-active');
        $(slides[previousIndex]).removeClass('showing');
        $(slidesPoints[previousIndex]).removeClass('pag-button-active');

        counter += 1;
    }, 7000);

}); 