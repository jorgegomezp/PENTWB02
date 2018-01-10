(function(){
	// Variables
	var list = document.getElementById("list"),
		entradaTarea = document.getElementById("entradaTarea"),
		btnNuevaTarea = document.getElementById("btn-add");
 
	// Funciones
	var agregarTarea = function(){
		var tarea = entradaTarea.value,
			nuevaTarea = document.createElement("li"),
			enlace = document.createElement("a"),
			contenido = document.createTextNode(tarea);
 
		if (tarea === "") {
			entradaTarea.setAttribute("placeholder", "Agrega una tarea valida");
			entradaTarea.className = "error";
			return false;
		}
 
		// Agregamos el contenido al enlace
		enlace.appendChild(contenido);
		// Establecemos un atributo href
		enlace.setAttribute("href", "#");
		// Agrergamos el enlace (a) a la nueva tarea (li)
		nuevaTarea.appendChild(enlace);
		// Agregamos la nueva tarea a la list
		list.appendChild(nuevaTarea);
 
		entradaTarea.value = "";
 
		for (var i = 0; i <= list.children.length -1; i++) {
			list.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
		}
 
	};
	var comprobarInput = function(){
		entradaTarea.className = "";
		teareaInput.setAttribute("placeholder", "Agrega tu tarea");
	};
 
	var eleminarTarea = function(){
		this.parentNode.removeChild(this);
	};
 
	// Evento
 
	// + Tarea
	btnNuevaTarea.addEventListener("click", agregarTarea);
 
	// Revisar Input
	tareaInput.addEventListener("click", comprobarInput);
 
	// Borrar list
	for (var i = 0; i <= list.children.length -1; i++) {
		list.children[i].addEventListener("click", eleminarTarea);
	}
}());