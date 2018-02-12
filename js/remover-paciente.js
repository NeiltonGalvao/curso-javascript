var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
	event.target.parentNode.classList.add("fadeOut");

	var alvoEvento = event.target;
	var paiDoAlvo = alvoEvento.parentNode;  
	
	setTimeout(function() {
		paiDoAlvo.remove();
	}, 500);
})


// codigo abaixo nao permite remoção de pacientes adicionados em tempo execução
//pacientes.forEach(function(paciente){
//	paciente.addEventListener("dblclick", function(){
//		console.log("Duplo clique");
//		this.remove();
//	});
//});