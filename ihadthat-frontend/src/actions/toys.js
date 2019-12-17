import { resetToyForm } from "./toyForm"
import { setToyOwnership} from "./currentUser"


// ** Actions Creators **
export const setToys = toys => {
     return {
      type: "GET_TOYS_SUCCESS",
      toys
    }
  }



  export const addToy = (toy) => {
    return {
      type: "CREATE_TOY_SUCCESS",
      toy
    }
  }



export const getToys = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/toys",
            { credentials: "include",
              method: "GET",
              headers: { "Content-Type": "application/json" },
            })
            .then(r => r.json())
            .then(toys => {
                console.log("toys", toys)
                if (toys.error) {
                    alert(toys.error)
                } else {
                    //debugger
                    dispatch(setToys(toys))
                }
            }


            )
    }
}

export const createToy = ( toy ) => {
    return dispatch => {  
        return fetch("http://localhost:3000/api/v1/toys",
            { 
                credentials: "include",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(toy)
            })
       
      .then(r => r.json() )
      .then(toy => {
        dispatch(addToy(toy))
        dispatch(resetToyForm())
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
      .then( dispatch(setToyOwnership(toy, user)))
     
    }
}
