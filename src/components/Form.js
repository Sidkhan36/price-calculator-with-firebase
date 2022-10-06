import React, { useContext, useEffect, useState } from "react";
import Tabs from "./Tabs";
import Select from "./Select";
import "./form.css";
import fire from "./fire.png";
import CatandTime from "./CatandTime";
import PagesandWords from "./PagesandWords";
import OurContext from "../OurContext";
import DispatchContext from "../DispatchContext";
const Form = () => {
  const { state } = useContext(OurContext);
  const dispatch = useContext(DispatchContext);
  const [discount, setDiscount] = useState(false);
  // console.log(state.singleSpace, state.doubleSpace);
  let totalPrice =
  state.tab.tabPrice +
  state.gigWork.gigTypePrice +
  state.almaMater.levelPrice +
  state.time.durationPrice
  // console.log(state.gigWork)
  function submitHandler(e) {
    e.preventDefault();
  }
  function dispatchtotal(totalPrice){
    dispatch({type:'TOTAL', value:totalPrice})

  }
  useEffect(() => {
    dispatchtotal(totalPrice)
  }, [totalPrice])
  useEffect(() => {
    if(state.singleSpace == true || state.page>=2 && state.words >= 550)
      setDiscount(true)
    else
      setDiscount(false)
  }, [state.singleSpace, state.page])
  
  console.log(state.page, state.words);
  return (
    <div className="form rounded-2 p-3">
      <h3 style={{ textAlign: "start", padding: "10px" }}>
        Calculate the Price
      </h3>
      <form onSubmit={submitHandler}>
        <Tabs />
        <Select />
        <CatandTime />
        <PagesandWords />

        <div className="d-flex justify-content-between my-2 ">
          <input
            className="form-check-input"
            type="radio"
            name="singleSpace"
            id="flexRadioDefault1"
            value={state.doubleSpace}
            defaultChecked={state.doubleSpace}
            onChange={() => dispatch({ type: "DOUBLE-SPACE" })}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Double spaces
          </label>
          <input
            className="form-check-input"
            type="radio"
            name="singleSpace"
            value={state.singleSpace}
            id="flexRadioDefault1"
            onChange={() => dispatch({ type: "SINGLE-SPACE" })}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Single space
          </label>
        </div>
        {discount && <div className="">
              <h5 className="m-0 fw-bold">$ {discount} OFF</h5>
              {console.log(discount)}
            </div>}
        <div className="d-flex justify-content-end align-items-center p-3">
          <h5 className="m-0 fw-bold">$ {state.totalPrice}</h5>
          {/* <h5 className="m-0 fw-bold">$ {state.page * totalPrice}</h5> */}
          {console.log(state.totalPrice)}
          <img src={fire} width="24px" height="24px" alt="burnImage" />
        </div>
        <div className="d-grid gap-2">
          <button className="btn btn-primary" type="button">
            Write My Paper
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
