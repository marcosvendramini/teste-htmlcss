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
      spaceType:"card",
      key:0
    }
  }

  callbackSF(buscar, url){
    let id = this.state.key;
    let elements = {id, buscar, url};
    this.state.infoCard.unshift(elements);
    this.state.key=id+1;
    this.setState(this.state);
  }

  callbackCd(spacetp){
    this.state.spaceType=spacetp;
    this.setState(this.state);
  }

  callbackExc(id){
    id=this.state.infoCard.map(ic=>{return ic.id}).indexOf(id);
    this.state.infoCard.splice(id,1);
    this.setState(this.state);
  }

  renderInfoCard(){
    return <CardSpace infoCard={this.state.infoCard} callbackExc={this.callbackExc.bind(this)}/>;
  }
  
  renderInfoTable(){
    return <TableSpace infoCard={this.state.infoCard} callbackExc={this.callbackExc.bind(this)}/>;
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
