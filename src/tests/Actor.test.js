const request = require("supertest")
const app = require("../app")

let idActor

test('GET all actors, may return 200 status', async () => {
    const res = await request(app).get("/actors")
    expect(res.status).toBe(200)
})

test('POST the actor information, may return 201 status', async () => {
    const body = {
        firstName: "Tom",
        lastName: "Hardy",
        nationality: "Israeli",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Tom_Hardy_by_Gage_Skidmore.jpg/220px-Tom_Hardy_by_Gage_Skidmore.jpg",
        birthday: "1977-09-15"
    }
    const res = await request(app).post("/actors").send(body)
    idActor = res.body.id
    expect(res.status).toBe(201)
})

test('UPDATE the actor information, may return status 200', async () => {
    const body = {
        firstName: "Jeffield",
        lastName: "Fullbuster",
        nationality: "Israeli",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Tom_Hardy_by_Gage_Skidmore.jpg/220px-Tom_Hardy_by_Gage_Skidmore.jpg",
        birthday: "1977-09-15"
    }
    const res = await request(app).put(`/actors/${idActor}`).send(body)
    expect(res.status).toBe(200)
})

test('DELETE actor with ID saved in idActor, may return status 204', async () => {
    const res = await request(app).delete(`/actors/${idActor}`)
    expect(res.status).toBe(204)
})