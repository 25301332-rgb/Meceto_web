document.addEventListener('DOMContentLoaded', () => {
const imagenesZoom = document.querySelectorAll('.zoom-img, [id^="miImagen"]');
  imagenesZoom.forEach(img => {    img.addEventListener('click', () => {
     img.classList.toggle('zoomed');
    });
  });

  const formContacto = document.getElementById('formContacto');
  const respuesta = document.getElementById('respuesta');

  if (formContacto && respuesta) {
    formContacto.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const nombre = document.getElementById('nombre')?.value.trim();
      const email = document.getElementById('email')?.value.trim();
      const mensaje = document.getElementById('mensaje')?.value.trim();

      if (!nombre || !email || !mensaje) {
        respuesta.className = 'alerta';
        respuesta.innerHTML = 'completa todos los campos del formulario.';
        return;
      }

      respuesta.className = 'alert alert-success mt-3';
      respuesta.innerHTML = `Gracias, <strong>${nombre}</strong> Tu mensaje ha sido enviado exitosamente nos pondremos en contacto contigo  <em>${email}</em>.`;
      formContacto.reset();
    });
  }
});