import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './styles.scss';

import Header from '../../components/Header/Header.jsx';

import { timeFormated, unixTimeFormated } from '../../utils/moment';


const Transaction = (props) => {
  const { transaction } = props;
  console.log(transaction);
  return (
    <div>
      <Header />
      <h1>Транзакция</h1>
      <table className="table__transaction-info">
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
  );
}


export default connect(
  state => ({
    transaction: state.oneTransaction
  }),
  dispatch => bindActionCreators({
  }, dispatch)
)(Transaction);

// 2 поиска ( 1 добавить поиск блока по хэйт)
// пагинация транзакций
// страница транзакции
// страница с графиком блоков за 24 часа
// сокеты