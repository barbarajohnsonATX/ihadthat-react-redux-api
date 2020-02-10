// import { getMyToys } from '../actions/currentUser';


// Synchronous action creators
export const setToyOwnerships = (toyOwnerships) => {
    return {
        type: 'GET_TOY_OWNERSHIPS_SUCCESS',
        toyOwnerships
        
    }
}

export const setToyOwnership = (toyOwnership, user, toy) => {
    return {
        type: "ADD_TOY_OWNERSHIP_SUCCESS",
        toyOwnership,
        user, 
        toy
         
    }
}

export const removeToyOwnership = (toyOwnership, user, toy) => {
    return {
        type: "REMOVE_TOY_OWNERSHIP_SUCCESS",
        toyOwnership,
        user, 
        toy
         
    }
}


export const getToyOwnerships = () => {

    return dispatch => {  
        return fetch(`http://localhost:3000/api/v1/toy_ownerships/`,
            { 
                credentials: "include",
                method: "GET",
                headers: { "Content-Type": "application/json" },
             })
       
      .then(r => r.json() )
      .then(toy_ownerships => {
        console.log("toy_ownerships", toy_ownerships)
        if (toy_ownerships.error) {
            alert(toy_ownerships.error)
        } else {
 
             dispatch(setToyOwnerships(toy_ownerships))

        }     
    })
}
}


export const claimToy = ( toy, user ) => {
        const newData = {
           user_id: user.id,
           toy_id: toy.id
       }
       console.log("newData", newData)
    
        return dispatch => {  
            return fetch(`http://localhost:3000/api/v1/toy_ownerships/`,
                { 
                    credentials: "include",
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(newData)
                })
           
          .then(r => r.json() )
          .then( toyOwnership => {
              dispatch(setToyOwnership(toyOwnership, user, toy)) 
               
          })
           
         }
    }

    export const unclaimToy = ( to, toy, user ) => {
        let selectedToyOwnership = to.find(to =>  (to.user_id === user.id && to.toy_id === toy.id))
        console.log("to.id", selectedToyOwnership.id)
            

        return dispatch => {  

            return fetch(`http://localhost:3000/api/v1/toy_ownerships/${selectedToyOwnership.id}`,
                { 
                    credentials: "include",
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                })
           
          .then(r => r.text() )
          .then(toyOwnership => {
              console.log(toyOwnership)
               
               
            dispatch(removeToyOwnership( selectedToyOwnership, user, toy)) 

          })
      
         
        }
    }