const initialState = {
    username: '',
    email: '',
    toys: []
  }

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_CURRENT_USER": 
            return action.user
        case "CLEAR_CURRENT_USER":
            return initialState

        case "GET_MY_TOYS_SUCCESS": 
            let newStateWithClaim = Object.assign({}, state)
            newStateWithClaim.toys.map(t => t.claimed="true")
             return newStateWithClaim

        case "ADD_TOY_OWNERSHIP_SUCCESS":
            let newState = Object.assign({}, state)
            newState.toys.push(action.toy)
            return newState
            
               
 
        case "REMOVE_TOY_OWNERSHIP_SUCCESS":
            let userRemovedToy = Object.assign({}, state)        
            let newList = []
            userRemovedToy.toys.map(toy => {
                if (toy.id !== action.toy.id) {
                    newList.push(toy)
                }
            })
            userRemovedToy.toys = newList
              
            return userRemovedToy      
       

        default:
            return state
    }
}

