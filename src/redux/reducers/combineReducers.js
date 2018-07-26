import { combineReducers } from 'redux';

import rate from './rate';
import lastBlocks from './blocks';
import transactions from './transactions';
import allBlocks from './allBlocks';

export default combineReducers({
  rate,
  lastBlocks,
  transactions,
  allBlocks
});