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
  const [discount, setDiscount] = useState(5);
  // let discount =5
  // console.log(state.singleSpace, state.doubleSpace);
  const page = state.page;
  // const words = state.singleSpace? state.words
  // const words = state.singleSpace? state.words = 550: state.words = 275
  let totalPrice =
    state.tab.tabPrice +
    state.gigWork.gigTypePrice +
    state.almaMater.levelPrice +
    state.time.durationPrice;

  totalPrice = state.singleSpace ? totalPrice * 2 : totalPrice;
  // console.log(state.gigWork)
  function submitHandler(e) {
    e.preventDefault();
  }
  // function discounted(totalPrice){
  //   const discount =5
  //   return totalPrice = (totalPrice/100) * discount
  // }
  function wordsdispatcher(words) {
  dispatch({ type: "SINGLE-SPACE", value: words });
}
function dispatchtotal(totalPrice, page) {
  let totalPrices = totalPrice * page 
  dispatch({ type: "TOTAL", value: totalPrices});
  dispatch({type:"DISCOUNTED-PRICE",value:totalPrices-(totalPrices/100*5)})
}
useEffect(() => {
  dispatchtotal(totalPrice, page);
  // let discounts = discounted(totalPrice)
  // console.log(`this is discount :${discounts}`)
  }, [totalPrice, page]);
  // useEffect(() => {
  //   if (state.singleSpace === true || (state.page >= 2 && state.words >= 550))
  //     setDiscount(true);
  //   else setDiscount(false);
  // }, [state.singleSpace, state.page]);

  console.log(state.page, state.words);
  console.log(state.discount);

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
            onChange={() => dispatch({ type: "DOUBLE-SPACE", value: true })}
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
            onChange={() => dispatch({ type: "SINGLE-SPACE", value: true })}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Single space
          </label>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="discount d-flex justify-content-between align-items-center p-3">
            <p className="discount-p  m-0 text-white text-sm-start rounded-1 p-1">$ {discount} OFF </p><span className="line-through p-1">({state.totalPrice.toFixed(2)})</span>
            {/* {console.log(discount)} */}
          </div>
          <div className="d-flex justify-content-end align-items-center p-3">
            <h5 className="m-0 fw-bold">$ {state.discount.toFixed(2)}</h5>
            {/* <h5 className="m-0 fw-bold">$ {(state.totalPrice-(state.totalPrice/100)*discount).toFixed(2)}</h5> */}
            {/* <h5 className="m-0 fw-bold">$ {state.page * totalPrice}</h5> */}
            {console.log(state.totalPrice)}
            <img src={fire} width="24px" height="24px" alt="burnImage" />
          </div>
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
