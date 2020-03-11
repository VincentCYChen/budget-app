import React from 'react';
import TransactionList from './components/TransactionList.js';
import axios from 'axios';
import EntryForm from './components/EntryForm.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      budget: { budget: null },
      showUpdate: false
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.getList = this.getList.bind(this);
  }

  componentDidMount() {
    this.getList();
  }

  getList() {
    axios
      .get('/api')
      .then(results => {
        console.log('get results--->', results.data);
        this.setState({ transactions: results.data });
      })
      .catch(err => console.log(err));
  }

  handleDelete(e) {
    console.log('id--->', e.target.id);
    let id = e.target.id;
    axios.delete(`/api/${id}`).then(() => this.getList());
  }

  render() {
    return (
      <div className="App">
        <EntryForm getList={this.getList} />
        <div>
          <table>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Transaction Type</th>
              <th>Category</th>
              <th>Account Name</th>
            </tr>
            {this.state.transactions.map(transaction => {
              return (
                <TransactionList
                  transaction={transaction}
                  handleDelete={this.handleDelete}
                />
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}

export default App;
