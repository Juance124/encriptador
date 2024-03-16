var botone = document.querySelector(".btn-en");
var botond = document.querySelector(".btn-de");
var mune = document.querySelector(".dibujo");
var txt = document.querySelector(".parrafo");
var final = document.querySelector(".resultado");

botone.onclick = encriptar;
botond.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var txt1 = recuperarTexto()
    resultado.textContent = encriptarTexto(txt1);
}

function desencriptar(){
    ocultarAdelante();
    var txt1 = recuperarTexto()
   final.textContent = desencriptarTexto(txt1);
}

function recuperarTexto(){
    var txt1 = document.querySelector(".txt1")
    return txt1.value
}

function ocultarAdelante(){
    mune.classList.add("ocultar");
    txt.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}

const btnCopiar = document.querySelector(".btnc"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola");
})
