import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';

import './styles.scss';

import { getOneTransaction } from '../../redux/actions/transactions';
import { getBlockByHeight } from '../../redux/actions/blocks';
import { history } from '../../router/Router.jsx';

import { isString } from '../../utils/validation';

class Header extends Component {
  state = {
    heightOrHash: '',
    toggleSearch: false,
    toggleBar: false
  };
  
  changeSearchState = () => {
    const { toggleSearch } = this.state;
    toggleSearch ? this.setState({ toggleSearch: false }) : this.setState({ toggleSearch: true });
  };

  changeBarState = () => {
    const { toggleBar } = this.state;
    toggleBar ? this.setState({ toggleBar: false }) : this.setState({ toggleBar: true });
  };

  setHeightOrHash = ({ target: { value} }) => {
    const typeVal = isString(value);
    typeVal === "isString" ? this.setState({ heightOrHash: value }) : this.setState({ heightOrHash: value });
  }

  findByHeightOrHash = ({ key }) => {
    const { heightOrHash } = this.state;
    const { getOneTransaction, getBlockByHeight } = this.props;
    if (key === "Enter") {
      if (isString(heightOrHash) === "isString") {
        getOneTransaction(heightOrHash);
        history.push(`/transaction/${heightOrHash}`);
      }  
      if (isString(heightOrHash) == +heightOrHash) {
        getBlockByHeight(heightOrHash);
        history.push(`/block-height/${heightOrHash}`);
      }
    }
  }

  render() {
    const { toggleBar } = this.state;
    const { getListBlocks } = this.props;
      return (
        <header className = "navbar">
          <div className = "navbar__logo">
            <Link to='/'>BLOCKCHAIN</Link>
            <div>
              <button onClick={() => this.changeBarState()}>
                <i className="fa fa-bars" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div className={toggleBar ? "navbar__btnChart_visible" : "navbar__btnChart"}>
            <Link to='/graphic'>Daily chart</Link>
          </div>
          <div className={toggleBar ? "navbar__btnChart_visible" : "navbar__btnChart"}>
            <Link to='/listBlocks'>List blocks</Link>
          </div>
          <div className={toggleBar ? "navbar__search_visible" : "navbar__search"}>
            <button onClick={() => this.changeSearchState()}><i className="fa fa-search" aria-hidden="true"></i></button>
            { this.state.toggleSearch &&
              <input
                  className = "search__input"
                  placeholder = "Lookup blocks, transactions, hash..."
                  onChange = {(e) => this.setHeightOrHash(e)}
                  onKeyDown = {(e) => this.findByHeightOrHash(e)}
              />
            }
          </div>
        </header>
      );
  }
}

export default connect(
  state => ({
  }),
  dispatch => bindActionCreators({
    getOneTransaction,
    getBlockByHeight,
  }, dispatch)
)(Header);