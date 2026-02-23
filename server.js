const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public")); // serve frontend files
app.use(express.json()); // parse JSON body

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Example logic (fake login check)
  if (username === "ahmar" && password === "12345") {
    res.send("✅ Login successful!");
  } else {
    res.send("❌ Invalid username or password.");
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
