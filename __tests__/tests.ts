import { test, it, describe, expect, beforeAll, afterAll } from "@jest/globals";
import app from "../src/index";
import superApp, { Request, Response } from "supertest";
import mongoose from "mongoose";
import dotenv from "dotenv";
import supertest from "supertest";
import { ObjectId } from "mongodb";

dotenv.config();
const DB_URL = process.env.MONGODB_URL_TEST || "";

beforeAll(async () => {
  await mongoose.connect('mongodb+srv://munezeromicha2000:Munezero2024@cluster0.7mpb0qo.mongodb.net/');
},40000);

afterAll(async () => {
  await mongoose.connection.close();
});

let commentId = " ";
let identify = '65def6ff8fd75b94cf82961e';
const id = '65dc6fd4ef92b13cd7fe8c44'; // userID
const blogId = '65def6ff8fd75b94cf82961e';
const queryId = '65def8d8b45c61c9cb794303';
const token: { token: string } = { token: '' };
describe("Logging and APIs", () => {
  
  describe("Create a new user", () => {
    it("new user", async () => {
      const newUser = await supertest(app).post('/api/signup').send({
        "username": "gigi",
         "email": "gigi@gmail.com",
         "password": "Giramata2024!"
     })
     expect(newUser.status).toBe(200);
    })
    it("new user", async () => {
      const newUser = await supertest(app).post('/api/signup').send({
        "username": "gigi",
         "email": "",
         "password": "Giramata2024!"
     })
     expect(newUser.status).toBe(400);
    })
  })

  describe("user login", ()=>{
    it("should login in", async () => {
        const response = await supertest(app).post("/api/login")
        .send({ email: "ntaganira@gmail.com", password: 'Ntaganira2024!' });
        token.token = response.body.token;
        expect(response.status).toBe(200);
      });
      
      it("user not found", async () => {
        const response = await supertest(app).post("/api/login")
        .send({ email: "ntagyyy@gmail.com", password: 'Ntaganira2024!' });
        expect(response.status).toBe(404);
      });
      it("user not found without email", async () => {
        const response = await supertest(app).post("/api/login")
        .send({ email: "", password: 'Ntaganira2024!' });
        expect(response.status).toBe(404);
        expect(response.body.message).toContain("Missing credentials")
      });
      it("user not found without email", async () => {
        const response = await supertest(app).post("/api/login")
        .send({ email: "ntaganira@gmail.com", password: 'Ntaganir' });
        expect(response.status).toBe(404);
        expect(response.body.message).toContain("Invalid Password")
      });
  })


  // it("When there is unauthorized user", async() => {
  //   const res = await supertest(app)
  //   .post('/api/blogs')
  //   .send({
  //     title: 'Title',
  //     content: 'Content',
  //     image: ""
  //   });
  // expect(res.status).toBe(401);
  // })

  it("Without title field", async() => {
    const res = await supertest(app)
    .post('/api/blogs')
    .send({
      content: 'Contents',
      image: ""
    }).set('Authorization', 'Bearer ' + token.token)
  expect(res.status).toBe(400);
  });

  
  it("Get all blogs", async () => {
    const show = await supertest(app).get("/api/blogs")
    expect(show.status).toBe(200);
    identify = show.body[0]._id
  });

  it("Get single blogs", async () => {
    const show = await supertest(app).get(`/api/blogs/${identify}`);
    expect(show.status).toBe(200);
  });

  it("Get single blogs", async () => {
    const show = await supertest(app).get(`/api/blogs/65de3228ae9ec95d74123f11000`);
    expect(show.status).toBe(500);
  });

  it('when you delete blog with permission', async () => {
    const res = await supertest(app)
   .delete(`/api/blogs/${blogId}`)
   .set('Authorization', 'Bearer '+ token.token)
    expect(res.status).toBe(200);
  });

  it('when you have permission', async () => {
    const res = await supertest(app)
      .patch(`/api/blogs/${blogId}`).send({ title: "name" }).set('Authorization', 'Bearer '+ token.token);
    expect(res.status).toBe(200);
  })


  it("commenting on single blogs", async () => {
    const show = await supertest(app).get(`/api/blogs/65de3228ae9ec95d74123f11000/comments`);
    expect(show.status).toBe(500);
  });

  it("commenting on single blogs", async () => {
    const show = await supertest(app).post(`/api/blogs/${identify}/comments`).send({
      "name": "rwema",
      "email":"rwema@gmail",
      "idea": "well done!"
    })
    expect(show.status).toBe(201);
  });

  it("Getting on single blogs", async () => {
    const show = await supertest(app).get(`/api/blogs/${identify}/comments`);
    // console.log(show.body._id);
    expect(show.status).toBe(200);
    commentId = show.body._id;

  });

  it("commenting on single blogs", async () => {
    const show = await supertest(app).post(`/api/blogs/65de3228ae9ec95d74123f11000/comments`).send({
      "name": "rwema",
      "email":"rwema@gmail",
      "idea": "well done!"
    })
    expect(show.status).toBe(500);
  });

  it("Delete comment", async()=>{
    const show = await supertest(app).delete(`/api/comments/${commentId}`);
    expect(show.status).toBe(200)
  })
  it("Delete comment", async()=>{
    const show = await supertest(app).delete(`/api/comments/6687gkjbkkv`);
    expect(show.status).toBe(404)
  })

});


it("Getting all queries", async () => {
    const show = await supertest(app).get("/api/query");
    // .set('Authorization', 'Bearer '+ token.token)
    expect(show.status).toBe(200);
    
  });

  it("Updating a query", async () => {
    const show = await supertest(app).patch(`/api/query/:id`);
    expect(show.status).toBe(400);
  });
  it("deleting a query by using id", async () => {
    const show = await supertest(app).delete(`/api/query/${queryId}`)
    .set('Authorization', 'Bearer '+ token.token)
    expect(show.status).toBe(200);
  });

//   describe('Lets test the querie', ()=>{
//     it('creating ')
//   })