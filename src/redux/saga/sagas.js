import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { saveRate } from '../actions/rate';
import { saveBlocks, saveBlockNowDay } from '../actions/blocks';
import { saveTransactions } from '../actions/transactions';

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

function* getListBlocks() {
  try {
    const block = yield call(axios.get, corsHeroku + `https://blockchain.info/blocks/${Date.now()}?format=json`);
    const { blocks } = block.data;
    yield put(saveBlockNowDay(blocks));
  } catch (err) {
    const error = err.response.data;
    console.log(error);
  }
}





function* sagas() {
  yield takeEvery("RATE_AND_BLOCKS", getBlocksAndRate);
  yield takeEvery("RATE_AND_BLOCKS", getBlocksAndTransactions);
  yield takeEvery("ALL_BLOCKS", getListBlocks);
}

export default sagas;