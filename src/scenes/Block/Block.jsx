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
      <div className="block">
        <div className="block__block-info">
          <h2>Блок ..</h2>
          <table>
              <thead>
                <tr>
                  <td>Сводные данные</td>
                </tr>
              </thead>
              <tbody>
                <tr key={block.hash}>
                  <td>Количество транзакций</td>
                  <td>{block.size}</td>
                </tr>
              </tbody>
            </table>
        </div>
        <div className="block__block"></div>
      </div>
      <div className="transactions-block"></div>
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