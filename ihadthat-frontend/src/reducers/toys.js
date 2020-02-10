const initialState = 
      [
        {
            name: "",
            description: "",
            users: [], 
            claimed: "false"
        }]
   
    



export default (state = initialState, action) => {
    
    switch (action.type) {
        case "GET_TOYS_SUCCESS": 
            return action.toys
  
        case "GET_MY_TOYS_SUCCESS": 

            let newStateWithClaims = [...state]
             newStateWithClaims.forEach(t => t.claimed="false")
 
             let userToys = action.user.toys.map( t => {
                 t.claimed="true"
                 return t
             })           

             
               
            //return udpated toys list with claimed="true"
            return newStateWithClaims.map(toy => userToys.find(t => t.id === toy.id) || toy)

             



        case "CREATE_TOY_SUCCESS":
            //concat does not change array
            return state.concat(action.toy);
       

        case "ADD_TOY_OWNERSHIP_SUCCESS":
             let newState = [...state]
             let newToy = action.toy
             newToy.claimed="true" 
             newToy.users.push(action.user)
             return newState
      
 
    case "REMOVE_TOY_OWNERSHIP_SUCCESS":
            let userRemoved = [...state]   
            let findToy = action.toy
            findToy.claimed="false" 
            findToy.users = findToy.users.filter( u => u.id !== action.user.id)

            return userRemoved 


            
        default:
            return state
    }
}