 
const initialState = [
    {
    name: "",
    description: "",
    users: [], 
    claimed: "false"
    }
]
export default (state = initialState, action) => {
    
    switch (action.type) {
        case "GET_TOYS_SUCCESS": 
            return action.toys

        case "GET_MY_TOYS_SUCCESS": 
            let newStateWithClaims = [...state]
            newStateWithClaims.forEach(t => t.claimed="false")
             let newToys = action.user.toys
             newToys.forEach(t => t.claimed="true")
              
  
 
            let newA= newStateWithClaims.map(toy => newToys.find(t => t.id === toy.id) || toy)
                    
              
            return newA



        case "CREATE_TOY_SUCCESS":
            return state.concat(action.toy);
       

        case "ADD_TOY_OWNERSHIP_SUCCESS":
        //     //state is toys 
        //     //console.log("state", state)
        //     //action.toy, action.user is the toy with new owner
        //     //console.log("action", action)
             let newState = [...state]
             
            newState.forEach(t => {
                if (t.id === action.toy.id) {
                     t.users.push(action.user)
                     t.claimed = "true"
                  } 
              })
             return newState

        case "REMOVE_TOY_OWNERSHIP_SUCCESS":
             
            let userRemoved = [...state]   
                 
            let newList = []
            let findToy = userRemoved.find(t => t.id === action.toy.id)
             findToy.claimed="false"
            findToy.users.map(user => {
                if (user.id !== action.user.id) {
                     newList.push(user)
                }
            })

            
            findToy.users = newList
             
            return userRemoved


            
        default:
            return state
    }
}