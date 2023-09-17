export function buildRoutePath(path) {
  const routeParametersRegEx = /:([a-zA-Z]+)/g;

  console.log(Array.from(path.matchAll(routeParametersRegEx)));
}
