const initialState = 
{
    toys:[],
    currentUser: "",
    userToys: [],
    toyOwnerships: [],
    isLoading: false

}
      

export default (state = initialState, action) => {
    
    switch (action.type) {

        case 'LOADING':
            return {
                ...state,
                isLoading: true
            }
        case "GET_ALL_TOYS_SUCCESS": 
            return { ...state,
                    toys: action.toys,
                    isLoading: false
            }

        case "GET_TOY_OWNERSHIPS_SUCCESS": 
            return { ...state,
                    toyOwnerships: action.toyOwnerships,
            }
            
        case "SET_CURRENT_USER": 
            return { ...state,
                    currentUser: action.user,
            }

        case "GET_USER_TOYS_SUCCESS": 
            let myToys = action.user.toys.map(t => {
                t.claimed = "true"
                return t
            })
            return { ...state,
                    userToys:  myToys
            }
            
        case "MARK_AS_CLAIMED":
            let newArray = [...state.toys];
            let userToys = [ ...state.userToys]
                
            newArray.forEach( t => {
                t.claimed="false"
                userToys.map(toy => {
                    if(t.id === toy.id) {
                        t.claimed="true";
                    }     
                        
                    return t
                })         
            })
             
            return {
                ...state,
                toys: newArray,
            }
            
        case "ADD_TOY_OWNERSHIP_SUCCESS":
            let newToy = action.toy
            newToy.claimed="true" 
            let newList = [...state.toys]

            newList.forEach(t => {
                if (t.id === newToy.id) {
                    t.claimed="true"
                    t.users.push(action.user)

                }
             })

            return {
                ...state, 
                toyOwnerships: [...state.toyOwnerships, action.toyOwnership],
                userToys: [...state.userToys, newToy],
                toys: newList
            }

        case "REMOVE_TOY_OWNERSHIP_SUCCESS":
            let updateToys = [...state.toys]
            //let updateMyToys = [...state.userToys]

            updateToys.forEach(t => {
                if (t.id === action.toy.id) {
                    t.claimed="false"
                    t.users.splice(t.users.indexOf(action.user), 1)
                }
             })

            return {
                ...state,
                toyOwnerships: state.toyOwnerships.filter(to => to.id !== action.toyOwnership.id ),
                userToys:   state.userToys.filter(t => t.id !== action.toy.id ),
                toys: updateToys,
            }
            
         
        case "CREATE_TOY_SUCCESS":
            return {
                    ...state,
                    toys: [...state.toys, action.toy]
            }
       
                
        default:
            return state
    }
}