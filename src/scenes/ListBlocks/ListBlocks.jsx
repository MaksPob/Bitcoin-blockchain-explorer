import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './styles.scss';

import { timeFormated } from '../../utils/moment';
import Header from '../../components/Header/Header.jsx';

const ListBlocks = (props) => {
  const { allBlocks } = props;
  return (
    <div>
      <Header />
      <div className="listBlocks">
        <div className="listBlocks__pagination">
          <div className="listBlocks__pagination-back">
            <button>{'<< '}Back</button>
          </div>
          <div><h3>Blocks mined on: {timeFormated(Date.now())}</h3></div>
          <div className="listBlocks__pagination-next">
            <button>Next{' >>'}</button>
          </div>
        </div>
        <div className="listBlocks__blocks">
          <div className="listBlocks__block">
            <table>
              <thead>
                <tr>
                  <td>Height</td>
                  <td>Time</td>
                  <td>Hash</td>
                </tr>
              </thead>
              <tbody>
                { 
                allBlocks.map((block) => {
                  return (
                    <tr key={block.hash}>
                      <td>{block.height}</td>
                      <td>{block.time}</td>
                      <td>{block.hash}</td>
                    </tr>
                  );
                })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}


export default connect(
  state => ({ 
    allBlocks: state.allBlocks
  }),
  dispatch => bindActionCreators({
  }, dispatch)
)(ListBlocks);