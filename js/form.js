var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event) {
		event.preventDefault();

		var form = document.querySelector("#form-adiciona");

		// Extraindo informaçcacoes do paciente do form
		var paciente = obtemPacienteDoFormulario(form);

		console.log(paciente);



		var erro = validaPaciente(paciente);

		if (erro.length > 0) {
			exibeMensagensDeErro(erro);
			return;		
		}

		adicionaPacienteNaTabela(paciente)

		form.reset();

		var mensagensErro = document.querySelector("#mensagens-erro");
		mensagensErro.innerHTML = '';

})


function adicionaPacienteNaTabela(paciente) {
		// cria a tr e a td do paciente
		var pacienteTr = montaTr(paciente);

		// adicionando o paciente na tabela		
		var tabela = document.querySelector("#tabela-pacientes");		

		tabela.appendChild(pacienteTr);		

}




function obtemPacienteDoFormulario(form){
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura : form.gordura.value,
		imc : calculaImc(form.peso.value, form.altura.value)
	}

	return paciente;
}

function montaTr(paciente){
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");

	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

	return pacienteTr;

}

function montaTd(dado, classe){
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);

	return td;

}

function validaPaciente(paciente){
	var erros = [];

	if(!validaPeso(paciente.peso)) erros.push("Peso é inválido!");
	
	if (!validaAltura(paciente.altura)) erros.push("Altura é inválida!");
	
	if (!validaNome(paciente.nome)) erros.push("Nome inválido!");

	return erros;

}

function exibeMensagensDeErro(erros) {

	var ul = document.querySelector("#mensagens-erro")

	ul.innerHTML = "";

	erros.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});


}

