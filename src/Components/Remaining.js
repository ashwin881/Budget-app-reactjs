import React from 'react'
import {useContext} from 'react';
import {AppContext} from '../Context/AppContext';
const Remaining = () => {
    const {budget,expenses} = useContext(AppContext);
    const totalExpense= expenses.reduce((total,item)=>{return total = total+parseInt(item.cost)},0)
    const AlertColor = totalExpense>=budget/2 ? 'alert-danger':'alert-success';
    return (
        <div className= {`alert ${AlertColor}`}>
           <span>Remaining : ₹ {budget-totalExpense}</span> 
            
        </div>
    )
}

export default Remaining
