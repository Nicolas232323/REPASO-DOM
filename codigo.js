var notaMate = document.getElementById("NotaMate");

var notaLengua = document.getElementById("NotaLengua");

var notaEFSI = document.getElementById("NotaEFSI");
        
const botonPromedio = document.getElementById("botonPromedio");

function validarNota()
{
    if (notaMate.value === "" || notaLengua.value === "" || notaEFSI.value === "") {
        alert("Por favor, complete todas las notas.");
        return;
    }
    if(notaMate.value < 0 || notaMate.value > 10 || notaLengua.value < 0 || notaLengua.value > 10 || notaEFSI.value < 0 || notaEFSI.value > 10)
    {
        alert("El numero ingresado no es correspondiente.")
        return;
    }
}
function validarNota(notaElement) {
    const nota = parseFloat(notaElement.value);
    if (isNaN(nota) || nota < 6 || nota > 10) {
        notaElement.style.color = "red";
    } else {
        notaElement.style.color = "green";
    }
}

notaMate.onkeyup = () => validarNota(notaMate);
notaLengua.onkeyup = () => validarNota(notaLengua);
notaEFSI.onkeyup = () => validarNota(notaEFSI);
botonPromedio.onclick = () => {
    var promedioAlumno = (parseFloat(notaMate.value) + parseFloat(notaLengua.value) + parseFloat(notaEFSI.value)) / 3;
    validarNota();
    if (promedioAlumno >= 6) {
        botonPromedio.style.color = "green";
    } else {
        botonPromedio.style.color = "red";
    }
    
    botonPromedio.innerHTML = promedioAlumno;
}

const botonMayorNota = document.getElementById("botonMayorNota");

var mayorNota = [];

botonMayorNota.onclick = () => {
    
    const notas = {
        "Matematica": parseFloat(notaMate.value),
        "Lengua": parseFloat(notaLengua.value),
        "EFSI": parseFloat(notaEFSI.value)
    };

    validarNota();
    let mayorNota = 0;
    let materiasConMayorNota = [];

    for (const materia in notas) {
        const nota = notas[materia];
        if (nota > mayorNota) {
            mayorNota = nota;
            materiasConMayorNota = [materia];
        } else if (nota === mayorNota) {
            materiasConMayorNota.push(materia);
        }
    }

    if (materiasConMayorNota.length === 1) {
        botonMayorNota.style.color = "blue";
        botonMayorNota.innerHTML = "La materia con la mayor nota es: " + materiasConMayorNota[0] + " con una nota de " + mayorNota;
    } else {
        const materiasString = materiasConMayorNota.join(", ");
        botonMayorNota.style.color = "blue";
        botonMayorNota.innerHTML = "Las materias con la mayor nota son: " + materiasString + " con una nota de " + mayorNota;
    }

    
}

