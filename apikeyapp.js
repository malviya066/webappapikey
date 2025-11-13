import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware to check API key
app.use((req, res, next) => {
  const clientKey = req.header("x-api-key");
  const serverKey = process.env.API_KEY;

  if (!clientKey || clientKey !== serverKey) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
});

app.get("/data", (req, res) => {
  res.json({ message: "Authorized access granted ✅" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));