import React, { useContext, useState } from "react";
import DispatchContext from "../DispatchContext";
import OurContext from "../OurContext";
const PagesandWords = () => {
  const dispatch = useContext(DispatchContext);
  const {state} = useContext(OurContext);
  // const [page, setPage] = useState (state.page)
  const disabled = state.page >= 1 && state.words <= 275 ? "disabled" : "";
  // const pages = state.page >1? 'Pages': 'Page'
  const pageandwords = [
  ];
    // "1 Page / 275 words",
    // "2 Page / 550 words",
    // "3 Page / 825 words",
    // "4 Page / 1100 words",
    // "5 Page / 1375 words",
    // "6 Page / 1650 words",
    // "7 Page / 1925 words",
    // "8 Page / 2200 words",
    // "9 Page / 2475 words",
  // for(let i=1; i<=50;i++){
  //   const item = `${state.page} pages / ${state.page * state.words} words`
  //   // const item = `${state.page} Pages / ${state.words} Words `
  //   pageandwords.push(item)
  // }
  console.log(state.page, state.words)
  return (
    <div className="d-flex">
      {!disabled && (
        <button
          className="btn btn-secondary fw-bold rounded-0 rounded-start "
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          -
        </button>
      )}
      <select name="pages" className="form-select rounded-0">
        <option>{`${state.page} ${state.page >1? 'Pages': 'Page'} / ${state.words} Words`}</option>
        {/* {pageandwords.map(pageandpages => <option onClick={()=> dispatch({type:"PAGE-WORDS", value:{page:state.page, words:state.words}})}key={pageandpages}>{pageandpages}</option>)} */}
      </select>
      <button
        className="btn btn-secondary fw-bold rounded-0 rounded-end"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        +
      </button>
    </div>
  );
};

export default PagesandWords;
{
  /* <option className='style'>1 Page / 275 words</option>
<option className='style'>2 Page / 550 words</option>
<option className='style'>3 Page / 825 words</option>  */
}
