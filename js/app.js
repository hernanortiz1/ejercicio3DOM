const agregarTarea = (e) => {
  e.preventDefault();
  console.log("agregar tarea");

  const inputTarea = document.getElementById("tareaInput").value;

  const lista = document.querySelector(".list-group");

  const li = document.createElement("li");
  li.textContent = inputTarea;
  li.classList.add("list-group-item");

  lista.appendChild(li);

  formularioTarea.reset();
};

const formularioTarea = document.getElementById("tareaForm");
formularioTarea.addEventListener("submit", agregarTarea);
