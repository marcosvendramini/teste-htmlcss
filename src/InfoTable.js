import React, { Component } from 'react';
import './App.css';

class InfoTable extends Component {
  constructor(props, context){
    super(props);
    this.props = props;
    this.state = {
      close: false,
    }
  }

  handleClick(e) {
    this.state.close= !this.state.close;
    this.setState(this.state);
  }
  
  render() {
    return (
      !this.state.close?
        <tr>
          <td>{this.props.infoCard.companyName}</td>
          <td>${this.props.infoCard.latestPrice}</td>
          <td>{this.props.infoCard.latestTime}</td>
          <td>{this.props.infoCard.sector}</td>
          <td>${this.props.infoCard.high}</td>
          <td>${this.props.infoCard.low}</td>
          <td>{this.props.infoCard.change}%</td>
          <td type="button" onClick={this.handleClick.bind(this)}>X</td>
        </tr>
      :
        null
    );
  }
}

export default (InfoTable);
  

