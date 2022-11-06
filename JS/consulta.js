const buscarPokemon = () => {
    const nombrePokemonInput = document.getElementById("buscar");
    let pokeNombre = nombrePokemonInput.value;
    pokeNombre = pokeNombre.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeNombre}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImagen("./recursos/error.jpg");
            document.getElementById("circulo").style.background = '#EE0706';
        }
        else{
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let circulo = document.getElementById("cirlulo");
            let imagen = data.sprites.front_default;
            let pokeNombre = data.name;
            let pokeId = data.id;
            let pokeTipo = data.types;
            let pokeEstadisticas = data.stats;
            let pokeAltura = data.height;
            let pokePeso = data.weight;
            pokeImagen(imagen);
            pokeNom(pokeNombre);
            pokeID(pokeId);
            pokeTypes(pokeTipo);
            pokeStat(pokeEstadisticas);
            pokeAlt(pokeAltura);
            pokePe(pokePeso);
            document.getElementById("circulo").style.background = '#55AB62';
        }
    });
}

const pokeImagen = (url) => {
    const pokeFoto = document.getElementById("imagen");
    pokeFoto.src = url;
}
const pokeNom = (name) => {
    const pokeNomb = document.getElementById("nombre");
    const nombre = name;
    pokeNomb.innerHTML = nombre;
}
const pokeID = (id) => {
    const pokeNumero = document.getElementById("numero");
    const numero = id;
    pokeNumero.innerHTML = "# " + numero;
}
const pokeTypes = (types) => {
    const pokeTipo = document.getElementById("tipoPokemon");
    const tipo = types.map(item => item.type.name);
    pokeTipo.innerHTML = "<h3>Tipo</h3><p>" + tipo[0]+"/"+tipo[1] + "</p>";
}
const pokeStat = (stats) => {
    const pokeEstad = document.getElementById("estadisticas");
    const estadistica = stats.map(item => item.base_stat);
    const nombre = stats.map(item => item.stat.name);
    pokeEstad.innerHTML = 
    "<table>"+
        "<tr>"+
            "<th colspan=2>Estadisticas</th>"+
        "</tr>"+
        "<tr>"+
            "<td>"+nombre[0]+"</td>"+
            "<td>"+estadistica[0]+"</td>"+
        "</tr>"+
        "<tr>"+
            "<td>"+nombre[1]+"</td>"+
            "<td>"+estadistica[1]+"</td>"+
        "</tr>"+ 
        "<tr>"+
            "<td>"+nombre[2]+"</td>"+
            "<td>"+estadistica[2]+"</td>"+
        "</tr>"+
        "<tr>"+
            "<td>"+nombre[3]+"</td>"+
            "<td>"+estadistica[3]+"</td>"+
        "</tr>"+
        "<tr>"+
            "<td>"+nombre[4]+"</td>"+
            "<td>"+estadistica[4]+"</td>"+
        "</tr>"+
        "<tr>"+
            "<td>"+nombre[5]+"</td>"+
            "<td>"+estadistica[5]+"</td>"+
        "</tr>"+
    "</table>"
}
const pokeAlt = (height) => {
    const altura = document.getElementById("altura");
    const alt = height;
    altura.innerHTML = "<p>Altura: " + alt/10 + " m</p>";
}
const pokePe = (weight) => {
    const peso = document.getElementById("peso");
    const pe = weight;
    peso.innerHTML = "<p>Peso: " + pe/10 + "Kg</p>";
}