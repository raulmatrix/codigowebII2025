let frase = "Curso de javascript intensivo";
let contV = 0;
let contC = 0;
for(let i=0;i<frase.length;i++){
    let letra = frase.charAt(i);
    console.log("-"+letra);
    if(letra=='a'||letra=='e'||letra=='i'||letra=='o'||letra=='u'){
    contV++;

    }
    else if(letra==' ') {
           console.log("Espacio");
    }
    else{
        contC++;  
    }
    
}

console.log("cantidad VOcales: "+contV);
console.log("cantidad consonantes: "+contC);