async function getGeneros() {

    var keysApi = new Headers();
    keysApi.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTQ5MTVjZmVjZmRmYTcyYjgxOTE3NWFlMWZmMTgzNCIsInN1YiI6IjY2NmRhMWY1OGVkNmYwODQ3NmFmYmZhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NfOocwir3_s3yDYPvOk5InXprTkvJ_tuk2ZJQZlxT_c')
    keysApi.append('accept', 'application/json')

    var cabecalho = {
        method: 'GET',
        headers: keysApi,
    }


    const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=pt', cabecalho)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default getGeneros;