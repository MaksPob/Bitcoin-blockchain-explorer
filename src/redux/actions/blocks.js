const getListBlocks = () => ({ type: "ALL_BLOCKS" });
const getBlocksDay = (data) => ({ type: "BLOCKS_FOR_DAY", payload: data });
const getOneBlock = (data) => ({ type: "ONE_BLOCK", payload: data });
const saveOneBlock = (data) => ({ type: "ADD_ONE_BLOCK", payload: data });
const saveBlocks = (data)  => ({ type: "ADD_BLOCKS", payload: data });
const saveBlockDay = (data) => ({ type: "ADD_BLOCKS_NOWDAY", payload: data });

export {
  saveBlocks,
  getListBlocks,
  saveBlockDay,
  saveOneBlock,
  getBlocksDay,
  getOneBlock
};