export default (state = "1.2.3", action) => {

    switch (action.type) {
      case 'REQUESTING':
        return "requesting ...";
      case 'LOADED':
          return "";
 
  
       default:
        return state;
    }
  }