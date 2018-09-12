import React, { Component } from 'react';
import './App.css';

class InfoCard extends Component {
  constructor(props, context){
    super(props);
    this.props = props;
    this.state = {
      expanded: false,
      close: false,
      transform: ""
    }
  }

  handleExpandClick (e) {
    this.state.expanded = !this.state.expanded;
    if(this.state.transform==""){
      this.state.transform=" rotate";
    }else{
      this.state.transform="";
    }
    this.setState(this.state);
  }

  handleClick(e) {
    this.state.close= !this.state.close;
    this.setState(this.state);
  }
  
  renderExpand(){
    return(
      this.state.expanded?
        <div className="expInfo">
            <p>Setor:&nbsp;{this.props.infoCard.sector}</p>
            <p>Maior Valor: ${this.props.infoCard.high}</p>
            <p>Menor Valor: ${this.props.infoCard.low}</p>
            <p>Mudança:&nbsp;{this.props.infoCard.change}%</p>
        </div>
      :
        null
    )
  }

  render() {
    return (
      !this.state.close?
        <div className="icard">
          <input className="closeB" type="button" onClick={this.handleClick.bind(this)}/>
          <img src={this.props.url.url} alt="icon"/>
          <div className="info">
            <h1>{this.props.infoCard.companyName}</h1>
            <p>Preço: ${this.props.infoCard.latestPrice}</p>
            <p>Data:&nbsp;{this.props.infoCard.latestTime}</p>
          </div>
          <div className="navBut">
            <a href="https://monetus.com.br/comecar" className="shareB" type="button"/>
            <input className={'expandB'+ this.state.transform} type="button" onClick={this.handleExpandClick.bind(this)}/>
          </div>
          {this.renderExpand()}
        </div>
      :
        null
    );
  }
}

export default (InfoCard);
  

