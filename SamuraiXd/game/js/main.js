const serve = document.querySelector('.open')
let click = document.querySelector('.rule-game')

serve.addEventListener('click', function () {
  if (!click.dataset.clicked) {
    click.setAttribute('data-clicked', 'true')

    click.style.display = 'block'
    serve.innerHTML = '<p>▲</p>'
  } else {
    click.removeAttribute('data-clicked')
    click.removeAttribute('style')
    serve.innerHTML = '<p>▼</P>'
  }
})
