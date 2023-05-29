const request = require("supertest")
const app = require("../app")

let idDirector

test('GET all directors, may return 200 status', async () => {
    const res = await request(app).get("/directors")
    expect(res.status).toBe(200)
})

test('POST the director information, may return 201 status', async () => {
    const body = {
        firstName: "Alexander",
        lastName: "Witt,",
        nationality: "EEUU",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Alexander_Witt.jpg/220px-Alexander_Witt.jpg",
        birthday: "1952-10-31"
    }
    const res = await request(app).post("/directors").send(body)
    idDirector = res.body.id
    expect(res.status).toBe(201)
})

test('UPDATE the director information, may return status 200', async () => {
    const body = {
        firstName: "Jeffield",
        lastName: "Fullbuster",
        nationality: "Israeli",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Tom_Hardy_by_Gage_Skidmore.jpg/220px-Tom_Hardy_by_Gage_Skidmore.jpg",
        birthday: "1977-09-15"
    }
    const res = await request(app).put(`/directors/${idDirector}`).send(body)
    expect(res.status).toBe(200)
})

test('DELETE director with ID saved in idDirector, may return status 204', async () => {
    const res = await request(app).delete(`/directors/${idDirector}`)
    expect(res.status).toBe(204)
})