//menu mobile
const hamburgerButton = document.querySelector("#hamburgerButton");
const closeButton = document.querySelector("#closeButton");
const mobileMenu = document.querySelector("#mobileMenu");

hamburgerButton.addEventListener("click", ()=> {
  mobileMenu.classList.add("flex");
});

closeButton.addEventListener("click", ()=> {
  mobileMenu.classList.remove("flex");
});

//Form
const form = document.querySelector("#form")
const emailInput = document.querySelector("#email")

form.addEventListener('submit',(e)=>{
  e.preventDefault()
  if(emailInput.value === '' || !validateEmail(emailInput.value)){
    document.querySelector('.error').style.display = 'block';
  } else {
    document.querySelector('.error').style.display = 'none';
  }
})

const validateEmail = (email)=>{
  const regex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  )
  if(regex.test(email)){
    return true
  } else{
    return false
  }
}

//Swiper JS config
var swiper = new Swiper(".swiper", {
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev", 
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        // when window width is >= 320px
        648: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        760: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 640px
        1100: {
          slidesPerView: 3,
          spaceBetween: 40
        }
    }
});