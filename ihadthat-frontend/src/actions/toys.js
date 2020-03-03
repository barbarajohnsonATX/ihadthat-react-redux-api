import { resetToyForm } from "./toyForm";
import { getToyOwnerships } from "./toyOwnerships";

// ** Synchronous Actions Creators **
// Action creators create actions which are plain objects → 
// Actions are dispatched to the store → 
// the store invokes reducers → 
// reducers generate new state 

export const fetchToysSuccess = toys => {
  return {
    type: "GET_ALL_TOYS_SUCCESS",
    toys
  };
};


export const addToy = toy => {
    return {
      type: "CREATE_TOY_SUCCESS",
      toy
    };
  };


 
// ** Asynchronous Action Creators **
// If a function (e.g. a thunk) is dispatched, redux-thunk calls that function, passing in the store's dispatch and getState. 
// The middleware intercepts the thunk so it does not go directly to the reducer 
// When that async fetch resolves,the callback can dispatch a normal action to the store. 
 
export const getAllToys = () => {
  //thunk is function returned by another function
  //allows dispatch of actions inside the returned function
  return dispatch => {
     dispatch({type: 'LOADING'})

    //fetch returns a promise we are waiting to resolve
    return (
      fetch("http://localhost:3000/api/v1/toys", {
        credentials: "include",
        method: "GET",
        headers: { "Content-Type": "application/json" }
      })
        //when resolved, parse response data to JSON
        .then(r => r.json())
        //dispatch action to set toys and send to reducer to update state
        .then(toys => {
          dispatch(fetchToysSuccess(toys));
          dispatch(getToyOwnerships());

         })
        //if Promise is rejected
        .catch(error => {
          console.log("Error: ", error);
          })
    );
  };

   
};

 


export const createToy = toy => {
    return dispatch => {
      return fetch("http://localhost:3000/api/v1/toys", {
        credentials: "include",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(toy)
      })
        .then(r => r.json())
        .then(toy => {
          dispatch(addToy(toy));
          dispatch(resetToyForm());
        });
    };
  };

  
