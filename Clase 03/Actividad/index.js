const agregarTarea = document.querySelector('[data-agregar]');
const input = document.querySelector('[data-input]');
const ul = document.querySelector('[data-ul]');
const tareaCompletada = document.querySelector("[data-completo]");
const tareaPendiente = document.querySelector("[data-pendiente]");
const listadoTareas = document.querySelector("[data-conclision]");

const marcarCompletada = (tarea) => tarea.classList.toggle("completed");


agregarTarea.addEventListener("click", e => {
    const agregarNuevaTarea = input.value.trim();

    if (agregarNuevaTarea !== "") {
        const nuevaTarea = document.createElement("li");
        nuevaTarea.classList.add('tarea');
        nuevaTarea.textContent = agregarNuevaTarea;

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.classList.add('btn');
        btnEliminar.classList.add('btn-danger');

        btnEliminar.addEventListener("click", () => ul.removeChild(nuevaTarea));

        const check = document.createElement("input");
        check.classList.add("completar__tarea");
        check.type="checkbox";

        check.addEventListener("click", () => {
            marcarCompletada(nuevaTarea);
          });

        ul.appendChild(nuevaTarea);
        nuevaTarea.appendChild(check);
        nuevaTarea.appendChild(btnEliminar);
        input.value = "";
    }

});


const inputCheck = document.querySelectorAll("input")

inputCheck.forEach((checkbox) => {
    checkbox.addEventListener("click", e => {
      const li = e.target.closest("li");
      if (li) {
        marcarCompletada(li);
      }
    });
  });


tareaCompletada.addEventListener("click", () => {
    listadoTareas.innerHTML = ""; 
    
    const tareasCompletadas = document.querySelectorAll("li.completed");

    if (tareasCompletadas.length > 0) {
        tareasCompletadas.forEach((tarea) => {

        const esCompletada = tarea.classList.contains("completed");

        if (esCompletada) {
            const botonEliminar = tarea.querySelector("button");
            if (botonEliminar) {
                botonEliminar.style.display = "none";
            }
        } else {
            tarea.style.display = "none";
        }

            listadoTareas.appendChild(tarea.cloneNode(true));
        });
    } else {
        listadoTareas.textContent = "No hay tareas completadas.";
    }

    listadoTareas.style.display = "block";
});

tareaPendiente.addEventListener("click", () => {
    listadoTareas.innerHTML = ""; 
    
    const tareasPendientes = document.querySelectorAll("li:not(.completed)");

    if (tareasPendientes.length > 0) {
        tareasPendientes.forEach((tarea) => {
            listadoTareas.appendChild(tarea.cloneNode(true));
        });
    } else {
        listadoTareas.textContent = "No hay tareas pendientes.";
    }

    listadoTareas.style.display = "block";
});

