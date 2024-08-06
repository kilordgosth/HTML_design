'use strict';

const lis = document.querySelectorAll('.li');
const bloques = document.querySelectorAll('.bloque');

// Función para mostrar el elemento seleccionado
function mostrarElemento(index) {
  // Elimina la clase 'activo' de todos los elementos
  lis.forEach(li => li.classList.remove('activo'));
  bloques.forEach(bloque => bloque.classList.remove('activo'));

  // Agrega la clase 'activo' al elemento seleccionado
  lis[index].classList.add('activo');
  bloques[index].classList.add('activo');
}

// Agrega un evento de clic a cada elemento li
lis.forEach((li, index) => {
  li.addEventListener('click', () => {
    mostrarElemento(index);
  });
});
