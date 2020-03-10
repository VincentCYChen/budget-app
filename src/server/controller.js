const connection = require("./db/index");

module.exports = {
  getData: (req, res) => {
    // get all data on user transactions
    connection
      .queryAsync("SELECT * FROM transactions")
      .then(results => {
        res.send(results);
      })
      .catch(err => {
        console.log("ERROR (Cannot get all data): ", err);
        res.sendStatus(500);
      });
  },
  inputData: (req, res) => {
    // pull data from request
    let {
      date,
      description,
      amount,
      transactionType,
      category,
      accountName
    } = req.body;
    //console.log('req body: ', req.body);
    let options = [
      date,
      description,
      amount,
      transactionType,
      category,
      accountName
    ];
    // insert the data in the database
    connection
      .queryAsync(
        `INSERT INTO transactions (date, description, amount, transactionType, category, accountName) VALUES (?, ?, ?, ?, ?, ?)`,
        options
      )
      .then(result => {
        console.log("result of inserting new data: ", result);
        res.send(result);
      })
      .catch(err => {
        console.log("ERROR (attempt to input new data): ", err);
        res.sendStatus(500);
      });
  }
};
