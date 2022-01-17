import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './Components/Budget.js';
import Remaining from './Components/Remaining.js';
import BudgetSpent from './Components/BudgetSpent.js';
import ExpenseList from './Components/ExpenseList.js';
import AddExpenseForm from './Components/AddExpenseForm.js';
import {AppProvider} from './Context/AppContext.js';
function App() {
  return (
    <AppProvider>
    <div className="container">
      <h1 className="mt-3">Budget App</h1>
      <div className="row mt-3">
        <div className="col-sm md-4">
          <Budget/>
        </div>
        <div className="col-sm  md-4">
          <Remaining/>
        </div>
        <div className="col-sm  md-4">
          <BudgetSpent/>
        </div>

      </div> 
      <h2 className="mt-3">Expenses</h2>
      <div className="row mt-3">
       <div className="col-sm">
         <ExpenseList />
       </div>
      </div>
      <h3 className="mt-3">Add Expense</h3>
      <div className="mt-3">
        
          <AddExpenseForm/>
       
      </div>

    </div>
    </AppProvider>
  );
}

export default App;
