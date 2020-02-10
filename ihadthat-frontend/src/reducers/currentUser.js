const initialState = {
    username: '',
    email: '',
 
   toys: [{name: '', description: '', url: '', users: []}]
  }

   

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_CURRENT_USER":       
            return action.user
    
  
        case "CLEAR_CURRENT_USER":
            return initialState

        case "GET_MY_TOYS_SUCCESS": 
             return {...state, toys: action.user.toys.map( t => {
                t.claimed="true"
                return t
            })}
 



        case "ADD_TOY_OWNERSHIP_SUCCESS":
            return {...state, toys: state.toys.concat(action.toy)}
  

            
        case "REMOVE_TOY_OWNERSHIP_SUCCESS":
            return {...state, toys: action.user.toys.filter( t => t.id !== action.toy.id)}

          
       
        default:
            return state
    }
}