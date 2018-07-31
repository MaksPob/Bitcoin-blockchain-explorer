const initialState = [];

const lastBlocks = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BLOCKS': return action.payload;
    default: return state;
  }
};

export default lastBlocks;