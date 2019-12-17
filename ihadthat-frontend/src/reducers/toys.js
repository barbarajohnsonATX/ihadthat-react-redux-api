 
 
    


export default (state = [], action) => {
    
    switch (action.type) {
        case "GET_TOYS_SUCCESS": 
            return action.toys

        case "CREATE_TOY_SUCCESS":
             return state.concat(action.toy);

        case "ADD_TOY_OWNERSHIP_SUCCESS":
            //state is toys 
            //console.log("state", state)
            //action.toy, action.user is the toy with new owner
            //console.log("action", action)
            
              state.forEach(t => {
                if (t.id === action.toy.id) {
                    t.users.push(action.user)
                } 
                 

             })

            //   console.log("state", state)
 
            return state

               
             

                
            
        default:
            return state
    }
}