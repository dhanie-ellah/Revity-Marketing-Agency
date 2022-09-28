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
     menuIcon.style.display = 'block'
})

const pricing = document.querySelectorAll('.pricing')
const closePricing = document.querySelectorAll('.close-pricing')
const modal = document.querySelectorAll('.modal')

pricing.forEach(price => {
     price.addEventListener('click', () => {
          modal.forEach(individualModal => {
               individualModal.style.display = 'flex'
          })
     })
})

closePricing.forEach(close => {
     close.addEventListener('click', () => {
          modal.forEach(individualModal => {
               individualModal.style.display = 'none'
          })
     })
})