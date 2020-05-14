const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try{
    const token = req.headers.authorization.split(" ")[1];
<<<<<<< HEAD
    const decodedToken = jwt.verify(token, "secret_this_should_be_longer");
=======
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
>>>>>>> 8e2c8daecafee80adf2baedd9d851df5b8d9bf7a
    req.userData = {email: decodedToken.email, userId: decodedToken.userId};
    next();
  }
  catch(error){
    res.status(401).json({
<<<<<<< HEAD
      message: "Auth failed!"
=======
      message: "You are not authenticated!"
>>>>>>> 8e2c8daecafee80adf2baedd9d851df5b8d9bf7a
    });
  }
};
