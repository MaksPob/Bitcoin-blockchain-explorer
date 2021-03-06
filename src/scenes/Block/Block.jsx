import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import './styles.scss';

import { unixTimeFormated } from '../../utils/moment';

import { getOneTransaction } from '../../redux/actions/transactions';
import Header from '../../components/Header/Header.jsx';
import BlockTableInfo from '../../components/BlockTableInfo/BlockTableInfo.jsx';
import BlockTableHash from '../../components/BlockTableHash/BlockTableHash.jsx';

class Block extends Component {
  state = {
    paginationCount: 0,
  };
  render() {
  const { block, getOneTransaction } = this.props;
  const { paginationCount } = this.state;
  return (
    <div>
      <Header />
      <h1>Блок #{block.height}</h1>
      <div className="block">
        <BlockTableInfo />
        <BlockTableHash />
      </div>
      <h2>Транзакции</h2>
      <div className="transaction-pagination">
        <div className="transaction-pagination__back">
              <button onClick={()=> {
                 const count = paginationCount - 100;
                 this.setState({ paginationCount: count })
              }}>{'<< '}-100</button>
        </div>
        <div className="transaction-pagination__next">
              <button onClick={()=> {
                const count = paginationCount + 100;
                this.setState({ paginationCount: count })
              }}>+100{' >>'}</button>
        </div>
      </div>
      <div className="transactions-block">
        {block.tx.map((elem, i) => {
          if (i <= (paginationCount + 100) && i >= paginationCount) {
            return (
              <table key={i} className="table__table">
              <thead>
                <tr>
                  <td>
                    <Link to={`/transaction/${elem.hash}`} onClick={() => getOneTransaction(elem.hash)}>{elem.hash}</Link>
                  </td>
                  <td></td>
                  <td>{unixTimeFormated(elem.time)}</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{elem.inputs.map((el, i) => {
                    return el.prev_out
                    ? <div key={i}>{el.prev_out.addr}</div> 
                    : <div key={i}>{"Нет входных данных (новые монеты)"}</div>
                  })}</td>
                  <td>{elem.out.map((el, i) => {
                    return el.addr
                    ? <div key={i}>{el.addr}</div> 
                    : <div key={i}>{"Невозможно декодировать выходной адрес "}</div>
                  })}</td>
                  <td>{elem.out.map((el, i) => {
                    return el
                    ? <div key={i}>{el.value}</div> 
                    : <div key={i}>{0}</div>
                  })}</td>
                </tr>
              </tbody>
            </table>
            );
          }
        })}{}
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
    getOneTransaction
  }, dispatch)
)(Block);