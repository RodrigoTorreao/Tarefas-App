function errorHandler(err, req, res, next) {
  const error = {
    message: err.message ? err.message : '',
    code: err.code ? err.code : 500,
  };

  return res
    .status(error.code)
    .json({ message: error.message });
}
export default errorHandler;
