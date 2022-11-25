import React, { useContext, useEffect, useState } from "react";
import emailjs from "@emailjs/browser"
import Tabs from "./Tabs";
import Select from "./Select";
import "./form.css";
import fire from "../components/images/fire.png";
import CatandTime from "./CatandTime";
import PagesandWords from "./PagesandWords";
import OurContext from "../contexts/OurContext";
import DispatchContext from "../contexts/DispatchContext";
import { useAuth } from "../contexts/AuthContext"
import {useNavigate } from "react-router-dom";

const Form = () => {
  const [check, setCheck] = useState(false)
  const { state } = useContext(OurContext);
  const dispatch = useContext(DispatchContext);
  const [discount, setDiscount] = useState(5);
  let navigate = useNavigate()
  const {currentUser} = useAuth()
  let from_name = currentUser ? currentUser.email : "";
  const page = state.page;

  let totalPrice =
    state.tab.tabPrice +
    state.gigWork.gigTypePrice +
    state.almaMater.levelPrice +
    state.time.durationPrice;
    

    totalPrice = state.singleSpace ? totalPrice * 2 : totalPrice;
    

    let templateParams = {
      tab:state.tab.tabName,
      gigWork:state.gigWork.gigTypeName,
      page:state.page,
      words:state.words,
      totalPrice:state.totalPrice,
      discounts:state.discounts,
      almaMater:state.almaMater.level,
      time:state.time.duration,
      singleSpace:state.singleSpace,
      doubleSpace:state.doubleSpace,
      from_name:from_name,

    }
  function submitHandler(e) {
    e.preventDefault();
    if(currentUser){
    emailjs.send('service_cn99oxi', 'template_txgarf8', templateParams , '7GYfRZcvdQfUyEibT')
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
        setCheck(!check)
   }, function(error) {
      console.log('FAILED...', error);
      });
    if(state.isLoggedIn){

      // console.log(state)
    }}
    else{
      navigate('/login')
    }
  }


useEffect(() => {
  
  function dispatchtotal(totalPrice, page) {
    let totalPrices = totalPrice * page 
    
    dispatch({ type: "TOTAL", value: totalPrices}); 
    if(totalPrices >=30 && totalPrices <=40)
    setDiscount(10)
    else if(totalPrices >=40 && totalPrices <=50)
    setDiscount(15)
    else if(totalPrices >=50 && totalPrices <=60)
    setDiscount(20)
  else if(totalPrices >=60 && totalPrices <=70)
  setDiscount(25)
  else if(totalPrices >=70 && totalPrices <=80)
  setDiscount(30)
  else if(totalPrices >=80 && totalPrices <=90)
  setDiscount(35)
  else if(totalPrices >=170)
  setDiscount(40)
  if(totalPrices >= 20){
      dispatch({type:"TOTAL", value:totalPrices-(totalPrices/100*discount)})
      dispatch({type:"DISCOUNTED-PRICE", value:totalPrices-(totalPrices-(totalPrices/100*discount))}) 
    }
    
  }
  
  dispatchtotal(totalPrice, page);

  }, [totalPrice,page,dispatch,discount]);
  // useEffect(() => {
  //   if (state.singleSpace === true || (state.page >= 2 && state.words >= 550))
  //     setDiscount(true);
  //   else setDiscount(false);
  // }, [state.singleSpace, state.page]);

  // console.log(state.page, state.words);
  // console.log(state.discounts)
  return (
    <div className="form rounded-2 p-3">
      <h3 style={{ textAlign: "start", padding: "10px" }}>
        {check ? <p>Request has been submitted successfully!</p> : "Calculate the Price"  }
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
            {(state.singleSpace || state.words >= 550) && <>
            <p className="discount-p  m-0 text-white text-sm-start rounded-1 p-1">
              {(state.singleSpace || state.words >= 550) && `${discount}% OFF`}  
              </p>
              <span className="line-through p-1">{discount > 0 && ((state.totalPrice+state.discounts).toFixed(  2))}</span>
            </>
              }
          </div>
          <div className="d-flex  justify-content-end align-items-center p-3">

            <h5 className="m-0 fw-bold">$ {state.totalPrice >= 20?(state.totalPrice).toFixed(2):state.totalPrice.toFixed(2)}</h5>
            <img src={fire} width="24px" height="24px" alt="burnImage" />
          </div>
        </div>
        <div className="d-grid gap-2">
          <button className="btn btn-primary" type="submit">
            Write My Paper
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
