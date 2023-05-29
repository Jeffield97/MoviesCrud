const request = require("supertest")
const app = require("../app")

let idMovie

test('GET all movies, may return 200 status', async () => {
    const res = await request(app).get("/movies")
    console.log(res.body)
    expect(res.status).toBe(200)
})

test('POST the movie information, may return 201 status', async () => {
    const body = {
        name: "John Wick: Chapter 4",
        image: "https://image.tmdb.org/t/p/w185_and_h278_bestv2//uiGArWE8nUjAoA1fA1um98ykL2I.jpg",
        synopsis: "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
        releaseYear: 2023
    }
    const res = await request(app).post("/movies").send(body)
    idMovie = res.body.id
    expect(res.status).toBe(201)
})

test('UPDATE the movie information, may return status 200', async () => {
    const body = {
        name: "John Wick: Chapter 5",
        image: "https://image.tmdb.org/t/p/w185_and_h278_bestv2//uiGArWE8nUjAoA1fA1um98ykL2I.jpg",
        synopsis: "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
        releaseYear: 2026
    }
    const res = await request(app).put(`/movies/${idMovie}`).send(body)
    expect(res.status).toBe(200)
})


test('SET Genres to movie, may return status 200', async () => { 
    const body = {
        name: "Action"
    }
    const resGen = await request(app).post("/genres").send(body)
    const res = await request(app).post(`/movies/${idMovie}/genres`).send([resGen.body.id])
    expect(res.status).toBe(200)
 })

 test('SET Actor to movie, may return status 200', async () => { 
    const body = {
        firstName: "Tom",
        lastName: "Hardy",
        nationality: "Israeli",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Tom_Hardy_by_Gage_Skidmore.jpg/220px-Tom_Hardy_by_Gage_Skidmore.jpg",
        birthday: "1977-09-15"
    }
    const resActor = await request(app).post("/actors").send(body)
    const res = await request(app).post(`/movies/${idMovie}/actors`).send([resActor.body.id])
    expect(res.status).toBe(200)
 })

 test('SET Director to movie, may return status 200', async () => { 
    const body = {
        firstName: "Alexander",
        lastName: "Witt,",
        nationality: "EEUU",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Alexander_Witt.jpg/220px-Alexander_Witt.jpg",
        birthday: "1952-10-31"
    }
    const resDirector = await request(app).post("/directors").send(body)
    const res = await request(app).post(`/movies/${idMovie}/actors`).send([resDirector.body.id])
    expect(res.status).toBe(200)
 })
test('DELETE movie with ID saved in idMovie, may return status 204', async () => {
    const res = await request(app).delete(`/movies/${idMovie}`)
    expect(res.status).toBe(204)
})