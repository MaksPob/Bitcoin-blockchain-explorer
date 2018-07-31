import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './styles.scss';

import { unixTimeFormated } from '../../utils/moment';

import Header from '../../components/Header/Header.jsx';
import BlockTableInfo from '../../components/BlockTableInfo/BlockTableInfo.jsx';

const BlockByHeight = (props) => {
  return (
    <div>
      <Header />
      <h1>Данные блока</h1>
      <BlockTableInfo />
    </div>
  );
}


export default connect(
  state => ({
  }),
  dispatch => bindActionCreators({
  }, dispatch)
)(BlockByHeight);