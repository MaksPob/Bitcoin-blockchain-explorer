import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './styles.scss';

import { unixTimeFormated } from '../../utils/moment';

import Header from '../../components/Header/Header.jsx';

const BlockByHeight = (props) => {
  const { block } = props;
  return (
    <div>
      <Header />
      <div className="blockByHeight__table-info">
      <table>
        <thead>
          <tr>
            <td>Сводные данные</td>
          </tr>
        </thead>
        <tbody>
          <tr key={block.hash + "random"}>
            <td>Количество транзакций</td>
            <td>{block.tx.length}</td>
          </tr>
          <tr key={block.height}>
            <td>Высота</td>
            <td>{block.height}</td>
          </tr>
          <tr key={block.time}>
            <td>Временная отметка</td>
            <td>{unixTimeFormated(block.time)}</td>
          </tr>
          <tr key={block.received_time + 1}>
            <td>Время получения</td>
            <td>{unixTimeFormated(block.received_time)}</td>
          </tr>
          <tr key={block.relayed_by}>
            <td>Передано по</td>
            <td>{block.relayed_by}</td>
          </tr>
          <tr key={block.bits}>
            <td>Биты</td>
            <td>{block.bits}</td>
          </tr>
          <tr key={block.size}>
            <td>Размер</td>
            <td>{block.size} kB</td>
          </tr>
          <tr key={block.nonce}>
            <td>Nonce (случайно перебираемое число)</td>
            <td>{block.nonce}</td>
          </tr>
          <tr key={block.fee}>
            <td>Награда за блок</td>
            <td>{block.fee}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
}


export default connect(
  state => ({
    block: state.blockByHeight
  }),
  dispatch => bindActionCreators({
  }, dispatch)
)(BlockByHeight);