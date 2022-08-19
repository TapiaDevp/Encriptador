/*
as "llaves" de encriptación que utilizaremos son las siguientes:

`La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"`
*/

const inputTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    inputTexto.value = "";
   // mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], 
                        ["i", "imes"], 
                        ["a", "ai"],     
                        ["o", "ober"],
                        ["u", "ufat"]];
    //Convertimos a minusculas
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        
        if(stringEncriptada.includes(matrizCodigo[i][0])){

            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],
            matrizCodigo[i][1])
            
        }
        
    }
    return stringEncriptada;
}
//Desincriptar
function btnDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value)
    mensaje.value = textoDesencriptado;
    inputTexto.value = "";
   // mensaje.style.backgroundImage = "none"
}

function desencriptar(stringDesincriptada){
    let matrizCodigo = [["enter", "e"], 
                        ["imes", "i"], 
                        ["ai", "a"],     
                        ["ober", "o"],
                        ["ufat", "u"]];
    //Convertimos a minusculas
    stringDesincriptada = stringDesincriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        
        if(stringDesincriptada.includes(matrizCodigo[i][0])){

            stringDesincriptada = stringDesincriptada.replaceAll(matrizCodigo[i][0],
            matrizCodigo[i][1])
            
        }
        
    }
    return stringDesincriptada;
}
function btonCopiar(){
    let texto = document.getElementById(stringEncriptada.value);
    stringEncriptada.select()
    stringEncriptada.setSelectionRange(0.9999);
    document.execCommand('copy');
    alert("OK")
    }

