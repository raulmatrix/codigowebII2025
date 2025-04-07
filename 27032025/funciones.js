//funciones tradicionales
function sumar(val1, val2){
    return val1+val2;
}

function mostrarMensaje(){
    console.log("Saludo");
}

//funciones flecha
let suma = (val3,val4) => val3+val4;

//funcion flecha con cuerpo
let edad = fechaNac =>{
    let actual = new Date().getFullYear();
    return actual - fechaNac;
}

console.log("La edad del estudinte es: "+edad(2001));
let edadObtenida = edad(2000);
console.log(`La edad del estudiante es: ${edadObtenida}`);