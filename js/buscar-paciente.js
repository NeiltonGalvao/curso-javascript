var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
	console.log("Buscando pacientes");
	
	var xhr = new XMLHttpRequest();

	xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

	xhr.addEventListener("load", function() {

		if (xhr.status == 200) {

		}else {
			console.log(xhr.status);
			console.log(xhr.responseText);
			var erroAjax = document.querySelector("#erro-ajax");
			erroAjax.classList.remove("invisivel")

		}

		var resposta = xhr.responseText;
		//console.log(resposta);
	
		var pacientes = JSON.parse(resposta);
		//console.log(pacientes)
		//console.log(typeof pacientes);

		pacientes.forEach(function (paciente) {
			adicionaPacienteNaTabela(paciente)

		});
		

	})

	xhr.send();


	
})