const formulario = document.getElementById("formContacto");
const mensajeEstado = document.getElementById("mensajeEstado");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

  if (nombre === "" || correo === "" || mensaje === "") {
    mensajeEstado.textContent = "Por favor completa todos los campos.";
    mensajeEstado.className = "mensaje-estado error";
    return;
  }

  if (!correoValido) {
    mensajeEstado.textContent = "Ingresa un correo electrónico válido.";
    mensajeEstado.className = "mensaje-estado error";
    return;
  }

  mensajeEstado.textContent = "¡Gracias " + nombre + "! Tu mensaje fue enviado correctamente.";
  mensajeEstado.className = "mensaje-estado exito";
  formulario.reset();
});
