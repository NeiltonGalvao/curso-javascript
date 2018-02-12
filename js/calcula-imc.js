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

	var pesoEhValido =  validaPeso(peso);
	var alturaEhValida = validaAltura(altura);

	if (!pesoEhValido) {
	    console.log("Peso inválido");
	   // pesoEhValido = false;
	    tdImc.textContent = "Peso inválido!";
	    //paciente.style.backgroundColor = "orange";
	    paciente.classList.add("paciente-invalido");	    
	}

	if (!alturaEhValida) {
	    console.log("Altura inválida");
	   // alturaEhValida = false;
	    tdImc.textContent = "Altura inválida!";
	//	paciente.style.backgroundColor = "lightcoral";	    
		paciente.classList.add("paciente-invalido");
	    
	}

	//if (alturaEhValida && pesoEhValido) {
	//	var imc = calculaImc(peso, altura);  

	//	tdImc.textContent = imc;	
	//}

	

}


function calculaImc(peso,altura) {
	var imc = 0;

	imc = peso / (altura * altura);
	return imc.toFixed(2);
}

	

titulo.addEventListener("click", mostraMensagem);

function mostraMensagem() {
	console.log("Olá, fui clicado!");
}

function validaPeso(peso) {
	if (peso >= 0 && peso < 1000) {
		return true;
	}
	else {
		return false;
	}
}

function validaAltura(altura){
	if (altura >=0  && altura <= 3.0) {
		return true;
	}
	else {
		return false;
	}
}

function validaNome(nome){
	return	nome.length > 0;
}
