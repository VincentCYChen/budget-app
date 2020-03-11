import React from 'react';
import TransactionList from './components/TransactionList.js';
import axios from 'axios';
import EntryForm from './components/EntryForm.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [
        {
          date: '01/01/2019',
          description: 'Skyba',
          amount: 49,
          transactionType: 'debit',
          category: 'Gym',
          accountName: 'Credit Card 1'
        },
        {
          date: '01/01/2019',
          description: 'Feedfish',
          amount: 60.8,
          transactionType: 'debit',
          category: 'Restaurants',
          accountName: 'Credit Card 1'
        },
        {
          date: '01/01/2019',
          description: 'Vinte',
          amount: 10.12,
          transactionType: 'debit',
          category: 'Shopping',
          accountName: 'Credit Card 1'
        },
        {
          date: '01/01/2019',
          description: 'Buzzshare',
          amount: 1150,
          transactionType: 'debit',
          category: 'Mortgage & Rent',
          accountName: 'Banking Account'
        }
      ],
      budget: { budget: null }
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.setup();
  }

  setup() {
    axios.get('/hey').then(results => {
      console.log('get results--->', results);
    });
  }

  handleDelete(id) {
    axios.delete(`/api/${id}`);
  }

  render() {
    return (
      <div className="App">
        <EntryForm />
        <TransactionList
          transactions={this.state.transactions}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
