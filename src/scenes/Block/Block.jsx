import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './styles.scss';

import { timeFormated, unixTimeFormated } from '../../utils/moment';
import { getOneBlock } from '../../redux/actions/blocks';

import Header from '../../components/Header/Header.jsx';
import BlockTableInfo from '../../components/BlockTableInfo/BlockTableInfo.jsx';
import BlockTableHash from '../../components/BlockTableHash/BlockTableHash.jsx';

class Block extends Component {

  render() {
  const { block } = this.props;
  return (
    <div>
      <Header />
      <h1>Блок #{block.height}</h1>
      <div className="block">
        <BlockTableInfo />
        <BlockTableHash />
      </div>
      <h2>Транзакции</h2>
      {console.log(block.tx)}
      <div className="transaction-pagination">
        <div className="transaction-pagination__back">
              <button onClick={()=> {
              }}>{'<< '}-50</button>
        </div>
        <div className="transaction-pagination__next">
              <button onClick={()=> {
              }}>+50{' >>'}</button>
        </div>
      </div>
      <div className="transactions-block">
        <table>
          <thead>
            <tr>
              <td>Хэши</td>
            </tr>
          </thead>
          <tbody>
            <tr key={block.hash}>
              <td>Хэш</td>
              <td>{block.hash}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
  }
}


export default connect(
  state => ({
    block: state.oneBlock
  }),
  dispatch => bindActionCreators({
    getOneBlock
  }, dispatch)
)(Block);