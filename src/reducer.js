export const initialState = {
  tabs:{id:'', tabName:'', tabPrice:0},
  gigWork: { id: "", gigTypeName: "", gigTypePrice: 0 },
  time: { duration: "", durationPrice: 0 },
  almaMater: { level: "", levelPrice: 0 },
  words: 275,
  page: 1,
  singleSpace: false,
  doubleSpace: true,
  totalPrice: 0,
  // totalPrice: this.startingPrice + this.gigWork.gigTypePrice + this.time.durationPrice + this.almaMater.levelPrice
};

export function dispatcher(state, action) {
  switch (action.type) {
    case "TAB-SHIFT":
      return {
        ...state,
        tabs: action.value
      };
    case "INCREMENT":
      return {
        ...state,
        page: state.page++,
        words: state.words + 275,
        totalPrice: state.startingPrice * state.page
      };
    case "DECREMENT":
      return {
        ...state,
        words: state.words - 275,
        page: state.page--,
      };
    case "SELECT":
      return {
        ...state,
        gigWork: action.value,
      };
    case "LEVEL":
      return {
        ...state,
        almaMater: action.value,
      };
    case "TIME":
      return {
        ...state,
        time: action.value,
      };
    case "DOUBLE-SPACE":
      return {
        ...state,
        doubleSpace: (state.doubleSpace = true),
        singleSpace: (state.singleSpace = false),
        words: (state.words = 275 * state.page),
      };
    case "SINGLE-SPACE":
      return {
        ...state,
        doubleSpace: (state.doubleSpace = false),
        singleSpace: (state.singleSpace = true),
        words: (state.words = 550 * state.page),
      };
    case "PAGE-WORDS":
      return {
        ...state,
        page: action.value,
        words: action.value,
      };
  }
}
