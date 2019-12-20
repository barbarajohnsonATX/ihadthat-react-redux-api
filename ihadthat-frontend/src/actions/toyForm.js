// ** Actions Creators **
export const updateToyFormData = toyFormData => {
    return {
      type: 'UPDATED_DATA',
      toyFormData
    }
}

export const resetToyForm = () => {
    return {
      type: "RESET_TOY_FORM",
  
    }
}

 
