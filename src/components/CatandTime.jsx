import React, { useContext } from "react";
import DispatchContext from "../DispatchContext";
import OurContext from "../OurContext";

const CatandTime = () => {
  const { data } = useContext(OurContext);
  const dispatch = useContext(DispatchContext);

  return (
    <div className="categandtime d-flex justify-content-between my-2">
      <select className="form-select me-1">
        {data.almaMater.map((level) => (
          <option
            onClick={() =>
              dispatch({
                type: "LEVEL",
                value: { level: level.level, levelPrice: level.levelPrice },
              })
            }
            key={level.level}
          >
            {level.level}
          </option>
        ))}
      </select>
      <select className="form-select">
        {data.timePeriod.map((timetoTake) => (
          <option
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
          </option>
        ))}
      </select>
    </div>
  );
};

export default CatandTime;
