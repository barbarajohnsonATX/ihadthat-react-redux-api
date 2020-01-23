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
        return fetch("http://localhost:3000/api/v1/toys",
            { credentials: "include",
              method: "GET",
              headers: { "Content-Type": "application/json" },
            })
            .then(r => r.json())
            .then(toys => {
                //console.log("toys", toys)
                console.log("d")
                if (toys.error) {
                    alert(toys.error)
                } else {
                    //debugger
                    dispatch(setToys(toys))
                    dispatch(getToyOwnerships());
                }
            }


            )
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
 



