export function buildRoutePath(path) {
  const routeParametersRegEx = /:([a-zA-Z]+)/g;

  const pathWithParams = path.replaceAll(
    routeParametersRegEx,
    "(?<$1>[a-z0-9-_]+)"
  );

  const pathRegex = new RegExp(`^${pathWithParams}`);

  return pathRegex;

  console.log(Array.from(path.matchAll(routeParametersRegEx)));
}
