var btnEncrypt = document.querySelector(".btn-encrypt");
var btnDescrypt = document.querySelector(".btn-descrypt");
var btnCopy = document.querySelector(".btn-copy");
var munieco = document.querySelector(".container-munieco");
var h3 = document.querySelector(".section-result-h3");
var parrafo = document.querySelector(".section-result-parrafo");
var resultado = document.querySelector(".section-result-text");


btnEncrypt.onclick = encriptar;
btnDescrypt.onclick = desencriptar;


function recuperarTexto() {
	var area = document.querySelector(".section-input-area");
	return area.value;
}

function encriptar() {
	ocultarAdelante();
	var area = recuperarTexto();
	resultado.textContent = encriptarTexto(area);
}

function desencriptar() {
	ocultarAdelante();
	var area = recuperarTexto();
	resultado.textContent = desencriptarTexto(area);
}

function ocultarAdelante() {
	munieco.classList.add("ocultar");
	h3.classList.add("ocultar");
	parrafo.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
	var texto = mensaje;
	var textoFinal = "";

	for (var i = 0; i < texto.length; i++) {
		if (texto[i] == "a") {
			textoFinal = textoFinal + "ai"
		}
		else if (texto[i] == "e") {
			textoFinal = textoFinal + "enter"
		}
		else if (texto[i] == "i") {
			textoFinal = textoFinal + "imes"
		}
		else if (texto[i] == "o") {
			textoFinal = textoFinal + "ober"
		}
		else if (texto[i] == "u") {
			textoFinal = textoFinal + "ufat"
		}

		else {
			textoFinal = textoFinal + texto[i];
		}
	}

	return textoFinal;
}

function desencriptarTexto(mensaje) {
	var texto = mensaje;
	var textoFinal = "";

	for (var i = 0; i < texto.length; i++) {
		if (texto[i] == "a") {
			textoFinal = textoFinal + "a"
			i = i+1
		}
		else if (texto[i] == "e") {
			textoFinal = textoFinal + "e"
			i = i+4
		}
		else if (texto[i] == "i") {
			textoFinal = textoFinal + "i"
			i = i+3
		}
		else if (texto[i] == "o") {
			textoFinal = textoFinal + "o"
			i = i+3
		}
		else if (texto[i] == "u") {
			textoFinal = textoFinal + "u"
			i = i+3
		}

		else {
			textoFinal = textoFinal + texto[i];
		}
	}

	return textoFinal;
}

function copiar() {
	var contenido = document.querySelector(".section-result-text");
	contenido.select()
	navigator.clipboard.writeText(contenido.value);
}

btnCopy.onclick = copiar;


