import React, { useContext } from "react";
import DispatchContext from "../DispatchContext";
import OurContext from "../OurContext";

const CatandTime = () => {
  const { data, state } = useContext(OurContext);
  const dispatch = useContext(DispatchContext);

  return (
    <div className="categandtime d-flex justify-content-between my-2">
      <div className="dropdown ">
  <button className="btn bg-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    {state.almaMater.level === ''? 'Level(school,colle..)': state.almaMater.level}
  </button>
  <ul className="dropdown-menu">
  {data.almaMater.map((level) => (
          <div className=" dropdown-item "
            onClick={() =>
              dispatch({
                type: "LEVEL",
                value: { level: level.level, levelPrice: level.levelPrice },
              })
            }
            key={level.level}
          >
            {level.level}
          </div>
        ))}
  </ul>
</div>
    
      <div className="dropdown">
  <button className="btn bg-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  {state.time.duration === ''? 'Time Period': state.time.duration}
  </button>
  <ul className="dropdown-menu">
  {data.timePeriod.map((timetoTake) => (
          <div className=" dropdown-item "
            onClick={() =>
              dispatch({
                type: "TIME",
                value: {
                  duration: timetoTake.duration,
                  durationPrice: timetoTake.durationPrice,
                },
              })
            }
            key={timetoTake.duration}
          >
            {timetoTake.duration}
          </div>
        ))}

  </ul>
</div>
    
    </div>
  );
};

export default CatandTime;
