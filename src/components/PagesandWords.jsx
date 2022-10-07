import React, { useContext, useState } from "react";
import DispatchContext from "../DispatchContext";
import OurContext from "../OurContext";
const PagesandWords = () => {
  const dispatch = useContext(DispatchContext);
  const { state } = useContext(OurContext);
  // const [page, setPage] = useState (state.page)
  let pages =state.page
  let words =state.words
  const pageandwords = [];
  // "1 Page / 275 words",
  // "2 Page / 550 words",
  // "3 Page / 825 words",
  // "4 Page / 1100 words",
  // "5 Page / 1375 words",
  // "6 Page / 1650 words",
  // "7 Page / 1925 words",
  // "8 Page / 2200 words",
  // "9 Page / 2475 words",
  for (let i = 1; i <= 50; i++) {
    const item = pages = i
    // const item = `${state.page} Pages / ${state.words} Words `
    pageandwords.push(item);
  }
  console.log(state.page, state.words);
  return (
    <div className="d-flex ">
      {state.page > 1 && (
        <button
        className="btn btn-secondary fw-bold rounded-0 rounded-start "
        // onClick={() => dispatch({ type: "DECREMENT" })}
        onClick={() => state.singleSpace? dispatch({type: 'SINGLE-SPACE-DECREMENT'}):dispatch({ type: "DECREMENT" })}
        >
          -
        </button>
      )}
      <div className="dropdown ">
        <button
          className="btn bg-light rounded-0 rounded-end dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {`${state.page} ${state.page > 1 ? "Pages" : "Page"} / ${
            state.words 
          } Words`}
        </button>
        <ul className="dropdown-menu height">
          {pageandwords.map((pageandpages) => (
            <li
              className="dropdown-item "
              onClick={() =>
                dispatch({
                  type: "PAGE-WORDS",
                  value: pageandpages,
                })
              }
              key={pageandpages}
            >
              {`${pageandpages} ${pageandpages > 1? 'Pages':'Page'} / ${pageandpages * state.words}`}
            </li>
          ))}
        </ul>
      </div>
      <button
        className="btn btn-secondary fw-bold rounded-0 rounded-end"
        onClick={() => state.singleSpace? dispatch({type: 'SINGLE-SPACE-INCREMENT'}):dispatch({ type: "INCREMENT" })}
        // onClick={() => dispatch({ type: "INCREMENT" })}
      >
        +
      </button>
    </div>
  );
};

export default PagesandWords;
