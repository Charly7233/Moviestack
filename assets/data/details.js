const urlparams = new URLSearchParams(location.search)
const id = urlparams.get(`id`)
const main = document.getElementById(`detailsstructure`)

function formatodetalles(movie,cont) {
    cont.innerHTML =     `<div class="flex flex-row gap-10">
                        <img class="object-cover w-1/2" src="${movie.image}" alt="">
                    <div class="flex flex-col gap 3 w-1/2">
                        <h1 class="text-4xl font-bold">${movie.title}</h1>
                        <p class="text-xl">${movie.tagline}</p>
                        <p class="text-lg italic">Genres: ${movie.genres}</p>
                        <p class="leading-relaxed">${movie.overview}</p>
                    </div>
                </div>
                <div class="flex gap-10 mt-10">
                    <table class="border border-gray-600 text-left w-[450px]">
                        <tr class="border-b border-gray-600">
                            <td class="p-3">original language</td>
                            <td class="p-3">${movie.original_language}</td>
                        </tr>
                        <tr class="border-b border-gray-600">
                            <td class="p-3">release date</td>
                            <td class="p-3">${movie.release_date}</td>
                        </tr>
                        <tr class="border-b border-gray-600">
                            <td class="p-3">runtime</td>
                            <td class="p-3">${movie.runtime} mins</td>
                        </tr>
                        <tr>
                            <td class="p-3">status</td>
                            <td class="p-3">${movie.status}</td>
                        </tr>
                    </table>

                    <table class="border border-gray-600 text-left w-[450px]">
                        <tr class="border-b border-gray-600">
                            <td class="p-3">vote average</td>
                            <td class="p-3">${movie.vote_average} %</td>
                        </tr>
                        <tr class="border-b border-gray-600">
                            <td class="p-3">budget</td>
                            <td class="p-3">USD ${movie.budget}</td>
                        </tr>
                        <tr>
                            <td class="p-3">revenue</td>
                            <td class="p-3">USD ${movie.revenue}</td>
                        </tr>
                    </table>
                </div>`
}

formatodetalles(movies.find(film => film.id == id),main )

