// src/mocks/handlers.js
import { rest } from "msw";
import { Data } from "../data";
import { v4 as uuid } from "uuid";

export let FAKE_DB: any = [];

export const handlers = [
  rest.post<Data, Data>("/newPost", (req, res, ctx) => {
    const dataPost: Data = req.body;
    const id = uuid();
    FAKE_DB.push({ ...dataPost, id: id });
    return res(ctx.status(200), ctx.json({ ...dataPost, id: id }));
  }),

  rest.get("/newPost", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(FAKE_DB));
  }),

  rest.delete("/deletePost/:id", (req, res, ctx) => {
    const { id } = req.params;
    const newDB = FAKE_DB.filter((post: any) => post.id !== id);
    FAKE_DB = newDB;
    return res(ctx.status(200), ctx.json(newDB));
  }),

  rest.put<Data>("/updatePost/:id", (req, res, ctx) => {
    const { id } = req.params;
    const dataForm: Data = req.body;
    const updatedDB = FAKE_DB.map((post: any) =>
      post.id === id ? { ...post, ...dataForm } : post
    );
    FAKE_DB = updatedDB;
    return res(ctx.status(200), ctx.json(updatedDB));
  }),
];
