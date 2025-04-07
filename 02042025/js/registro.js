let arregloRegistro = [];

/*function registro(){
    
    let placa = document.getElementById("placa").value;
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let color = document.getElementById("color").value;
    let anio = document.getElementById("anio").value;
    let precio = document.getElementById("precio").value;

    arregloRegistro.push(placa);
    
}*/


    $(document).ready(function () {
        $("#btnRegistro").click(function () { 
            
            let placa = $("#placa").val();
            arregloRegistro.push(placa);

            //let html = '<p><strong>'+ placa+'</strong></p>';
            let html = '<table>';
                html+='<tr>';
                html+='<td>'+placa+'</td>';
                html+='</tr>';
            html+='</table>';
            $("#mostrarDatos").html(html);
        });
    });



/*let registrar = () => {

};*/