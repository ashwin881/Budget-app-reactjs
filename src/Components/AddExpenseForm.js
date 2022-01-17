import React from 'react'
import {useState,useContext} from 'react';
import {AppContext} from '../Context/AppContext';
import { v4 as uuidv4 } from 'uuid'
const AddExpenseForm = () => {
    const {dispatch}=useContext(AppContext);
    const [name,setName]= useState('');
    const [cost,setCost]= useState('');
    const OnSubmit = (event)=>{
        event.preventDefault();
        const expense={
            id:uuidv4(),
            name: name,
            cost:parseInt(cost),
            
        };
        dispatch({
			type: 'ADD_EXPENSE',
			payload: expense
		});
        
		setName('');
		setCost('');
       
    }
    return (
        <form onSubmit={OnSubmit}>
            <div className="row mt-3">
                <div className="col-sm col-lg-4">
                    <label for="name">Name</label>
                    <input type="text" className="form-control" required="required" id="name" value={name} onChange={(e)=>setName(e.target.value)}></input>
                </div>
                <div className="col-sm col-lg-4">
                    <label form="cost">Cost</label>
                    <input type="text" className="form-control" required="required" id="cost" value={cost} onChange={(e)=>setCost(e.target.value)}></input>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-sm">
                    <button className="btn btn-primary" type="submit">Save</button>
                </div>
            </div>
        </form>
    )
}

export default AddExpenseForm
