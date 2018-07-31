import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Highcharts from 'react-highcharts';

import Header from '../../components/Header/Header.jsx';
import Main from '../../components/Main/Main.jsx';

import { getBlocksDayInfo } from '../../redux/actions/blocks';

class ChartLastBlocks extends Component {
  componentDidMount = () => {
    const { getBlocksDayInfo } = this.props;
    getBlocksDayInfo();
  }
  
  render() {
    const { allBlocks } = this.props;
    const config = {
      title: {
        text: "Blocks last 24 hours"
      },
      chart: {
        defaultSeriesType: 'column'
      },
      xAxis: {
        categories: allBlocks.height
      },
      series: [{
        data: allBlocks.lengthTransactions
      }]
    };
    return (
      <div >
        <Header />
        <Highcharts config = {config}/>
      </div>
    );
  }
}


export default connect(
  state => ({
    allBlocks: state.allBlocks
  }),
  dispatch => bindActionCreators({
    getBlocksDayInfo
  }, dispatch)
)(ChartLastBlocks);