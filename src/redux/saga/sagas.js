import { call, put, takeEvery, select } from 'redux-saga/effects';
import axios from 'axios';
import { saveRate } from '../actions/rate';
import { saveBlocks, saveBlockDay, saveOneBlock } from '../actions/blocks';
import { saveTransactions, saveOneTransaction } from '../actions/transactions';

import { socketNewBlocks, socketNewTransactions } from '../../services/websocket';
const corsHeroku = "https://cors-anywhere.herokuapp.com/";

function* getBlocksAndRate() {
  try {
    const rates = yield call(axios.get, corsHeroku + "https://api.blockchain.info/charts/market-price?timespan=4weeks&format=json");
    const { values } = rates.data;
    const time = values.map(el => (el['x']));
    const price = values.map(el => (el['y']));
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

function* getOneTransaction({ payload }) {
  try {
    const oneTransaction = yield call(axios.get, corsHeroku + `https://blockchain.info/rawtx/${payload}`);
    const transaction = oneTransaction.data;
    yield put(saveOneTransaction(transaction));
  } catch (err) {
    const error = err.response.data;
    console.log(error);
  }
}

function* getBlockByHeight({ payload }) {
  try {
    const oneBlock = yield call(axios.get, corsHeroku + `https://blockchain.info/block-height/${payload}?format=json`);
    const { blocks } = oneBlock.data;
    yield put(saveOneBlock(blocks[0]));
  } catch (err) {
    const error = err.response.data;
    console.log(error);
  }
}

function* getBlocksInfo({ payload }) {
  try {
    const getBlocks = state => state.allBlocks;
    yield getListBlocks(Date.now());
    const blocks = yield select(getBlocks);
    const lastTwentyBlocks = blocks.slice(0, 4);
    const response = yield lastTwentyBlocks.map(block => call(axios.get, corsHeroku + `https://blockchain.info/rawblock/${block.hash}`));
    console.log(1111, response)
    const height = response.map(({ data }) => data.height);
    const lengthTransactions = response.map(({ data }) => data.tx.length);
    const blocksInfo = {
      height,
      lengthTransactions
    };
    yield put(saveBlockDay(blocksInfo));
  } catch (err) {
    const error = err.response.data;
    console.log(error);
  }
}

function* socketInit() {
  try {
    yield socketNewTransactions.init();
    yield socketNewTransactions.open({"op":"unconfirmed_sub"});
    yield socketNewTransactions.message();

    yield socketNewBlocks.init();
    yield socketNewBlocks.open({"op":"blocks_sub"});
    yield socketNewBlocks.message();
  } catch (err) {
    console.log(err);
  }
}

function* getNewBlock({ payload }) {
  const getBlocks = state => state.lastBlocks;
  const blocks = yield select(getBlocks);
  const listBlocks = [ payload, ...blocks ];
  const newList = listBlocks.slice(0, 10)
  yield put(saveBlocks(newList));
}

function* getNewTransactions({ payload }) {
  const getTransactions = state => state.transactions;
  const transactions = yield select(getTransactions);
  const listTransactions = [ payload, ...transactions ];
  const newList = listTransactions.slice(0, 10)
  yield put(saveTransactions(newList));
}


function* sagas() {
  yield socketInit();
  yield takeEvery("RATE_AND_BLOCKS", getBlocksAndRate);
  yield takeEvery("RATE_AND_BLOCKS", getBlocksAndTransactions);
  yield takeEvery("ALL_BLOCKS", getListBlocks);
  yield takeEvery("BLOCKS_FOR_DAY", getListBlocks);
  yield takeEvery("ONE_BLOCK", getOneBlock);
  yield takeEvery("ONE_TRANSACTION", getOneTransaction);
  yield takeEvery("BLOCK_BY_HEIGHT", getBlockByHeight);
  yield takeEvery("ALL_BLOCKS_INFO", getBlocksInfo);
  yield takeEvery("NEW_BLOCK", getNewBlock);
  yield takeEvery("NEW_TRANSACTIONS", getNewTransactions);
}

export default sagas;