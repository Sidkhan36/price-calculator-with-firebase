export const initialState = {
  words: 275,
  page: 1,
  startingPrice:4.3,
  gigWork:{id:'',gigTypeName:'', gigTypePrice:0,},
  time: { duration: '', durationPrice: 0 },
  almaMater: { level: '', levelPrice: 0 },
  totalPrice: 0
};

export function dispatcher(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        page: state.page + 1,
        words: state.words + 275,
      };
    case "DECREMENT":
      return {
        ...state,
        words: state.words - 275,
        page: state.page - 1,
      };
    case "SELECT":
      return {
        ...state, gigWork: action.value 
      };
    case "LEVEL":
      return {
        ...state, almaMater: action.value 
      };
    case "TIME":
      return {
        ...state, time: action.value 
      };
  }
}
