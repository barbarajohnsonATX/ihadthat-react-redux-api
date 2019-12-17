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
            return null

        case "ADD_TOY_OWNERSHIP_SUCCESS":
            //state is user
            let newState = Object.assign({}, state)
            newState.toys.push(action.toy)
            //action.toy, action.user is the toy with new owner
            //console.log("newState", newState)
             return newState

        default:
            return state
    }
}

