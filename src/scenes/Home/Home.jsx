import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom';
import Highcharts from 'react-highcharts';

import Header from '../../components/Header/Header.jsx';
import Main from '../../components/Main/Main.jsx';

import { getRateAndBlocks } from '../../redux/actions/rate.js';
import { arrTimeFormated } from '../../utils/moment';

class Home extends Component {

  componentDidMount = () => {
    this.props.getRateAndBlocks();
  }
  
  render() {
    const { rate } = this.props;
    const config = {
      title: {
        text: "Bitcoin price(USD) for last month"
      },
      xAxis: {
        categories: arrTimeFormated(rate.time)
      },
      series: [{
        data: rate.price
      }]
    };
    return (
      <div >
        <Header />
        <Highcharts config = {config}/>
        <Main />
      </div>
    );
  }
}


export default connect(
  state => ({
    rate: state.rate,
  }),
  dispatch => bindActionCreators({
    getRateAndBlocks
  }, dispatch)
)(Home);