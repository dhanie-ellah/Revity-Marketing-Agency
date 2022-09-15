let menuIcon = document.getElementById('menuIcon')
let closeIcon = document.getElementById('closeIcon')
let links = document.getElementById('links')

menuIcon.addEventListener('click', () => {
     closeIcon.style.display = 'block'
     links.style.display = 'block'
     menuIcon.style.display= 'none'
})

closeIcon.addEventListener('click', () => {
     links.style.display = 'none'
     closeIcon.style.display = 'none'
     menuIcon.style.display= 'block'
})

// const leftBtn = document.querySelector('.fa-angle-left')
// const rightBtn = document.querySelector('.fa-angle-right')
// const cards = document.querySelectorAll('.content')
// let i = 0

// function show (j) {
//      i += j;
//      i = Math.min(Math.max(i,0), cards.length--);
//      cards[i].scrollIntoView({ behavior: 'smooth' });
// }

// leftBtn.addEventListener('click', () => {
//      for (let i = 0; i < cards.length; i++) {
//           const card = array[i];
//           card--
//           if (counter < 0) {
//                counter = cards.length -1
//           }
//      }
// })
// rightBtn.addEventListener('click', () => {
//      for (let i = 0; i < cards.length; i++) {
//           const card = array[i];
//           card++
//           if (counter > cards.length) {
//                counter = 0
//           }
//      }
// })

// rightBtn.addEventListener('click', () => {
//      counter++
//      if (counter > cards.length) {
//           counter = 0
//      }
// })

// leftBtn.addEventListener('click', () => {
//      counter--
//      if (counter < 0) {
//           counter = cards.length - 1
//      }
// })