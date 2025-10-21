export function notFound(req, res, next) {
  const error = new Error(`No se encontró la ruta: ${req.originalUrl}`);
  error.status = 404;
  next(error);
}
