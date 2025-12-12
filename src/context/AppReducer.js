// AppReducer.js
export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_QUANTITY': {
            const new_expenses = state.expenses.map((expense) => {
                if (expense.name === action.payload.name) {
                    return { ...expense, quantity: expense.quantity + action.payload.quantity };
                }
                return expense;
            });
            return {
                ...state,
                expenses: new_expenses,
            };
        }
        case 'RED_QUANTITY': {
            const new_expenses = state.expenses.map((expense) => {
                if (expense.name === action.payload.name) {
                    const newQuantity = expense.quantity - action.payload.quantity;
                    return { ...expense, quantity: Math.max(0, newQuantity) };
                }
                return expense;
            });
            return {
                ...state,
                expenses: new_expenses,
            };
        }
        case 'DELETE_ITEM': {
            const new_expenses = state.expenses.map((expense) => {
                if (expense.name === action.payload.name) {
                    return { ...expense, quantity: 0 };
                }
                return expense;
            });
            return {
                ...state,
                expenses: new_expenses,
            };
        }
        case 'CHG_LOCATION': {
            return {
                ...state,
                Location: action.payload,
            };
        }
        default:
            return state;
    }
};