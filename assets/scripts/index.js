/*<div class="flex flex-col border-4 border-double border-black p-[10px] rounded-xl">
            <img class="w-[100%]" src="https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/cinefilia/que-fue-de-el-reparto-de-el-club-de-los-poetas-muertos/00/14815336-1-esl-ES/00.jpg" alt="">
            <h2 class="text-4xl">tittle</h2>
            <p class="italic ">tagline</p>
            <p>description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic reiciendis culpa alias laudantium, sapiente sed eos facilis dolorem est natus obcaecati totam! Dolorem eveniet doloremque quod laboriosam cum itaque consequuntur!</p>
        </div>*/

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
    let cards = ""
    for (const pelis of peliculas) {
        cards += card (pelis)
    }
    movie.innerHTML = cards
}
creationcard (movies, cont)
