const express = require("express");
const cors = require("cors");
require("dotenv/config");
const taskRoute = require("./routes/task.route");

const app = express();
const port = process.env.PORT;

app.use(express.json({}));
app.use(express.urlencoded({ extended: false }));
app.use(cors({origin: "http://localhost:5173", credentials: true}))

app.use("/tasks", taskRoute);

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
