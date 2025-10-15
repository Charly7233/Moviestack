const cont = document.getElementById("contenedor")

function card(pelicula) {
    return `<div class="flex flex-col border-4 border-double border-black p-[10px] rounded-xl gap-[10px] w-[90%] md:w-[45%] 2xl:w-[30%] text-2xl">
                <img class="w-[100%] border-6 border-double border-black 2xl:h-[300px]" src="${pelicula.image}" alt="">
                <h2 class="text-4xl text-center font-serif">${pelicula.title}</h2>
                <p class="italic truncate">${pelicula.tagline}</p>
                <p class="font-mono">description: ${pelicula.overview} </p>
            </div>`
}

cont.innerHTML = card (movies [0])

function creationcard(peliculas, movie) {
    if (!peliculas.length) {
        movie.innerHTML = `<p>That movie is not in our repertory</p>`
    } else {
        let cards = ""
    for (const pelis of peliculas) {
        cards += card (pelis)
    }
    movie.innerHTML = cards
    }
}
creationcard (movies, cont)


const busqueda = document.getElementById("busquedapeliculas")


busqueda.addEventListener(`input`,() => {
    const busq = busqueda.value.trim()
    const peliculasfilt = filtropeliculas(movies,busq)
    const peliculasyafiltradas = filtropeliculasgenero(peliculasfilt,filtrogeneros())
    creationcard (peliculasyafiltradas, cont)

})

function filtropeliculas(peliculas,titulo) {
    return peliculas.filter((pelicula) => {return pelicula.title.toLowerCase().startsWith(titulo.toLowerCase())})
}

/*detectar el evento select
filtrar por genero
mostrar peliculas condicho genero incluido*/


const seleccionado = document.getElementById("selector")

seleccionado.addEventListener("input", (event) =>{
    const busq = busqueda.value.trim()
    const peliculasfilt = filtropeliculas(movies,busq)
    const peliculasyafiltradas = filtropeliculasgenero(peliculasfilt,filtrogeneros())
    creationcard (peliculasyafiltradas, cont)

})

const generos = movies.map((pelicula)=>{
    return pelicula.genres
})
const uniquegenres = new Set(generos.flat())

uniquegenres.forEach((genero) => {
    seleccionado.innerHTML += `<option value="${genero}">${genero}</option>`
})

function filtropeliculasgenero(peliculas,genero) {
    if (genero == "none") {
        return peliculas
    }else {
        return peliculas.filter((pelicula) => {return pelicula.genres.some((gen)=> gen == genero)})
    }
}

function filtrogeneros() {
    const asd = document.getElementById("selector")
    return asd.value
}
