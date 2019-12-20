 export default (state = [], action) => {
    
    switch (action.type) {
        case "GET_TOY_OWNERSHIPS_SUCCESS": 
            return action.toyOwnerships
               
        case "ADD_TOY_OWNERSHIP_SUCCESS":
             return state.concat(action.toyOwnership);

        case "REMOVE_TOY_OWNERSHIP_SUCCESS":
            return state.filter(to => to!= action.toyOwnership );
                 

        default:
            return state
    }
}