const El = document.querySelector('header')

// console.log(El);

window.addEventListener('scroll', function () {
  if (window.scrollY > 500) {
    El.style.display = 'none'
  } else {
    El.style.display = 'block'
  }
})



window.addEventListener('scroll', function () {
  if (window.scrollY > 500) {
    gsap.to(El, 0.4, {
      opacity: 0,
      display: 'none'
    });
  } else {
    gsap.to(El, 0.4, {
      opacity: 1,
      display: 'block'
    });
  }
})