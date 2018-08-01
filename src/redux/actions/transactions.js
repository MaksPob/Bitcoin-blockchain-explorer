const saveTransactions = (data)  => ({ type: 'ADD_TRANSACTIONS', payload: data});
const getOneTransaction = (data) => ({ type: "ONE_TRANSACTION", payload: data });
const getNewTransactions = (data) => ({ type: "NEW_TRANSACTIONS", payload: data });
const saveOneTransaction = (data) => ({ type: "ADD_ONE_TRANSACTION", payload: data });

export {
  saveTransactions,
  getOneTransaction,
  getNewTransactions,
  saveOneTransaction,
};