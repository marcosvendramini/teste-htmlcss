import React, { Component } from 'react';
import './App.css';
import SearchField from './SearchField.js';
import CardSpace from './CardSpace';
import NavBar from './NavBar';
import TableSpace from './TableSpace';

class App extends Component {
  constructor(props, context){
    super(props);
    this.props = props;
    this.state = {
      infoCard: [],
      spaceType:"card"
    }
  }

  callbackSF(buscar, url){
    let id = this.state.infoCard.length + 1;
    let elements = {id, buscar, url};
    this.state.infoCard.unshift(elements);
    this.setState(this.state);
  }

  callbackCd(spacetp){
    this.state.spaceType=spacetp;
    this.setState(this.state);
  }

  renderInfoCard(){
    return <CardSpace infoCard={this.state.infoCard}/>;
  }
  
  renderInfoTable(){
    return <TableSpace infoCard={this.state.infoCard}/>;
  }

  renderInfos(){
    return(
      this.state.spaceType=="card"?
        <div className="card">
          {this.renderInfoCard()}
        </div>
      :
        <div className="table">
          {this.renderInfoTable()}
        </div>
    );
  }
  render() {
    return (
      <div className="App">
        <header>
          <SearchField callbackFn={this.callbackSF.bind(this)}/>
        </header>
        <div className= "navBarDiv">
          <NavBar callbackCard={this.callbackCd.bind(this)}/>
        </div>
        {this.renderInfos()}
        <footer>
          Dados fornecidos pela <a href="https://iextrading.com">IEX</a>
        </footer>
      </div>
    );
  }
}

export default (App);
