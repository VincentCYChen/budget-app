import React from 'react';
import TransactionList from './components/TransactionList.js';
import axios from 'axios';
import EntryForm from './components/EntryForm.js';
import BudgetForm from './components/BudgetForm.js';
import CloudCreator from './components/word-cloud.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      budget: null
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.getList = this.getList.bind(this);
    this.handleBudgetChange = this.handleBudgetChange.bind(this);
    this.handleBudgetSubmit = this.handleBudgetSubmit.bind(this);
    this.getBudget = this.getBudget.bind(this);
  }

  componentDidMount() {
    this.getList();
    this.getBudget();
  }

  getList() {
    axios
      .get('/api')
      .then(results => {
        console.log('get results--->', results.data);
        let transactions = results.data.map(transaction => {
          return {
            id: transaction.id,
            date: transaction.date.slice(0, 10),
            description: transaction.description,
            amount: transaction.amount,
            transactionType: transaction.transactionType,
            category: transaction.category,
            accountName: transaction.accountName
          };
        });
        this.setState({
          transactions: transactions
        });
      })
      .catch(err => console.log(err));
  }
  handleDelete(e) {
    console.log('id--->', e.target.id);
    let id = e.target.id;
    axios.delete(`/api/${id}`).then(() => this.getList());
  }

  getBudget() {
    axios
      .get('/api/budget')
      .then(({ data }) => {
        console.log('results of budget api get request: ', data[0]);
        this.setState({ budget: data[0].amount });
      })
      .catch(err => {
        console.log('ERROR (from getting budget): ', err);
      });
  }

  handleBudgetChange(e) {
    e.preventDefault();
    this.setState({ budget: e.target.value });
  }

  handleBudgetSubmit(e) {
    e.preventDefault();
    if (this.state.budget !== null || this.state.budget !== '') {
      axios
        .post(`/api/budget`, { budget: this.state.budget })
        .then(results => {
          console.log('results of budget update: ', results);
          this.getBudget();
        })
        .catch(err => {
          console.log('ERROR (resulting from budget update):', err);
        });
    }
  }

  render() {
    return (
      <div className="App">
        <CloudCreator transactions={this.state.transactions} />
        <BudgetForm
          budget={this.state.budget}
          handleBudgetChange={this.handleBudgetChange}
          handleBudgetSubmit={this.handleBudgetSubmit}
        />
        <EntryForm getList={this.getList} />
        <div>
          <table>
            <thead>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Transaction Type</th>
              <th>Category</th>
              <th>Account Name</th>
            </thead>
            <tbody>
              {this.state.transactions.map(transaction => {
                return (
                  <TransactionList
                    transaction={transaction}
                    handleDelete={this.handleDelete}
                    getList={this.getList}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
