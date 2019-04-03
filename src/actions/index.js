
export const addCuisine = (newCuisine) => ({
  type: 'ADD_CUISINE',
  payload: { ...newCuisine },
})
export const addTextToStore = (newText) => ({
  type: 'ADD_TEXT_TO_STORE',
  payload: newText,
})