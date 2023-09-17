import { randomUUID } from "crypto";
import { Database } from "./database.js";

const database = new Database();

export const routes = [
  {
    method: "GET",
    path: "/task",
    handler: (request, response) => {
      const tasks = database.select("tasks");
      return response.end(JSON.stringify(tasks));
    },
  },
  {
    method: "POST",
    path: "/task",
    handler: (request, response) => {
      const { title, description } = request.body;
      const task = {
        id: randomUUID(),
        title,
        description,
        created_at: new Date(),
        updated_at: null,
        completed_at: null,
      };
      database.insert("tasks", task);
      return response.writeHead(201).end("Task criada com sucesso!");
    },
  },
];