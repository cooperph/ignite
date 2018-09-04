import React, { Component } from 'react';
import './App.css';
import BottomBar from './containers/bottomBar/bottomBar';
import LogoBar from './containers/logoBar/logoBar';
import SideBar from './containers/sideBar/sideBar'
import BusinessInfo from './containers/content/businessInfo';
import PayingVendors from './containers/content/payingVendors';
import NavBar from './containers/navBar/navBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 0,
    }

    this.getActivePage = this.getActivePage.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getActivePage() {
    switch(this.state.activePage) {
      case 1: 
        return <PayingVendors />
      default:
        return <BusinessInfo />
    }
  }

  handleClick(e) {
    console.log(e.target.id)
    if(e.target.id === 'next' && this.state.activePage !== 1 ) {
      this.setState({
        activePage: 1
      })
    } else if(e.target.id === 'back' && this.state.activePage !== 0 ) {
      this.setState({
        activePage: 0,
      })
    } else {
      console.log('Put up the Whale screen!')
    }
  }

  render() {    
    return (
      <div className="App flexColumn">
        <div className='topBar flexRow flexChild'>
          <div className='leftSide flexColumn flexChild'>
            <div className='logoBar flexChild'>
              <LogoBar />
            </div>
            <div className='content flexChild'>
              {this.getActivePage()}
            </div>
            <div className='navBar flexChild'>
              <NavBar handleClick={this.handleClick}/>
            </div>
          </div>
          <div className='rightSide flexChild'>
            <SideBar />
          </div>
        </div>
        <div className='bottomBar flexChild'>
          <BottomBar />
        </div>
      </div>
    );
  }
}

export default App;
