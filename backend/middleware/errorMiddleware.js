const errorHandler = (err, req, res, next) => {
  if (req.xhr) {
    res.status(500).send("Internal Server error");
  } else {
    next(err);
  }
};

const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

export { errorHandler, notFound };
