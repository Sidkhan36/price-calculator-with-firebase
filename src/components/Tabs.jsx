import React, { useContext } from "react";
import DispatchContext from "../contexts/DispatchContext";
import OurContext from "../contexts/OurContext";
const Tabs = () => {
  const { data, state } = useContext(OurContext);
  const dispatch = useContext(DispatchContext);
  // console.log(state.)
  return (
    <div className="d-flex justify-content-around">
      {/* {data.tabs.map((tab) => (
        <li 
          onClick={() =>
            dispatch({
              type: "TAB-SHIFT",
              value: {
                id: tab.id,
                tabName: tab.gigName,
                tabPrice: tab.startingPrice,
              },
            })
          }
          key={tab.id}
          className="page-item">
          {tab.gigName}
        </li>
      ))} */}
      <nav aria-label="Page navigation example d-flex justify-content-around">
  <ul className="pagination justify-content-end">
  {data.tabs.map((tab) => (
    <li onClick={() =>
            dispatch({
              type: "TAB-SHIFT",
              value: {
                id: tab.id,
                tabName: tab.gigName,
                tabPrice: tab.startingPrice,
              },
            })
          }
          key={tab.id} value={state.tab}
          className="page-item btn"><a className="btn page-link" name="gigName"> {tab.gigName}</a></li> ))}
  </ul>
</nav>
    </div>
  );
};

export default Tabs;
