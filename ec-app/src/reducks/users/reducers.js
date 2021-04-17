import initialState from '../store/initialState';
import * as Actions from './actions';



export const UsersReducer = (state = initialState.users, action) => {
    switch(action.type) {
        case Actions.SIGN_IN:
            return {
                ...state,
                ...action.payload
            }
        case Actions.SIGN_OUT:
            return {
                ...action.payload
            }
        case Actions.FETCH_PRODUCTS_IN_CART:
            return {
                ...state,
                cart: [...action.payload]
            }
        case Actions.FETCH_ORDERS_HISTORY:
            return {
                ...state,
                orders: [...action.payload]
            }
        default: 
            return state
    }
}

