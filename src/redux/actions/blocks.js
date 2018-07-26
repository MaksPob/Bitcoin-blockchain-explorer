const saveBlocks = (data)  => ({ type: 'ADD_BLOCKS', payload: data});
const getListBlocks = () => ({ type: 'ALL_BLOCKS' });
const saveBlockNowDay = (data) => ({ type: 'ADD_BLOCKS_NOWDAY', payload: data });

export {
  saveBlocks,
  getListBlocks,
  saveBlockNowDay
};