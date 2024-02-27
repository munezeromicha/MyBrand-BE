import { test, it, describe, expect, beforeAll, afterAll } from "@jest/globals";
import app from "../src/app";
import superApp, { Request, Response } from "supertest";
import mongoose from "mongoose";
import dotenv from "dotenv";
import supertest from "supertest";
import { ObjectId } from "mongodb";

dotenv.config();
const DB_URL = process.env.MONGODB_URL_TEST || "";

beforeAll(async () => {
  await mongoose.connect(DB_URL);
}, 50000);

afterAll(async () => {
  await mongoose.connection.close();
});


//  describe("Creating account", () => {
//     it("should create a new account", async() => {
//         const response = await supertest(app).post("/api/signup")
//             .send({username:"michael",email:"michael@gmail.com", password:'Munezero2024!'});
//         expect(response.status).toBe(200);
//     }) 
// })

const id = '65dc6fd4ef92b13cd7fe8c44';
describe("Logging and APIs", () => {
  const token: { token: string } = { token: '' };
  it("should login in", async () => {
    const response = await supertest(app).post("/api/login")
      .send({ email: "michael@gmail.com", password: 'Munezero2024!' });
    token.token = response.body.token;
    expect(response.status).toBe(200);
  })

  it("Testing empty fields which is title", async() => {
    const res = await supertest(app)
    .post('/api/blogs')
    .send({
      content: 'Contents',
      image: ""
    }).set('Authorization', 'Bearer ' + token.token)
  expect(res.status).toBe(400);
  })

  it("Testing empty fields which is title", async() => {
    const res = await supertest(app)
    .post('/api/blogs')
    .send({
      title: 'Title',
      image: ""
    }).set('Authorization', 'Bearer ' + token.token)
  expect(res.status).toBe(400);
  })

  it("When there is no image", async() => {
    const res = await supertest(app)
    .post('/api/blogs')
    .send({
      title: 'Title',
      content: 'Content',
    }).set('Authorization', 'Bearer ' + token.token)
  expect(res.status).toBe(400);
  })

  it("/api/ for 200", async () => {
    const show = await supertest(app).post("/api/blogs")
    .set('Authorization', 'Bearer '+ token.token)
    expect(show.status).toBe(200);
  });

  it('when you delete blog with permission', async () => {
    const res = await supertest(app)
   .delete('/api/blogs/65dc3a4e7eece96ed77d4e68')
   .set('Authorization', 'Bearer '+ token.token)
    expect(res.status).toBe(200);
  })

  it('when you have permission', async () => {
    const res = await supertest(app)
      .patch('/api/blogs/65da1b2e2414b007368b44fb').send({ title: "name" }).set('Authorization', 'Bearer '+ token.token);
    expect(res.status).toBe(200);
  })

  it('bad request', async () => {
    const response = await supertest(app).post(`/api/blogs/65dc7bf3e692dc289c7a11f8/comments`)
      .send({ email: "michael@gmail.com", comment: "hallo" });
    expect(response.status).toBe(400);
  })

  it("/api/ for 200", async () => {
    const show = await supertest(app).patch("/api/blogs/:id/comments")
    .set('Authorization', 'Bearer '+ token.token)
    expect(show.status).toBe(200);
  });

  // Authorized on query 

  it("/api/ for 200", async () => {
    const show = await supertest(app).get("/api/query")
    .set('Authorization', 'Bearer '+ token.token)
    expect(show.status).toBe(200);
  });
  it("/api/ for 200", async () => {
    const show = await supertest(app).get(`/api/query/:id`)
    .set('Authorization', 'Bearer '+ token.token)
    expect(show.status).toBe(200);
  });
  it("/api/ for 200", async () => {
    const show = await supertest(app).patch(`/api/query/:id`)
    .set('Authorization', 'Bearer '+ token.token)
    expect(show.status).toBe(200);
  });
  it("/api/ for 200", async () => {
    const show = await supertest(app).delete(`/api/query/:id`)
    .set('Authorization', 'Bearer '+ token.token)
    expect(show.status).toBe(200);
  });

  // user



});


describe("Test APIs on Blogs", () => {

  it("/api/ for 404", async () => {
    const result = await supertest(app).get("/api/");
    expect(result.status).toBe(404);
  });

  it("/api/ for 200", async () => {
    const show = await supertest(app).get("/api/blogs");
    expect(show.status).toBe(200);
  });
  it("finding blog by id", async () => {
    const show = await supertest(app).get("/api/blogs/65dc3a4e7eece96ed77d4e68");
    expect(show.status).toBe(200);
  });

  it("You get 400 when you delete without permission", async () => {
    const show = await supertest(app).delete("/api/blogs/:id");
    expect(show.status).toBe(400);
  });

  // it("/api/ for 400", async () => {
  //   const show = await supertest(app).patch("/api/blogs/:id");
  //   expect(show.status).toBe(400);
  // });

  it('Updating a blog without permission ', async () => {
    const res = await supertest(app)
      .patch('/api/blogs/65dc3a4e7eece96ed77d4e68').send({ title: "name" })
    expect(res.status).toBe(400);
  })

  it("/api/ for 500", async () => {
    const show = await supertest(app).post("/api/blogs/:id/likes");
    expect(show.status).toBe(500);
  });

});


describe("Test APIs on Query", () => {
  
  it("/api/ for 500", async () => {
    const show = await supertest(app).post("/api/query");
    expect(show.status).toBe(200);
  });
  it("/api/ for 200", async () => {
    const show = await supertest(app).get("/api/query")
    expect(show.status).toBe(400);
  });
  it("/api/ for 200", async () => {
    const show = await supertest(app).get(`/api/query/:id`)
    expect(show.status).toBe(401);
  });
  it("/api/ for 200", async () => {
    const show = await supertest(app).patch(`/api/query/:id`)
    expect(show.status).toBe(401);
  });
  it("/api/ for 200", async () => {
    const show = await supertest(app).delete(`/api/query/:id`)
    expect(show.status).toBe(400);
  });


});


describe("Test APIs on comments", () => {
  const myID = '65dc7bf3e692dc289c7a11f8'
  it("/api/ for 200", async () => {
    const show = await supertest(app).post(`/api/blogs/:id/comments`)
    expect(show.status).toBe(200);
  });
  it('should return 404 on getting one comment', async () => {
    const response = await supertest(app).get(`/api/blogs/${myID}/comments/${id}`);
    expect(response.status).toBe(404);
  });

  it("/api/ for 200", async () => {
    const show = await supertest(app).get("/api/blogs/65d8282a4648c6858dbaaacd/comments");
    expect(show.status).toBe(200);
  });

  it("/api/ for 500", async () => {
    const show = await supertest(app).get("/api/blogs/comments");
    expect(show.status).toBe(500);
  });
  it("/api/ for 404", async () => {
    const show = await supertest(app).delete("/api/blogs/:id/comments");
    expect(show.status).toBe(404);
  });

  it("/api/ for 404", async () => {
    const show = await supertest(app).get("/api/users");
    expect(show.status).toBe(404);
  });
});



describe("Auth Testing", () => {
  it("if user not found", async () => {
    const payload: {
      email: string;
      password: string;
    } = {
      email: "",
      password: "",
    };
    const res = await supertest(app).post("/api/user").send({
      title: "",
      content: "",
    });
    expect(res.statusCode).toBe(404);
  });


  it("if user have invalid Email", async () => {
    const payload: {
      email: string;
      password: string;
    } = {
      email: "muhoza@gmail.com",
      password: "michael2024!",
    };
    const res = await supertest(app)
      .post("/api/login")
      .send({
        title: "",
        content: "",
      })
      .set("email", payload.email)
      .set("password", payload.password);
    expect(res.statusCode).toBe(400);
  });

  it("if user unauthorized", async () => {
    const payload: {
      email: string;
      password: string;
    } = {
      email: "john@yahoo.fr",
      password: "123456",
    };
    const res = await supertest(app)
      .post("/api/signup")
      .send({
        title: "",
        content: "",
      })
      .set("email", payload.email)
      .set("password", payload.password);
    expect(res.statusCode).toBe(400);
  });

});
