const borrarElemento = (e) => {
  e.preventDefault();
  const li = e.target.parentElement;
  li.remove();
};

const agregarTarea = (e) => {
  e.preventDefault();
  console.log("agregar tarea");

  const inputTarea = document.getElementById("tareaInput").value;

  const lista = document.querySelector(".list-group");
  const li = document.createElement("li");
  li.textContent = inputTarea;
  li.classList.add("list-group-item");

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";
  btnEliminar.classList.add("btn", "btn-outline-danger", "ms-2");
  btnEliminar.addEventListener("click", borrarElemento);

  li.appendChild(btnEliminar);
  lista.appendChild(li);

  formularioTarea.reset();
};

const formularioTarea = document.getElementById("tareaForm");
formularioTarea.addEventListener("submit", agregarTarea);
