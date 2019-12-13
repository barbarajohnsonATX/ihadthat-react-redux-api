
//action needs a key of type

// Synchronous action creators
export const setCurrentUser = user => {
    return {
        type: 'SET_CURRENT_USER',
        user
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
    }
}


export const getCurrentUser = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/get_current_user",
            { credentials: "include",
              method: "GET",
              headers: { "Content-Type": "application/json" },
            })
            .then(r => r.json())
            .then(user => {
                console.log(user)
                if (user.error) {
                    alert(user.error)
                } else {
                    dispatch(setCurrentUser(user))
                }
            }


            )
    }
}

