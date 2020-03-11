import React from 'react';
import ReactDOM from 'react-dom';

function BudgetForm(props) {
  // will be passed down handleBudgetChange (updates current state of budget on each character stroke)
  // pass down this.state.budget as budget (allows you to have controlled component of budget)
  // will be passed down handleBudgetSubmit (sends budget state in axios request to update budget table in DB)
  return (
    <form>
      Monthly Budget: <input onChange={props.handleBudgetChange} value={props.budget} type="text"></input>
      <button onClick={props.handleBudgetSubmit}>Update!</button>
    </form>
  );
}

export default BudgetForm;
