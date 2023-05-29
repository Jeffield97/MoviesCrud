const request = require("supertest")
const app = require("../app")

let idGenre

test('GET all genres, may return 200 status', async () => {
    const res = await request(app).get("/genres")
    expect(res.status).toBe(200)
})

test('POST the genre information, may return 201 status', async () => {
    const body = {
        name: "Action"
    }
    const res = await request(app).post("/genres").send(body)
    idGenre = res.body.id
    expect(res.status).toBe(201)
})

test('UPDATE the genre information, may return status 200', async () => {
    const body = {
        name: "Terror"
    }
    const res = await request(app).put(`/genres/${idGenre}`).send(body)
    expect(res.status).toBe(200)
})

test('DELETE genre with ID saved in idGenre, may return status 204', async () => {
    const res = await request(app).delete(`/genres/${idGenre}`)
    expect(res.status).toBe(204)
})