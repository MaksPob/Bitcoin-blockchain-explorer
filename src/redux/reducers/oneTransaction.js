const initialState = {
  inputs: [],
  out: []
};
  
  const oneTransaction = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_ONE_TRANSACTION": return action.payload;
      default: return initialState;
    }
  };
  
  export default oneTransaction;