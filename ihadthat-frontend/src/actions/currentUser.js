import { clearLoginForm } from "../actions/loginForm";
import { resetSignupForm } from "../actions/signupForm";
import store from '../store'
//import history from '../history';

//action needs a key of type

// Synchronous action creators
export const setCurrentUser = (user, toys)  => {
  return {
    type: "SET_CURRENT_USER",
    user,
    toys
  };
};

export const setMyToys = (user, toys)=> {
  return {
   // type: "GET_MY_TOYS_SUCCESS",
    type: "GET_USER_TOYS_SUCCESS",

    user,
    toys
  };
};


export const markAsClaimed = (user, toys)=> {
  return {
    type: "MARK_AS_CLAIMED",

    user,
    toys
  };
};


export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  };
};

// Asynchronous action creators
export const login = credentials => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/login", {
      credentials: "include",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials)
    })
      .then(r => r.json())
      .then(user => {
        if (user.error) {
          alert(user.error);
        } else {
           dispatch(setCurrentUser(user));
            
           dispatch(getMyToys(user));
  
        }
      });
  };
};

export const logout = () => {
  return dispatch => {
    dispatch(clearCurrentUser());
    return fetch("http://localhost:3000/api/v1/logout", {
      credentials: "include",
      method: "DELETE"
    })
    .then(r => r.json())

    .then( () => {
      dispatch(clearLoginForm())
     //history.push("/toys")

    }

         
     
    )

 
  };
 
};

export const getMyToys = user => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/users/${user.id}`, {
      credentials: "include",
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(r => r.json())
      .then(u => {
        if (u.error) {
          alert(u.error);
        } else {
            let t = store.getState().toysReducer
          dispatch(setMyToys(u, t.toys));
          
          dispatch(markAsClaimed(u,t.toys));
        }
      });
  };
};

export const signup = credentials => {
  return dispatch => {
    const userInfo = {
      user: credentials
    };
    console.log("userInfo", userInfo);

    return fetch("http://localhost:3000/api/v1/signup", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(r => r.json())
      .then(user => {
        if (user.errors) {
          alert(user.errors);
        } else {
          console.log("response data", user);

          dispatch(setCurrentUser(user));
          dispatch(resetSignupForm());
        }
      })
      .catch(console.log);
  };
};
