const initialState = {
  tx: [],
  time: 0,
  received_time: 0
};

const oneBlock = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ONE_BLOCK': return action.payload;
    default: return initialState;
  }
};

export default oneBlock;