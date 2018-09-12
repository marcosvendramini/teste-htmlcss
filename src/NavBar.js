import React, { Component } from 'react';
import './App.css';
class NavBar extends Component {
  constructor(props, context){
    super(props);
    this.props = props;
    this.state = {
      tcard:""
    }
  }

  handleClickTime(e) {
    this.setState(this.state);
  }

  handleClickAZ(e) {
    this.setState(this.state);
  }

  handleClickCard(e) {
    this.state.tcard="card";
    this.setState(this.state);
    this.props.callbackCard(this.state.tcard);
  }

  handleClickTable(e) {
    this.state.tcard="";
    this.setState(this.state);
    this.props.callbackCard(this.state.tcard);
  }

  render() {
    return (
    <nav>
      <div className="navbar">
        <div type="button" className="navButtons" onClick={this.handleClickCard.bind(this)}>Visualizar em Cartão</div>
        <div type="button" className="navButtons" onClick={this.handleClickTable.bind(this)}>Visualizar em Tabela</div>
      </div>
    </nav>
    );
  }
}

export default (NavBar);