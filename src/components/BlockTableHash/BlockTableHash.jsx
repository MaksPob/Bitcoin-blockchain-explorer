import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './styles.scss';


const BlockTableHash = (props) => {
  const { block } = props;
  return (
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
  );
}


export default connect(
  state => ({
    block: state.oneBlock
  }),
  dispatch => bindActionCreators({
  }, dispatch)
)(BlockTableHash);