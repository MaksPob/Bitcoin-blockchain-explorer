const initialState = {
  tx: [],
  time: Date.now(),
  received_time: Date.now()
};

  const blockByHeight = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_BLOCK_BY_HEIGHT': return action.payload;
      default: return state;
    }
  };
  
  export default blockByHeight;