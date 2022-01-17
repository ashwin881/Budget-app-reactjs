
import { createContext,useReducer} from "react"

export const AppReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
         
			return {...state,expenses: [...state.expenses, action.payload],}
       
       
        case 'DELETE_EXPENSE':
            return {
                ...state,expenses: state.expenses.filter((expense) => expense.id !== action.payload),
            }
		
            case 'SET_BUDGET':
                return {
                    ...state,
                    budget: action.payload,
                }
		default:
			return state;
	}
};
const initialState ={
    budget:10000,
    expenses:[
        {id:1,name:'shopping',cost:'130'},
        {id:2,name:'sleep',cost:'178'},
        
]
};
export const AppContext = createContext();

export const AppProvider=(props)=>{
    console.log(props);
     const [state,dispatch]=useReducer(AppReducer,initialState);
    
     return (<AppContext.Provider value={{
         budget:state.budget,expenses:state.expenses,dispatch}
     }>{props.children}</AppContext.Provider>)
};