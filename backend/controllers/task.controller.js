const mysql = require("mysql");
const password = process.env.PASSWORD;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: password,
  database: "nodemysql",
  multipleStatements: true,
});
db.connect((err) => {
  if (err) throw err;
  console.log("Connected");
});

const getTasks = (_, res) => {
  const sql = "SELECT * FROM Tasks";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};
const getTask = (req, res) => {
  const sql = `SELECT * FROM Tasks WHERE taskID = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    if (!result.length) {
      res.json("Task does not exist.");
      return;
    }
    res.json(result);
  });
};
const addTask = (req, res) => {
  if (!req.body.taskName || !req.body.taskDescription) {
    res.status(400).json("Blank input fields are not allowed.");
    return;
  }
  const sql = `INSERT INTO Tasks (taskName, taskDescription) VALUES ('${req.body.taskName}', '${req.body.taskDescription}')`;
  db.query(sql, (err) => {
    if (err) throw err;
    res.json("Added task successfully.");
  });
};
const editTask = (req, res) => {
  const selectedTask = `SELECT * FROM Tasks WHERE taskID = ${req.params.id}`;
  db.query(selectedTask, (err, result) => {
    if (err) throw err;
    if (!result.length) {
      res.json("Task does not exist");
      return;
    }
    req.body.taskName ||= result[0].taskName;
    req.body.taskDescription ||= result[0].taskDescription;
    const updateTask = `UPDATE Tasks SET taskName = '${req.body.taskName}', taskDescription = '${req.body.taskDescription}' WHERE taskID = ${req.params.id}`;
    const sql = `${selectedTask}; ${updateTask}`;
    db.query(sql, (err) => {
      if (err) throw err;
      res.json(`Edited task successfully.`);
    });
  });
};
const deleteTask = (req, res) => {
  const sql = `DELETE FROM Tasks WHERE taskID = '${req.params.id}'`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    if (result.affectedRows < 1) {
      res.json("Task does not exist.");
      return;
    }
    res.json("Deleted task successfully.");
  });
};

module.exports = {
  getTasks,
  getTask,
  addTask,
  editTask,
  deleteTask,
};
