const request = require("supertest");
const app = require("../src/app");
const User = require("../src/models/user");

const userOne = {
    name: "Shubham",
    email: "shubham@mail.com",
    password: "abc@123",
};

beforeEach(async () => {
    await User.deleteMany();
    await new User(userOne).save();
});

test("Should signup for a new user", async () => {
    await request(app)
        .post("/users")
        .send({
            name: "viraj",
            email: "viraj@example.com",
            password: "abcd@1234",
        })
        .expect(201);
});

test("Should login existing user", async () => {
    await request(app)
        .post("/users/login")
        .send({
            email: userOne.email,
            password: userOne.password,
        })
        .expect(200);
});

test("Should not login non-existant user", async () => {
    await request(app).post("/users/login").send({}).expect(400);
});
