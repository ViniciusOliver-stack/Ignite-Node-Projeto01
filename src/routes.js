import { randomUUID } from "crypto";
import { Database } from "./database.js";
import { buildRoutePath } from "./utils/build-route-path.js";

const database = new Database();

export const routes = [
  {
    method: "GET",
    path: buildRoutePath("/task"),
    handler: (request, response) => {
      const tasks = database.select("tasks");
      return response.end(JSON.stringify(tasks));
    },
  },
  {
    method: "POST",
    path: buildRoutePath("/task"),
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
  {
    method: "DELETE",
    path: buildRoutePath("/task/:id"),
    handler: (request, response) => {
      const { id } = request.params;
      database.delete("tasks", id);
      return response.writeHead(204).end();
    },
  },
  {
    method: "PUT",
    path: buildRoutePath("/task/:id"),
    handler: (request, response) => {
      const { id } = request.params;
      const { title, description } = request.body;

      const existTask = database.select("tasks").find((task) => task.id === id);

      if (!existTask) {
        return response.writeHead(404).end("Tarefa não encontrada.");
      }

      const updatedTask = {
        ...existTask,
        title: title !== undefined ? title : existTask.title,
        description:
          description !== undefined ? description : existTask.description,
      };

      database.update("tasks", id, updatedTask);

      return response.writeHead(202).end();
    },
  },
];
