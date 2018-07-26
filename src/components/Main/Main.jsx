import React, { Component } from 'react';

import './styles.scss';

import LastBlocks from '../LastBlocks/LastBlocks.jsx';
import LastTransactions from '../LastTransactions/LastTransactions.jsx';

const Main = (props) => {
  return (
    <div className="main">
      <LastBlocks />
      <LastTransactions />
    </div>
  );
}


export default Main;