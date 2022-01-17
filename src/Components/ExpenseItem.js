import React from 'react'
import { TiDelete } from 'react-icons/ti';
import {AppContext} from '../Context/AppContext';
import {useContext} from 'react';
const ExpenseItem = ({name ,cost, id}) => {
    const {dispatch} = useContext(AppContext);
    const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: id,
		});
	};
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center ">
            {name}
            <div>
            <span className="badge bg-secondary">₹{cost} </span>
            
            <TiDelete size="1.5em" onClick={handleDeleteExpense}/>
            </div>
            
        </li>
    )
}

export default ExpenseItem
