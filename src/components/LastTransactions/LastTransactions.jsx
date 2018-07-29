import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import './styles.scss';

import { summ } from '../../utils/math';

const LastTransactions = (props) => {
  const { lastTransactions } = props;
  return (
    <div>
      <h3>Latest Transactions</h3>
      <div className="main__lastTransactions">
        <table>
          <thead>
            <tr>
              <td>Hash</td>
              <td>Value Out</td>
            </tr>
          </thead>
          <tbody>
          { 
            lastTransactions.map((transaction) => {
              return (
                <tr key={transaction.hash}>
                  <td>{transaction.hash}</td>
                  <td>{isNaN(summ(transaction.out)) ? 0 : summ(transaction.out)}</td>
                </tr>
              );
            })
          }
          </tbody>
        </table>
      </div>
    </div>
  );
}


export default connect(
  state => ({ 
    lastTransactions: state.transactions
  }),
  dispatch => bindActionCreators({
  }, dispatch)
)(LastTransactions);