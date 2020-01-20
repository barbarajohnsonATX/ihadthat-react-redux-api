const initialState = {
    username: '',
    email: '',
    toys: [{name: '', description: '', url: '', users: [{}] }]
  }

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_CURRENT_USER": 
            return action.user

        case "CLEAR_CURRENT_USER":
            return initialState

        case "GET_MY_TOYS_SUCCESS": 
           action.user.toys.map(t => t.claimed = "true")
           return action.user

        case "ADD_TOY_OWNERSHIP_SUCCESS":
            let newState = Object.assign({}, state)
             newState.toys.push(action.toy)
            return newState
            
        case "REMOVE_TOY_OWNERSHIP_SUCCESS":
            let userRemovedToy = Object.assign({}, state)        
            let newList = []
            userRemovedToy.toys.forEach(toy => {
                if (toy.id !== action.toy.id) {
                      newList.push(toy)
                      return toy
                } else {
                    toy.claimed = "false"
                }
            })

            userRemovedToy.toys = newList
            return userRemovedToy      
       
        default:
            return state
    }
}