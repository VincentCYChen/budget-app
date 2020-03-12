const connection = require('./db/index');

module.exports = {
  getData: (req, res) => {
    // get all data on user transactions
    connection
      .queryAsync('SELECT * FROM transactions ORDER BY date DESC')
      .then(results => {
        res.send(results);
      })
      .catch(err => {
        console.log('ERROR (Cannot get all data): ', err);
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
    console.log('req body: ', req.body);
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
        console.log('result of inserting new data: ', result);
        res.send(result);
      })
      .catch(err => {
        console.log('ERROR (attempt to input new data): ', err);
        res.sendStatus(500);
      });
  },
  deleteData: (req, res) => {
    // access id params
    let id = req.params.id;
    // query database by id and delete that record
    connection
      .queryAsync(
        `DELETE FROM transactions
      WHERE id=?`,
        [id]
      )
      .then(result => {
        console.log('result of deleting data: ', result);
        res.send(result);
      })
      .catch(err => {
        console.log('ERROR (trying to delete record): ', err);
        res.sendStatus(500);
      });
  },
  updateData: (req, res) => {
    console.log('update id---->', req.params.id);
    console.log('update body---->', req.body);
    // access id from req params
    let id = req.params.id;
    // access data from req.body
    let data = req.body;
    // query database to replace data
    let options = [
      id,
      data.date,
      data.description,
      data.amount,
      data.transactionType,
      data.category,
      data.accountName
    ];
    connection
      .queryAsync(
        `REPLACE INTO transactions VALUES (?, ?, ?, ?, ?, ?, ?)`,
        options
      )
      .then(update => {
        console.log('result of updating data record: ', update);
        res.send(update);
      })
      .catch(err => {
        console.log('ERROR (resulting from attempt to update data): ', err);
        res.sendStatus(500);
      });
  },
  getBudget: (req, res) => {
    connection
      .queryAsync('SELECT amount FROM budget WHERE id=1')
      .then(results => {
        res.send(results);
      })
      .catch(err => {
        console.log('ERROR (retrieving budget from DB): ', err);
        res.sendStatus(500);
      });
  },
  updateBudget: (req, res) => {
    // access req.body data object of new budget
    let { budget } = req.body;
    // update given budget using index of 1
    connection
      .queryAsync(`REPLACE INTO budget VALUES (1, ?)`, [budget])
      .then(result => {
        console.log('result of updating budget: ', result);
        return connection.queryAsync(
          `SELECT * FROM budget
        WHERE id = 1`
        );
      })
      .then(results => {
        console.log('results of querying for update: ', results);
        res.send(results);
      })
      .catch(err => {
        console.log('ERROR (attempting to update budget): ', err);
        res.sendStatus(500);
      });
  }
};
