import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './styles.scss';


const TransactionTableOut = (props) => {
  const { transaction } = props;
  return (
    <div className="table__trans-out">
      <table>
        <thead>
          <tr>
            <td>Входы и выходы</td>
          </tr>
        </thead>
        <tbody>
          <tr key={transaction.hash + "random1"}>
            <td>Общее количество входов</td>
            <td>{transaction.inputs.length}</td>
          </tr>
          <tr key={transaction.hash + "random2"}>
            <td>Всего выходов</td>
            <td>{transaction.out.length}</td>
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
)(TransactionTableOut);