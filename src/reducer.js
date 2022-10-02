export const initialState = {
  words: 275,
  page: 1,
  startingPrice:4.3,
  gigWork:[],
  time: { duration: "6 Hours", durationPrice: 6.5 },
  almaMater: { level: "School", levelPrice: 0.7 },
  totalPrice: 0
};

export function dispatcher(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        words: state.words + 275,
        page: state.page + 1,
        price: state.price + 11.2,
      };
    case "DECREMENT":
      return {
        ...state,
        words: state.words - 275,
        page: state.page - 1,
        price: state.price - 11.2,
      };
    case "SELECT":
      return {
        ...state, gigWork:state.gigWork.push([action.value]) 
      };
  }
}
