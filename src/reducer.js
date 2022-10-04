export const initialState = {
  words: 275,
  page: 1,
  singleSpace:false,
  doubleSpace:true,
  startingPrice:4.3,
  gigWork:{id:'',gigTypeName:'', gigTypePrice:0,},
  time: { duration: '', durationPrice: 0 },
  almaMater: { level: '', levelPrice: 0 },
  totalPrice: 0
  // totalPrice: this.startingPrice + this.gigWork.gigTypePrice + this.time.durationPrice + this.almaMater.levelPrice
};

export function dispatcher(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        page: state.page++,
        words: state.words +275 ,
      };
    case "DECREMENT":
      return {
        ...state,
        words: state.words - 275,
        page: state.page--,
      };
    case "SELECT":
      return {
        ...state, gigWork: action.value,
        };
        case "LEVEL":
          return {
            ...state, almaMater: action.value ,
      };
    case "TIME":
      return {
        ...state, time: action.value 
      };
    case "DOUBLE-SPACE":
      return {
        ...state, doubleSpace:state.doubleSpace=true, singleSpace:state.singleSpace=false,words:state.words= 275 
      };
    case "SINGLE-SPACE":
      return {
        ...state, doubleSpace:state.doubleSpace=false, singleSpace:state.singleSpace=true, words:state.words=550  
      };
  }
}
