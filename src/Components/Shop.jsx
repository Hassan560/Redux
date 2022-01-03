import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { actionCreators } from "../Redux/Index";
import {bindActionCreators} from 'redux'


function Shop() {
  // update state 
  const dispatch = useDispatch();
  const {depositMoney,withdrawMoney} = bindActionCreators(actionCreators,dispatch)
  const balance = useSelector(state => state.amount)
  return (
    <div>
      <h3>Deposit/Withdraw Amount</h3>
      <button
        style={{
          backgroundColor: "#1d93e0",
          padding: "5px",
          color: "white",
          fontSize: 20,
        }}
        // onClick={() => dispatch(actionCreators.withdrawMoney(100))}
        onClick={()=>withdrawMoney(100)}
      >
        -
      </button>
      Update Balance({balance})
      <button
        style={{
          backgroundColor: "#1d93e0",
          padding: "5px",
          color: "white",
          fontSize: 20,
        }}
        // onClick={() => dispatch(actionCreators.depositMoney(100))}
        onClick={()=>depositMoney(100)}
      > 
        +
      </button>
    </div>
  );
}

export default Shop;
