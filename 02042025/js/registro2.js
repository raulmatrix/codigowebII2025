let autos = []; //array vacio


function registrar(){

    let placa = document.getElementById('placa').value;
    let marca = document.getElementById('marca').value;//select
    let anio = document.getElementById('anio').value;
    let precio = document.getElementById('precio').value;
    let estado = document.getElementsByName('estado');

    for (let i = 0; i < estado.length; i++) {
        if (estado[i].checked) {
            estado = estado[i].value;
            break;
        }
    }

    autos.push(placa);

    console.log(marca);
    console.log("Estado: "+estado);
    console.log(autos);
}