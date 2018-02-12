var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutrição";



var pacientes = document.querySelectorAll(".paciente");

for (var i=0; i < pacientes.length; i++) {
	//	console.log(pacientes);

	var paciente = pacientes[i]
			
	var tdPeso = paciente.querySelector(".info-peso");

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var peso = tdPeso.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var pesoEhValido = true;
	var alturaEhValida = true;

	if (peso <= 0 || peso >= 1000) {
	    console.log("Peso inválido");
	    pesoEhValido = false;
	    tdImc.textContent = "Peso inválido!";
	    //paciente.style.backgroundColor = "orange";
	    paciente.classList.add("paciente-invalido");	    
	}

	if (altura <= 0 || altura >= 3.00) {
	    console.log("Altura inválida");
	    alturaEhValida = false;
	    tdImc.textContent = "Altura inválida!";
	//	paciente.style.backgroundColor = "lightcoral";	    
		paciente.classList.add("paciente-invalido");
	    
	}

	if (alturaEhValida && pesoEhValido) {
		var imc = peso / (altura * altura);  

		tdImc.textContent = imc.toFixed(2);	
	}

	

}


	

titulo.addEventListener("click", mostraMensagem);

function mostraMensagem() {
	console.log("Olá, fui clicado!");
}