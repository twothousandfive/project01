// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("header").style.height = "50px";
//   } else {
//     document.getElementById("header").style.height = "65px";
//   }
// }

const banner = document.querySelector('.banner-2');
const slides = banner.querySelectorAll('div');
let currentIndex = 0;

function scrollToNextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
        banner.scrollTo({
            left: 0,
            behavior: 'smooth'
        });
    } else {
        banner.scrollTo({
            left: slides[currentIndex].offsetLeft,
            behavior: 'smooth'
        });
    }
}

setInterval(scrollToNextSlide, 2000);

function discountAll() {
  const discountContainer = document.querySelector('.discount');
  discountContainer.classList.toggle('discount-all');
}

document.body.onload = function() {
    setTimeout(function() {
        var preloader = document.getElementById('page-preloader');
        if( !preloader.classList.contains('done')){
            preloader.classList.add('done');
        }
    }, 1000)
}