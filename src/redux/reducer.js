const initialState = { arr: new Array() }



export default function messageReducer(state = initialState, action) {


    switch (action.type) {
        case 'ADD_MESSAGE':
            //initialState.arr.push(action.payload)
            let new_array =  initialState.arr
            new_array.push(action.payload)
            return {
                arr: new_array
              }
                
        break;
    
        default:
            return initialState
        break;
    }
}