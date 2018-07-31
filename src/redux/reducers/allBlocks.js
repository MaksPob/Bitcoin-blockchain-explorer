const initialState = [];

const allBlocks = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BLOCKS_NOWDAY':
    return action.payload;
    default: return initialState;
  }
};

export default allBlocks;