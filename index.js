window.onload=inicio;
	
function inicio(){
		document.querySelector("button").onclick=lista;
		document.querySelector("#datos").onkeydown=teclado;
	}
function teclado(parametro){
	let codigoDeTecla=parametro.keyCode;
	if (codigoDeTecla==13){
		lista();
	}
}
function lista(){
	let nombre=document.querySelector("#datos").value.trim();
	let nombre_mejorado=(nombre.substr(0,1)).toUpperCase()+(nombre.substr(1)).toLowerCase();
	if (nombre.length>0){
		document.querySelector("#parraf_datos").insertAdjacentHTML('beforeend',`<p>${nombre_mejorado}</p>`);	
		}
	document.querySelector("#datos").focus();
	document.querySelector("#datos").value="";		
}