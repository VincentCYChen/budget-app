import React from 'react';
import ReactDOM from 'react-dom';

function BudgetForm(props) {
  // will be passed down handleBudgetChange (updates current state of budget on each character stroke)
  // pass down this.state.budget as budget (allows you to have controlled component of budget)
  // will be passed down handleBudgetSubmit (sends budget state in axios request to update budget table in DB)
  return (
    <div className="box">
      <form className="field has-addons">
        <div className="field-body">
          <label className="label">
            Monthly Budget:{' '}
            <div className="control ">
              <input
                className="input"
                onChange={props.handleBudgetChange}
                value={props.budget}
                type="text"
              ></input>
              <div className="control is-inline"></div>
              <button
                className="button is-primary is-rounded"
                onClick={props.handleBudgetSubmit}
              >
                Update!
              </button>
              <br/>
              <p> {props.data ? props.data.month : ''} Spending: ${props.data ? Math.round(props.data.total) : ''}</p>
              <p> {props.data ? props.data.month : ''} Budget Left: ${props.data ? Math.round(props.data.budget - props.data.total) : ''}</p>
            </div>
          </label>
        </div>
      </form>
    </div>
  );
}

export default BudgetForm;
