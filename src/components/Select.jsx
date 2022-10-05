import React, { useContext, useState } from "react";
import DispatchContext from "../DispatchContext";
import OurContext from "../OurContext";

const Select = () => {
  const { data, state } = useContext(OurContext);
  const dispatch = useContext(DispatchContext);
  console.log(data);

  return (
    <div className="my-2">
      <select
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
      </select>
    </div>
  );
};

export default Select;
