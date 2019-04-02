
export const addCuisine = (newCuisine) => ({
  type: 'ADD_CUISINE',
  payload: { ...newCuisine },
})