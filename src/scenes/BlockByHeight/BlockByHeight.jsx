import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './styles.scss';

import { unixTimeFormated } from '../../utils/moment';

import Header from '../../components/Header/Header.jsx';

const BlockByHeight = (props) => {
  return (
    <div>
      <Header />
    </div>
  );
}


export default connect(
  state => ({
  }),
  dispatch => bindActionCreators({
  }, dispatch)
)(BlockByHeight);