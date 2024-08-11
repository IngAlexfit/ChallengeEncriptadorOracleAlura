document.getElementById('encryptButton').addEventListener('click', function() {
    const inputText = document.getElementById('text_user').value;
    const resultTextarea = document.getElementById('result');
    const image = document.getElementById('image_result'); 
    const noteText = document.querySelector('.result-description'); 

    if (inputText.trim() !== "" && /^[a-z\s]+$/.test(inputText)) {
        // Encriptar el texto
        const encryptedText = encriptar(inputText);
        resultTextarea.value = encryptedText;
        
        // Ocultar la imagen y el texto de nota
        if (image) image.style.display = 'none';
        if (noteText) noteText.style.display = 'none';
        
        // Mostrar el textarea
        resultTextarea.classList.remove('hidden');
        //Limpiar Entrada de usuario
        limpiarEntradaUser()
    } else {
         // Mostrar el textarea
        resultTextarea.classList.remove('hidden');
        resultTextarea.value = "Ningún mensaje fue encontrado o el texto contiene caracteres inválidos";
    }
});

document.querySelector('.decrypt').addEventListener('click', function() {
    const inputText = document.getElementById('text_user').value;
    const resultTextarea = document.getElementById('result');
    const image = document.getElementById('image_result');
    const noteText = document.querySelector('.result-description');

    if (inputText.trim() !== "" && /^[a-z\s]+$/.test(inputText)) {
        // Desencriptar el texto
        const decryptedText = desencriptar(inputText);
        resultTextarea.value = decryptedText;
        
        // Ocultar la imagen y el texto de nota
        if (image) image.style.display = 'none';
        if (noteText) noteText.style.display = 'none';
        
        // Mostrar el textarea
        resultTextarea.classList.remove('hidden');
    } else {
        resultTextarea.value = "Ningún mensaje fue encontrado o el texto contiene caracteres inválidos";
    }
});

function encriptar(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

function desencriptar(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}

// Función para ocultar el textarea y restablecer el estado inicial
function resetResult() {
    const resultTextarea = document.getElementById('result');    
    const image = document.getElementById('image_result');
   
    const noteText = document.querySelector('.result-description');

    resultTextarea.classList.add('hidden');
    resultTextarea.value = "";
    
    if (image) {
        // Añadir la clase hidden-mobile si la pantalla es pequeña
        if (window.innerWidth <= 914) {
            image.classList.add('hidden-mobile');
        } else {
            image.style.display = 'block';
        }
    }
    
    if (noteText) noteText.style.display = 'block';
}

function limpiarEntradaUser() {
    const userTextarea = document.getElementById('text_user');
    userTextarea.value = "";
}



// Función para copiar el contenido del textarea al portapapeles
document.getElementById('button__copiar').addEventListener('click', function() {
    const resultTextarea = document.getElementById('result');
    resultTextarea.select();
    document.execCommand('copy');
    resetResult();
    limpiarEntradaUser();
    alert("Texto copiado al portapapeles");
});

// Restablecer el estado del div de resultado al escribir en el textarea de entrada
document.getElementById('text_user').addEventListener('input', function() {
    resetResult();
});