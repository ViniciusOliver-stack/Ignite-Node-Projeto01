import http from "node:http";
import { routes } from "./routes.js";
import { json } from "./middlewares/json.js";

const server = http.createServer(async (request, response) => {
  const { method, url } = request;

  await json(request, response);

  const route = routes.find((route) => {
    return route.method === method && route.path.test(url);
  });

  const routeParams = request.url.match(route.path);

  console.log(routeParams);

  if (route) {
    return route.handler(request, response);
  }

  return response.writeHead(404).end("Not Found");
});

server.listen(3333);
