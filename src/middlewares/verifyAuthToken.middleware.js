import jwt from "jsonwebtoken";

const verifyAuthToken = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Missing Authorization Token" });
  }

  token = token.split(" ")[1];
  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.use = {
      uuid: decoded.sub,
      isAdm: decoded.isAdm,
    };

    next();
  });
};

export default verifyAuthToken;
