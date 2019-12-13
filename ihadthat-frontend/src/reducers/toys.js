export default (state = [], action) => {
    switch (action.type) {
        case "GET_TOYS_SUCCESS": 
            return action.toys

        default:
            return state
    }
}