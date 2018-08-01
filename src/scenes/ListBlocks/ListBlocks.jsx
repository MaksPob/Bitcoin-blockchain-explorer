import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import './styles.scss';

import { timeFormated, unixTimeFormated } from '../../utils/moment';
import Header from '../../components/Header/Header.jsx';
import { getBlocksDay, getOneBlock, getBlockByHeight } from '../../redux/actions/blocks';

class ListBlocks extends Component {
  state = {
    time: Date.now()
  };

  componentDidMount() {
    const { getBlocksDay } = this.props;
    const { time } = this.state;
    getBlocksDay(time);
  }

  render() {
  const { allBlocks, getBlocksDay, getOneBlock } = this.props;
  const { time } = this.state;
  return (
    <div>
      <Header />
      <div className="listBlocks">
        <div className="listBlocks__pagination">
          <div className="listBlocks__pagination-back">
            <button onClick={()=> { 
              const lastDay = time - 86400000;
              getBlocksDay(lastDay);
              this.setState({ time: lastDay });
            }}>{'<< '}Back</button>
          </div>
          <div className="listBlocks__title"><h3>Blocks mined on: {timeFormated(time)}</h3></div>
          <div className="listBlocks__pagination-next">
            <button onClick={()=> { 
              const nextDay = time + 86400000;
              getBlocksDay(nextDay);
              this.setState({ time: nextDay })
            }}>Next{' >>'}</button>
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
                {Array.isArray(allBlocks) &&
                allBlocks.map((block) => {
                  return (
                    <tr key={block.hash}>
                      <td>
                        <Link to={`/block-height/${block.height}`} onClick={() => getBlockByHeight(block.height)}>{block.height}</Link>
                      </td>
                      <td>{unixTimeFormated(block.time)}</td>
                      <td>
                        <Link to={`/block/${block.hash}`} onClick={() => getOneBlock(block.hash)}>{block.hash}</Link>
                      </td>
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
}


export default connect(
  state => ({ 
    allBlocks: state.allBlocks
  }),
  dispatch => bindActionCreators({
    getBlocksDay,
    getOneBlock
  }, dispatch)
)(ListBlocks);