const initialState = [];

const oneBlock = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ONE_BLOCK': return action.payload;
    default: return state;
  }
};

export default oneBlock;