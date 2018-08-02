import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './styles.scss';

import Header from '../../components/Header/Header.jsx';
import TransactionTableData from '../../components/TransactionTableData/TransactionTableData.jsx';
import TransactionTableOut from '../../components/TransactionTableInOut/TransactionTableOut.jsx';

import { timeFormated, unixTimeFormated } from '../../utils/moment';


const Transaction = (props) => {
  const { transaction } = props;
  return (
    <div>
      <Header />
      <h1>Транзакция</h1>
      <div className="table__transaction-info-in-out">
        <table>
            <thead>
              <tr>
                <td>{transaction.hash}</td>
                <td></td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{transaction.inputs.map((el, i) => {
                  return el.prev_out
                  ? <div key={i}>{el.prev_out.addr}</div> 
                  : <div key={i}>{"Нет входных данных (новые монеты)"}</div>
                })}</td>
                <td>{transaction.out.map((el, i) => {
                  return el.addr
                  ? <div key={i}>{el.addr}</div> 
                  : <div key={i}>{"Невозможно декодировать выходной адрес "}</div>
                })}</td>
                <td>{transaction.out.map((el, i) => {
                  return el
                  ? <div key={i}>{el.value}</div> 
                  : <div key={i}>{0}</div>
                })}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table__transaction-fullInfo">
          <TransactionTableData />
          <TransactionTableOut />
        </div>
    </div>
  );
}


export default connect(
  state => ({
    transaction: state.oneTransaction
  }),
  dispatch => bindActionCreators({
  }, dispatch)
)(Transaction);