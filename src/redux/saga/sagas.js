import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { saveRate } from '../actions/rate';
import { saveBlocks, saveBlockDay, saveOneBlock } from '../actions/blocks';
import { saveTransactions } from '../actions/transactions';
import { LOCATION_CHANGE } from 'react-router-redux';

const corsHeroku = "https://cors-anywhere.herokuapp.com/";

function* getBlocksAndRate() {
  try {
    const rates = yield call(axios.get, corsHeroku + "https://api.blockchain.info/charts/market-price?timespan=4weeks&format=json");
    const { values } = rates.data;
    const time = values.map(el => (el['x']));
    const price = values.map(el => el['y']);
    const rate = {
      time,
      price
    };
    yield put(saveRate(rate));
  } catch (err) {
    const error = err.response.data;
    console.log(error);
  }
}

function* getBlocksAndTransactions() {
  try {
    const block = yield call(axios.get, corsHeroku + `https://blockchain.info/blocks/${Date.now()}?format=json`);
    const { blocks } = block.data;
    const lastTenBlocks = blocks.slice(0, 10);
    yield put(saveBlocks(lastTenBlocks));
    const lastBlock = yield call(axios.get, corsHeroku + `https://blockchain.info/rawblock/${lastTenBlocks[0].hash}`);
    const { tx } = lastBlock.data;
    const lastTenTransactions = tx.slice(0, 10);
    yield put(saveTransactions(lastTenTransactions));
  } catch (err) {
    const error = err.response.data;
    console.log(error);
  }
}

function* getListBlocks({ payload }) {
  const day = payload ? payload : Date.now();
  try {
    const block = yield call(axios.get, corsHeroku + `https://blockchain.info/blocks/${day}?format=json`);
    const { blocks } = block.data;
    yield put(saveBlockDay(blocks));
  } catch (err) {
    const error = err.response.data;
    console.log(error);
  }
}

function* getOneBlock({ payload }) {
  try {
    const oneBlock = yield call(axios.get, corsHeroku + `https://blockchain.info/rawblock/${payload}`);
    const block = oneBlock.data;
    yield put(saveOneBlock(block));
  } catch (err) {
    const error = err.response.data;
    console.log(error);
  }
}

// function* handleLocationChange({ payload }) {
//   console.log(payload);
// }



function* sagas() {
  yield takeEvery("RATE_AND_BLOCKS", getBlocksAndRate);
  yield takeEvery("RATE_AND_BLOCKS", getBlocksAndTransactions);
  yield takeEvery("ALL_BLOCKS", getListBlocks);
  yield takeEvery("BLOCKS_FOR_DAY", getListBlocks);
  yield takeEvery("ONE_BLOCK", getOneBlock);
  //yield takeEvery(LOCATION_CHANGE, handleLocationChange)
}

export default sagas;