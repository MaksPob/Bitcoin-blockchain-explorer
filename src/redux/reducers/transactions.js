const initialState = [];

const transactions = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TRANSACTIONS': return action.payload;
    default: return initialState;
  }
};

export default transactions;