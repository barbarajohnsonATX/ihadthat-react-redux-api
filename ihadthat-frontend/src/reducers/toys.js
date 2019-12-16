 
 


export default (state = [], action) => {
    
    switch (action.type) {
        case "GET_TOYS_SUCCESS": 
            return action.toys

        case "CREATE_TOY_SUCCESS":
             return state.concat(action.toy);

        default:
            return state
    }
}