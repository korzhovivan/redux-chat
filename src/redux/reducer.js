import { ADD_MESSAGE } from './types';



const initialState = {arr: []}

export default function messageReducer(state = initialState, action) {


    switch (action.type) {
        case ADD_MESSAGE:
            return{
                ...state,
                arr: [
                    ...state.arr,
                    action.payload
                ]
            }
    
        default:
            return state
    }
}