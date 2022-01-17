import React from 'react'
import ExpenseItem from './ExpenseItem.js';
import { AppContext } from '../Context/AppContext.js'; 
import {useContext } from 'react';
const ExpenseList = () => {
    const {expenses} = useContext(AppContext);
    return (
        <ul className="list-group">
            {expenses.map((expense)=>(
            <ExpenseItem id={expense.id} cost={expense.cost} name={expense.name} />
            ))}
        </ul>

    )
}

export default ExpenseList
