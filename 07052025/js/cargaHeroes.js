let arregloHeroes = [];
function insertar(){
    let nombre = document.getElementById('nombre').value;
    let liga = document.getElementById('liga').value;
    let nivel = document.getElementById('nivel').value;
    let poderes = document.getElementById('poderes').value;

    let heroe = new Heroe(nombre,liga,nivel,poderes);
    arregloHeroes.push(heroe);
    let heroesJSON = JSON.stringify(arregloHeroes);
    console.log(arregloHeroes);
}



fetch('../heroes.json')
    .then(respuesta=>respuesta.json())
    .then(datos=>{
        const heroes = datos.Heroe;//lista de heroes
        const contenedor=document.getElementById('contenedorHeroes');

        heroes.forEach(elementoHeroe => {
            const div = document.createElement('div');

            div.innerHTML = `
                <h2>${elementoHeroe.nombre}</h2>
                <p><strong>Liga:</strong> ${elementoHeroe.liga}</p>
                <p><strong>Nivel de Poder:</strong> ${elementoHeroe.nivelPoder}</p>
                <p><strong>Liga:</strong> ${elementoHeroe.poderes.join(',')}</p>
                `; 

            contenedor.appendChild(div);    
        });
    }).catch(error=>{
        console.log('Error al cargar el archivo', error);
    });