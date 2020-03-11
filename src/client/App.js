import React from 'react';
import TransactionList from './components/TransactionList.js';
import axios from 'axios';
import EntryForm from './components/EntryForm.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      budget: { budget: null }
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
        <TransactionList
          transactions={this.state.transactions}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
