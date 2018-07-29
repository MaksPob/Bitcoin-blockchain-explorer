import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './styles.scss';

import Header from '../../components/Header/Header.jsx';

import { timeFormated, unixTimeFormated } from '../../utils/moment';


const Transaction = (props) => {
  return (
    <div className="transaction">
      <Header />
    </div>
  );
}


export default connect(
  state => ({
  }),
  dispatch => bindActionCreators({
  }, dispatch)
)(Transaction);