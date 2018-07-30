import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './styles.scss';


const TransactionTableData = (props) => {
  const { transaction } = props;
  return (
    <div className="table__trans-data">
      <table>
        <thead>
          <tr>
            <td>Сводные данные</td>
          </tr>
        </thead>
        <tbody>
          <tr key={transaction.hash + "random"}>
            <td>Размер</td>
            <td>{transaction.size}</td>
          </tr>
          <tr key={transaction.lock_time}>
            <td>Время поступления</td>
            <td>{transaction.lock_time}</td>
          </tr>
          <tr key={transaction.block_height}>
            <td>Включено в блоки</td>
            <td>{transaction.block_height}</td>
          </tr>
          <tr key={transaction.relayed_by}>
            <td>Передано по</td>
            <td>{transaction.relayed_by}</td>
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
)(TransactionTableData);