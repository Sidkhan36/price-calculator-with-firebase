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
          <div className=" dropdown-item droplist " 
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
  </ul>
</div>
     
    
    </div>
  );
};

export default Select;
