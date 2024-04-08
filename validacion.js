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
    if (error) {
      error.remove()
      labelName.style.color = 'var(--cor-de-btn)'
      inputName.style.borderBottom = '2px solid var(--cor-de-btn)'
      inputName.addEventListener('focus', function() {
        // Cuando el input tiene focus, agrega los estilos deseados
        labelName.style.color = 'var(--cor-de-btn)'
        inputName.style.borderBottom = '2px solid var(--cor-de-btn)'
      });
      
      // Agrega otro event listener para el evento 'blur'
      inputName.addEventListener('blur', function() {
        // Cuando el input pierde el focus, remueve los estilos
        labelName.style.color = '#4b4a4ad9'
        inputName.style.borderBottom = '2px solid #4b4a4ad9'
      });
    }
  }
})

let vacio = isEmpty(inputName)