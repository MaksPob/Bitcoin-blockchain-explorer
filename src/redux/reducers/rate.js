const initialState = [];

const rate = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_RATE': return action.payload;
    default: return state;
  }
};

export default rate;