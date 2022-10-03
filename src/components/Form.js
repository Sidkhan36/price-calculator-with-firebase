import React, { useContext } from "react";
import Tabs from "./Tabs";
import Select from "./Select";
import "./form.css";
import CatandTime from "./CatandTime";
import PagesandWords from "./PagesandWords";
import OurContext from "../OurContext";
const Form = () => {
  const { state } = useContext(OurContext);
  console.log(state.totalPrice)
  let totalPrice =state.totalPrice
    totalPrice =state.startingPrice +
    state.gigWork.gigTypePrice +
    state.almaMater.levelPrice +
    state.time.durationPrice;
  // console.log(state.gigWork)
  function submitHandler(e) {
    e.preventDefault();
  }
  return (
    <div className="form rounded-2 py-2" >
      <h3 style={{ textAlign: "start", padding: "10px" }}>
        Calculate the Price
      </h3>
      <form onSubmit={submitHandler} >
        <Tabs />
        <Select />
        <CatandTime />
        <PagesandWords />

        <div className="d-flex justify-content-evenly my-2 ">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Double spaces
          </label>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Single space
          </label>
        </div>

        <h4>${state.page * totalPrice}</h4>
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
