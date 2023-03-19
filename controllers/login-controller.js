import jwt from "jsonwebtoken";
import Login from "../model/LoginSchema.js";

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Login.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.comparePassword(password, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ message: "Something went wrong" });
      }

      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const token = jwt.sign({ email: user.email, id: user._id }, "secret", {
        expiresIn: "1h",
      });

      res.status(200).json({ user, token });
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export { login };
