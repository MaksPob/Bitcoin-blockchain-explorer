const initialState = [];

  const blockByHeight = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_BLOCK_BY_HEIGHT': return action.payload;
      default: return state;
    }
  };
  
  export default blockByHeight;