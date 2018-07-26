const getRateAndBlocks = ()  => ({ type: 'RATE_AND_BLOCKS' });
const saveRate = (data)  => ({ type: 'ADD_RATE', payload: data});

export {
  getRateAndBlocks,
  saveRate
};