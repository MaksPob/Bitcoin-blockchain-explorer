import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './styles.scss';

import { isString } from '../../utils/validation';
import { getListBlocks } from '../../redux/actions/blocks';

class Header extends Component {
  state = {
    height: '',
    hash:'',
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
    typeVal === "isString" ? this.setState({ hash: value }) : this.setState({ height: value });
  }

  findByHeightOrHash = ({ key }) => {
    key === "Enter" ? console.log(this.state) : false;
  }

  render() {
    const { toggleBar } = this.state;
    const { getListBlocks } = this.props;
      return (
        <header className = "navbar">
          <div className = "navbar__logo">BLOCKCHAIN
            <div>
              <button onClick={() => this.changeBarState()}>
                <i className="fa fa-bars" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div className={toggleBar ? "navbar__btnChart_visible" : "navbar__btnChart"}>
            <Link to='/graphic' onClick={() => console.log("hello!!!")}>Daily chart</Link>
          </div>
          <div className={toggleBar ? "navbar__btnChart_visible" : "navbar__btnChart"}>
            <Link to='/listBlocks' onClick={() => getListBlocks()}>List blocks</Link>
          </div>
          <div className={toggleBar ? "navbar__search_visible" : "navbar__search"}>
            <button onClick={() => this.changeSearchState()}><i className="fa fa-search" aria-hidden="true"></i></button>
            { this.state.toggleSearch &&
              <input
                  className = "search__input"
                  placeholder = "Lookup blocks, transactions, hash..."
                  onChange = {(e) => this.setHeightOrHash(e)}
                  onKeyPress = {(e) => this.findByHeightOrHash(e)}
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
    getListBlocks
  }, dispatch)
)(Header);