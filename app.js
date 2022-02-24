const body = document.querySelector('.body')

const toggle = document.querySelector('.toggle')

const BTswitch = document.querySelector('.switch')

toggle.addEventListener('change', function () {
  body.classList.toggle('light')
  BTswitch.classList.toggle('light')
})
