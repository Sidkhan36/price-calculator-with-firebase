import React, { useContext, useState } from "react";
import DispatchContext from "../DispatchContext";
import OurContext from "../OurContext";

const Select = () => {
  const { data, state } = useContext(OurContext);
  const dispatch = useContext(DispatchContext);
  console.log(data);

  return (
    <div className="my-2 " >
     <div className="dropdown d-grid gap-2 ">
  <button className=" btn bg-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    {state.gigWork.gigTypeName === ''? 'Essay (any type)': state.gigWork.gigTypeName}
  </button>
  <ul className="dropdown-menu   ">
  {data.gigType.map((gigtypename) => (
          <div className=" dropdown-item  "
            onClick={() =>
              dispatch({
                type: "SELECT",
                value: {
                  id: gigtypename.id,
                  gigTypeName: gigtypename.gigTypeName,
                  gigTypePrice: gigtypename.gigTypePrice,
                },
              })
            }
            key={gigtypename.id}
          >
            {gigtypename.gigTypeName}
          </div>
        ))}
    {/* <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li> */}
  </ul>
</div>
     
      {/* <select
        className="form-select my-2"
      >
        {data.gigType.map((gigtypename) => (
          <option
            onClick={() =>
              dispatch({
                type: "SELECT",
                value: {
                  id: gigtypename.id,
                  gigTypeName: gigtypename.gigTypeName,
                  gigTypePrice: gigtypename.gigTypePrice,
                },
              })
            }
            key={gigtypename.id}
          >
            {gigtypename.gigTypeName}
          </option>
        ))}
      </select> */}
    </div>
  );
};

export default Select;
