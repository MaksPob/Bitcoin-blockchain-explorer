import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './styles.scss';

import { timeFormated, unixTimeFormated } from '../../utils/moment';
import Header from '../../components/Header/Header.jsx';
import { getOneBlock } from '../../redux/actions/blocks';


class Block extends Component {

  render() {
  const { block } = this.props;
  console.log(block);
  return (
    <div>
      <Header />
      <h2>Блок #{block.height}</h2>
      <div className="block">
        <div className="block__table-info">
          <table>
              <thead>
                <tr>
                  <td>Сводные данные</td>
                </tr>
              </thead>
              <tbody>
                <tr key={block.tx.length}>
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
        <div className="block__table-hash">
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
                <tr key={block.prev_block}>
                  <td>Предыдущий блок</td>
                  <td>{block.prev_block}</td>
                </tr>
                <tr key={block.mrkl_root}>
                  <td>Корень Меркле</td>
                  <td>{block.mrkl_root}</td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
      <div className="transactions-block">
        {console.log(block.tx)}
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