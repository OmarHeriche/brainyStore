const CustomErr = require("./err");

const handle_error = (err, req, res, next) => {
  if (err instanceof CustomErr) {
    return res.status(err.status).json({ msg: err.message });
  }
  res.status(500).json({ msg: "some thing went wrong" });
};
module.exports = handle_error;
