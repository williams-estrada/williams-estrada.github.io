const textoIngresado = document.querySelector(".texto-ingresado");

const textoCopiado = document.querySelector(".texto-copiado");

var muneco = document.querySelector(".contenedor-imagen");

var textoMuneco = document.querySelector(".contenedor-texto")


//botones

function btnCodificar() {
    const textoCodificado = codificar(textoIngresado.value)
    textoCopiado.value = textoCodificado;
    textoIngresado.value = ""
}

function btnDescodificar() {
    const textoCodificado = decodificar(textoIngresado.value)
    textoCopiado.value = textoCodificado;
    textoIngresado.value = ""
}

//Codificador

function codificar(stringCodigo) {
    
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringCodigo = stringCodigo.toLowerCase();

    if(stringCodigo == ""){
        alert("Tu texto está vacio")
        document.getElementById("inicio").style.display = "";
        return "";
    }

    for(let i=0; i < codigo.length; i++){
        ocultar()
        if(stringCodigo.includes(codigo[i][0])){
            stringCodigo = stringCodigo.replaceAll(codigo[i][0],codigo[i][1])
        }
    }
    return stringCodigo;
}

//Decodificador

function decodificar(stringDecodificado) {
    ocultar()
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringDecodificado = stringDecodificado.toLowerCase();

    if(stringDecodificado == ""){
        alert("Tu texto está vacio")
        document.getElementById("inicio").style.display = "";
        return "";
    }

    for( let i=0; i < codigo.length; i++){
        if(stringDecodificado.includes(codigo[i][0])){
            stringDecodificado = stringDecodificado.replaceAll
            (codigo[i][1],codigo[i][0])
        }
    }
    return stringDecodificado;
}

// Ocultar

function ocultar(){
    muneco.classList.add("ocultar");
    textoMuneco.classList.add("ocultar");
}


//Copiar

function btnCopiar() {
    var copiado = document.getElementById("resultado");
    textoCopiado.select();
    document.execCommand('copy');
    // alert("Copiado")
    
    }

//Pegar

function btnPegar(){
  navigator.clipboard.readText()
  .then(txt => {
    document.getElementById("paste").value = txt;
  })
  .catch(err => {
    alert("Se necesita permiso para acceder al porta papeles");
  });
}

