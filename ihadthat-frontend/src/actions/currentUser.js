import { clearLoginForm } from '../actions/loginForm';
import { resetSignupForm } from '../actions/signupForm';

//action needs a key of type

// Synchronous action creators
export const setCurrentUser = user => {
    return {
        type: 'SET_CURRENT_USER',
        user 
    }
}



export const setMyToys = (user, toys) => {
    return {
     type: "GET_MY_TOYS_SUCCESS",
     user,
     toys
      
     
   }
 }

export const clearCurrentUser = () => {
    return {
        type: 'CLEAR_CURRENT_USER'
    }
}


// Asynchronous action creators
export const login = credentials => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/login",
            { credentials: "include",
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(credentials)
            })
            .then(r => r.json())
            .then(user => {
                console.log(user)
                if (user.error) {
                    alert(user.error)
                } else {
                    console.log("user:", user)
                    dispatch(setCurrentUser(user))
                    dispatch(getMyToys(user))
                 }
            }


            )
    }
}


export const logout = () => {
    return dispatch => {
        dispatch(clearCurrentUser())
        return fetch('http://localhost:3000/api/v1/logout', {
            credentials: "include",
            method: "DELETE"
        }) 
        .then(dispatch(clearLoginForm()))

     }
}


// export const getCurrentUser = () => {
//     return dispatch => {
//         return fetch("http://localhost:3000/api/v1/get_current_user",
//             { credentials: "include",
//               method: "GET",
//               headers: { "Content-Type": "application/json" },
//             })
//             .then(r => r.json())
//             .then(user => {
//                 console.log(user)
//                 if (user.error) {
//                     alert(user.error)
//                 } else {
//                   debugger
//                     dispatch(setCurrentUser(user))
 
//                 }
//             }


//             )
//     }
//}

export const getMyToys = (user) => {
    return dispatch => {
        return fetch(`http://localhost:3000/api/v1/users/${user.id}`,
            { credentials: "include",
              method: "GET",
              headers: { "Content-Type": "application/json" },
            })
            .then(r => r.json())
            .then((u, t) => {
                console.log("user", u)
                 
                if (u.error) {
                    alert(u.error)
                } else {
                    dispatch(setMyToys(u, t))
                }
            }


            )
    }
}


export const signup = (credentials) => {
    return dispatch => {

      const userInfo = {
        user: credentials
      }
      console.log("userInfo", userInfo)

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
            alert(user.errors)
          } else {
              console.log("response data", user)
               
            dispatch(setCurrentUser(user))
             dispatch(resetSignupForm())
           }
        })
        .catch(console.log)
    }
  }
