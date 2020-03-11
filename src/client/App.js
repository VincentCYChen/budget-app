import React from "react";
import TransactionList from "./components/TransactionList.js";
import axios from "axios";
import EntryForm from "./components/EntryForm.js";
import BudgetForm from "./components/BudgetForm.js";

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
      .get("/api")
      .then(results => {
        console.log("get results--->", results.data);
        this.setState({ transactions: results.data });
      })
      .catch(err => console.log(err));
  }

  handleDelete(e) {
    console.log("id--->", e.target.id);
    let id = e.target.id;
    axios.delete(`/api/${id}`).then(() => this.getList());
  }

  getBudget() {
    axios
      .get("/api/budget")
      .then(({ data }) => {
        console.log("results of budget api get request: ", data[0]);
        this.setState({ budget: data[0].amount });
      })
      .catch(err => {
        console.log("ERROR (from getting budget): ", err);
      });
  }

  handleBudgetChange(e) {
    e.preventDefault();
    this.setState({ budget: e.target.value });
  }

  handleBudgetSubmit(e) {
    e.preventDefault();
    if (this.state.budget !== null || this.state.budget !== "") {
      axios
        .post(`/api/budget`, { budget: this.state.budget })
        .then(results => {
          console.log("results of budget update: ", results);
          this.getBudget();
        })
        .catch(err => {
          console.log("ERROR (resulting from budget update):", err);
        });
    }
  }

  render() {
    return (
      <div className="App">
        <BudgetForm
          budget={this.state.budget}
          handleBudgetChange={this.handleBudgetChange}
          handleBudgetSubmit={this.handleBudgetSubmit}
        />
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
