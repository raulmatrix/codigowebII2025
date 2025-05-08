
const contenedor=document.getElementById('contenedorPokemon');
fetch('https://pokeapi.co/api/v2/pokemon/145')
        .then(respuesta=>respuesta.json())
        .then(datos=>{
            const nombre = datos.name;
            const foto = datos.sprites.front_default;
            const poderes = datos.abilities;

            let poderesObtenidos = "";
            for(let i=0;i<poderes.length;i++){
                poderesObtenidos+=poderes[i].ability.name+",";
            }

            const div = document.createElement('div');
            div.innerHTML = `
                        <h2>${nombre}</h2>
                        <img src="${foto}">
                        <p>
                           <strong>Poderes:</strong> ${poderesObtenidos}
                        </p>
                    `;
            contenedor.appendChild(div);
        })
        .catch(error=>{
        console.log('Error al cargar el archivo', error);
        });