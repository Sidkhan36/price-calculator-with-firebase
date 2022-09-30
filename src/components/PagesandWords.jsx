import React, { useContext } from "react";
import DispatchContext from "../DispatchContext";
import OurContext from "../OurContext";
const PagesandWords = () => {
  const dispatch = useContext(DispatchContext);
  const state = useContext(OurContext);
  const disabled = state.page <= 1 && state.words <= 275 ? "disabled" : "";
  const pageandwords = [
    "1 Page / 275 words",
    "2 Page / 550 words",
    "3 Page / 825 words",
    "4 Page / 1100 words",
    "5 Page / 1375 words",
    "6 Page / 1650 words",
    "7 Page / 1925 words",
    "8 Page / 2200 words",
    "9 Page / 2475 words",
  ];
  return (
    <div className="d-flex">
      {!disabled && (
        <button
          className="btn fw-bold "
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          -
        </button>
      )}
      <select name="pages" className="form-select">
        <option>
          {state.page} page / {state.words} words
        </option>

        {pageandwords.map((page) => (
          <option key={page}>{page}</option>
        ))}
      </select>
      <button
        className="btn btn-secondary fw-bold"
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
