let estudiantes = []; //array vacio

estudiantes.push("Jose Lopez");
estudiantes.push("Alicia Rojas");

//console.log(estudiantes);

estudiantes.splice(1,0,"Edson Peredo");
//pop
//estudiantes.pop();
console.log(estudiantes);

console.log(estudiantes.indexOf("Edson Peredo"));

console.log(estudiantes.includes("Edson Peredo"));

