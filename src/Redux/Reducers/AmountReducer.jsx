const initialState = 0;
const AmountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "deposit":
      return state + action.payload;
    case "withdraw":
      return state - action.payload;
    default:
      return state;
  }
};
export default AmountReducer;
