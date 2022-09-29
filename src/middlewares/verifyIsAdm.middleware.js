const verifyIsAdmin = (req, res, next) => {
  const { isAdm, uuid } = req.use;
  const id = req.params.uuid;

  if (uuid === id || isAdm) {
    next();
  }
  return res.status(401).json({
    message: "Unauthorized",
  });
};

export default verifyIsAdmin;
