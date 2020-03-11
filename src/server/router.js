var express = require("express");
var { getData, inputData, deleteData, updateBudget, updateData } = require("./controller");
var router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

router.get("/", (req, res) => {
  getData(req, res);
});
router.post("/", (req, res) => {
  // post data from input form into the database
  inputData(req, res);
});
router.post("/budget", (req, res) => {
  // post data from budget input form
  updateBudget(req, res);
});
router.delete("/:id", (req, res) => {
  // delete a given record in the database by a given id
  deleteData(req, res);
});
router.put("/:id", (req, res) => {
  // update id in database with provided data
  updateData(req, res);
});

module.exports = router;
