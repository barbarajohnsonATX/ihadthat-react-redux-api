export default (state = [], action) => {
    
    switch (action.type) {
        case "GET_TOY_OWNERSHIPS_SUCCESS": 
            return action.toyOwnerships
               
        case "ADD_TOY_OWNERSHIP_SUCCESS":
              //concat returns copy, does not alter state
             return state.concat(action.toyOwnership);

        case "REMOVE_TOY_OWNERSHIP_SUCCESS":
            
            return state.filter(to => to.id !== action.toyOwnership.id );
                 

        default:
            return state
    }
}
