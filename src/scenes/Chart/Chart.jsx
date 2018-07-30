import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Highcharts from 'react-highcharts';

import Header from '../../components/Header/Header.jsx';
import Main from '../../components/Main/Main.jsx';

import { getRateAndBlocks } from '../../redux/actions/rate.js';
import { arrTimeFormated } from '../../utils/moment';

class ChartLastBlocks extends Component {
  componentDidMount = () => {
    
  }
  
  render() {
    const config = {
      title: {
        text: "Blocks last 24 hours"
      },
      chart: {
        defaultSeriesType: 'column'
      },
      xAxis: {
        categories: [1,2,2,41,414]
      },
      series: [{
        data: [1436,7548694,313131]
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
  }),
  dispatch => bindActionCreators({
  }, dispatch)
)(ChartLastBlocks);