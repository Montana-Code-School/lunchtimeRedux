
const initialState = {
  text: "",
  cuisineList: [
    {
      foodOrigin: "greek",
      tasty: true,
      lunch: "pasta",
      drink: "green tea",
      chitchat: "talkie talkie"

    },
    {
      foodOrigin: "british",
      tasty: false,
      lunch: "boiled racoon",
      drink: "scotch",
      chitchat: "'ello bloody hell ye bloody git"
    },
    {
      foodOrigin: "mexican",
      tasty: true,
      lunch: "enchiladas",
      drink: "chili margarita",
      chitchat: "hola que pasa amigo"
    }
  ]
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CUISINE":
      return {
        ...state,
        cuisineList: [...state.cuisineList, { ...action.payload }]
      }
    case "ADD_TEXT_TO_STORE":
      return {
        ...state,
        text: action.payload,
      }
    default:
      return state
  }

}

export default rootReducer