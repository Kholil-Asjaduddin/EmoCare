const { auth } = require("../config/firebaseAdmin");
const Account = require("../models/account");

const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }
    
    const newAccount = new Account(email, password);
    
    const userRecord = await auth.createUser({
      email: newAccount.email,
      password: newAccount.password,
    });
    console.log("User record created:", userRecord);
    res.status(201).json({
      message: "Account created successfully",
      userId: userRecord.uid,
      email: userRecord.email,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { signup };
