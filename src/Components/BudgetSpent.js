import React from 'react'
import {useContext} from 'react';
import {AppContext} from '../Context/AppContext';
const BudgetSpent = () => {
    const {expenses} = useContext(AppContext);
    const totalExpense= expenses.reduce((total,item)=>{return total = total+parseInt(item.cost)},0)
    
    return (
       
             <div className="alert alert-primary">
           <span>Total Expense : ₹{totalExpense}</span> 
            
        </div>
        
    )
}

export default BudgetSpent
