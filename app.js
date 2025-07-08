const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

const container = document.querySelector('.content_cards')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')

const scrollAmount = 330;

prevBtn.addEventListener('click', ()=> {
    container.scrollBy({left: -scrollAmount, behavior: 'smooth'})
});

nextBtn.addEventListener('click', ()=> {
    container.scrollBy({left: scrollAmount, behavior: 'smooth'})
});

document.addEventListener("DOMContentLoaded", function(){
    const cards = document.querySelectorAll(".content_cards-card");
    cards.forEach(function(card) {
        card.classList.add("slideIntro");
    });
});

let slideIndex = 1;
if (window.innerWidth <= 768) {
    showSlides(slideIndex);
}

function plusSlides(n) {
    if (window.innerWidth <= 768) {
      showSlides(slideIndex += n);
    }
}
  
  function currentSlide(n) {
    if (window.innerWidth <= 768) {
      showSlides(slideIndex = n);
    }
}
function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("member_card");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

window.addEventListener("resize", () => {
    const slides = document.getElementsByClassName("member_card");
    if (window.innerWidth > 768) {
      for (let slide of slides) {
        slide.style.display = "block";
      }
    } else {
      showSlides(slideIndex);
    }
  });
  