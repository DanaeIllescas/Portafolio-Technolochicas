// alert("Hola Mundo! 7u7");

let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

// Usar el punto es para llamar a una propiedad o a una acción del objeto.
// Acciones se distinguen por los paréntesis ()
typewriter
  .pauseFor(2500)
  .typeString('Danae Illescas')
  .pauseFor(300)
  .deleteAll()
  .typeString('Desarrolladora Web Jr')
  .deleteAll()
  .pauseFor(1000)
  .typeString('Analista de Ciberseguridad Jr')
  .start();



let frase = document.getElementById('frase');

let typewriterFrase = new Typewriter(frase, {
loop: true,
delay: 75,
});
  
  // Usar el punto es para llamar a una propiedad o a una acción del objeto.
  // Acciones se distinguen por los paréntesis ()
  typewriterFrase
    .pauseFor(2500)
    .typeString('El homo sapiens está en proceso de ser desplazado por el homo videns, un animal fabricado por la televisión cuya mente ya no es conformada por conceptos, por elaboraciones mentales, sino por imágenes.')
    .pauseFor(300)
    .deleteAll()
    .typeString('Giovanni Sartori')
    .pauseFor(1000)
    .start();
    
//ANIMACIÓN DE LAS NUBES
document.addEventListener('DOMContentLoaded', () => {
  const nubes = document.querySelectorAll('.nube');
  const seccionPresentacion = document.getElementById('presentacion');
  const seccionContacto = document.getElementById('contacto');
  
  // Obtener los límites de la página visible
  const limiteSuperior = seccionPresentacion.offsetTop;
  const limiteInferior = document.body.scrollHeight - window.innerHeight + seccionContacto.offsetHeight;
  
  nubes.forEach(nube => {
      // Posicionar las nubes inicialmente en lugares aleatorios entre limiteSuperior y limiteInferior
      const randomY = Math.random() * (limiteInferior - limiteSuperior) + limiteSuperior;
      nube.style.top = `${randomY}px`;

      animateNube(nube, limiteInferior);
  });
});

function animateNube(nube, limiteInferior) {
  const velocidad = Math.random() * 20 + 10; // Velocidad aleatoria entre 10 y 30 segundos
  const initialX = -nube.offsetWidth; // Empieza fuera de la pantalla a la izquierda
  const endX = window.innerWidth; // Termina fuera de la pantalla a la derecha

  function moveRight() {
      nube.style.transform = `translateX(${initialX}px)`;
      nube.style.transition = `transform ${velocidad}s linear`;
      requestAnimationFrame(() => {
          nube.style.transform = `translateX(${endX}px)`;
      });

      nube.addEventListener('transitionend', moveLeft, { once: true });
  }

  function moveLeft() {
      nube.style.transform = `translateX(${endX}px)`;
      nube.style.transition = `transform ${velocidad}s linear`;
      requestAnimationFrame(() => {
          nube.style.transform = `translateX(${initialX}px)`;
      });

      nube.addEventListener('transitionend', moveRight, { once: true });
  }

  // Asegurarse de que las nubes no salgan del área visible del footer
  function checkBounds() {
      const rect = nube.getBoundingClientRect();
      if (rect.bottom > limiteInferior) {
          nube.style.top = `${limiteInferior - nube.offsetHeight}px`;
      }
  }

  moveRight();
  checkBounds();
}