import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import './styles.scss';

import { timeFromNow } from '../../utils/moment';



const LastBlocks = (props) => {
  const { lastBlocks } = props;
  return (
    <div>
      <h3>Latest Blocks</h3>
      <div className="main__lastBlocks">
        <table>
          <thead>
            <tr>
              <td>Height</td>
              <td>Age</td>
            </tr>
          </thead>
          <tbody>
            { 
            lastBlocks.map((block) => {
              return (
                <tr key={block.hash}>
                  <td>{block.height}</td>
                  <td>{timeFromNow(block.time)}</td>
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
    lastBlocks: state.lastBlocks
  }),
  dispatch => bindActionCreators({
  }, dispatch)
)(LastBlocks);