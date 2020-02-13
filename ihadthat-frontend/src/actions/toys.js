import { resetToyForm } from "./toyForm"
import { getToyOwnerships } from "./toyOwnerships"

// ** Actions Creators **
export const setToys = toys => {
     return {
      type: "GET_TOYS_SUCCESS",
      toys,
       
    }
  }



  export const addToy = (toy) => {
    return {
      type: "CREATE_TOY_SUCCESS",
      toy
    }
  }



export const getToys = () => {
  console.log("c")
    return dispatch => {
      dispatch({type: 'REQUESTING'})

      //fetch returns a promise we are waiting to resolve
        return fetch("http://localhost:3000/api/v1/toys",
            { credentials: "include",
              method: "GET",
              headers: { "Content-Type": "application/json" },
            })
            //when resolved, parse response data to JSON
            .then(r => r.json())
            //dispatch action to set toys and send to reducer to update state
            .then(toys => {
                dispatch(setToys(toys))
                dispatch(getToyOwnerships());
                dispatch({type: 'LOADED'})
            })
            .catch(error => dispatch({type: 'ERROR'}))

    }

    //console.log("e")
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