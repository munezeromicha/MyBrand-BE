import { test, it, describe, expect, beforeAll, afterAll } from "@jest/globals";
import app from "../src/app";
import superApp, { Request, Response } from "supertest";
import mongoose from "mongoose";
import dotenv from "dotenv";
import supertest from "supertest";

dotenv.config();
const DB_URL = process.env.MONGODB_URL_TEST || "";

beforeAll(async () => {
  await mongoose.connect(DB_URL);
}, 30000);

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Test APIs before", () => {
  it("/api/ for 404", async () => {
    const result = await supertest(app).get("/api/");
    expect(result.status).toBe(404);
  });
  it("/api/ for 401", async () => {
    const show = await supertest(app).post("/api/blogs");
    expect(show.status).toBe(401);
  });
  it("/api/ for 401", async () => {
    const show = await supertest(app).get("/api/blogs");
    expect(show.status).toBe(401);
  });
  it("/api/ for 401", async () => {
    const show = await supertest(app).get("/api/blogs/:id");
    expect(show.status).toBe(401);
  });

  it("/api/ for 500", async () => {
    const show = await supertest(app).delete("/api/blogs/:id");
    expect(show.status).toBe(500);
  });
  it("/api/ for 401", async () => {
    const show = await supertest(app).patch("/api/blogs/:id");
    expect(show.status).toBe(401);
  });
  it("/api/ for 500", async () => {
    const show = await supertest(app).post("/api/blogs/:id/likes");
    expect(show.status).toBe(500);
  });
  it("/api/ for 500", async () => {
    const show = await supertest(app).post("/api/query");
    expect(show.status).toBe(500);
  });
  it("/api/ for 200", async () => {
    const show = await supertest(app).get("/api/query");
    expect(show.status).toBe(200);
  });
  it("/api/ for 500", async () => {
    const show = await supertest(app).get("/api/query/:id");
    expect(show.status).toBe(500);
  });
  it("/api/ for 400", async () => {
    const show = await supertest(app).patch("/api/query/:id");
    expect(show.status).toBe(400);
  });
  it("/api/ for 404", async () => {
    const show = await supertest(app).delete("/api/query/:id");
    expect(show.status).toBe(404);
  });
  it("/api/ for 500", async () => {
    const show = await supertest(app).post("/api/blogs/:id/comments");
    expect(show.status).toBe(500);
  });
  it("/api/ for 500", async () => {
    const show = await supertest(app).get("/api/blogs/:id/comments");
    expect(show.status).toBe(500);
  });
  it("/api/ for 400", async () => {
    const show = await supertest(app).patch("/api/blogs/:id/comments");
    expect(show.status).toBe(400);
  });
  it("/api/ for 401", async () => {
    const show = await supertest(app).get("/api/blogs/comments");
    expect(show.status).toBe(401);
  });
  it("/api/ for 404", async () => {
    const show = await supertest(app).delete("/api/blogs/:id/comments");
    expect(show.status).toBe(404);
  });
  // it("/api/ for 400", async () => {
  //   const show = await supertest(app).post("/api/signup");
  //   expect(show.status).toBe(400);
  // });
  // it("/api/ for 404", async () => {
  //   const show = await supertest(app).post("/api/login");
  //   expect(show.status).toBe(404);
  // });
  it("/api/ for 404", async () => {
    const show = await supertest(app).get("/api/users");
    expect(show.status).toBe(404);
  });

  it("/api/ for 401", async () => {
    const show = await supertest(app).get("/api/profile");
    expect(show.status).toBe(401);
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
    const res = await supertest(app).post("/api/endUser").send({
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
    expect(res.statusCode).toBe(404);
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
    expect(res.statusCode).toBe(404);
  });

});
