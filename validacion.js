const inputName = document.querySelector('#nombre')
const labelName = document.querySelector('label[for="nombre"]')

function isEmpty(element) {
  if (!element.value) {
    const error = document.createElement('p')
    error.classList.add('error')
    error.textContent = 'agrege su nombre'
    labelName.insertAdjacentElement('afterend', error)
    return true
  }

  return false
}

inputName.addEventListener('input', () => {
  if (parseInt(inputName.attributes.maxlength.value) === inputName.value.length) {
    const error = document.createElement('p')
    error.classList.add('error')
    error.textContent = 'longitud maxima'
    
    labelName.style.color = 'red'
    inputName.style.borderBottom = '2px solid red'
    labelName.insertAdjacentElement('afterend', error)
  } else {
    const error = document.querySelector('.error')
    error.remove()
    labelName.style.color = 'var(--cor-de-btn)'
    inputName.style.borderBottom = '2px solid var(--cor-de-btn)'
  }
})

let vacio = isEmpty(inputName)