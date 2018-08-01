import { getNewBlock } from '../redux/actions/blocks';
import { getNewTransactions } from '../redux/actions/transactions';
import { store } from '../redux/store/store';
class Socket {
  constructor() {
    this.socket = null;
  }

  init = () => {
    this.socket = new WebSocket('wss://ws.blockchain.info/inv');
  }

  open = (typeEvent) => {
    this.socket.onopen = () => this.socket.send(JSON.stringify(typeEvent))
  }

  message = (msg) => {
    this.socket.onmessage = (msg) => { 
      const response = JSON.parse(msg.data);
      response.op === "utx" ? store.dispatch(getNewTransactions(response.x)) : store.dispatch(getNewBlock(response.x));
    };
  }

}

const socketNewTransactions = new Socket();
const socketNewBlocks = new Socket();

export {
  socketNewTransactions,
  socketNewBlocks
};