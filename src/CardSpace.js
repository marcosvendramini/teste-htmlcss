import React, { Component } from 'react';
import InfoCard from './InfoCard';
import './App.css';

class CardSpace extends Component {
  constructor(props, context){
    super(props);
    this.props = props;
    this.state = {
      id:""
    }
  }

  callbackExc(id){
    this.state.id=id;
    this.setState(this.state);
    this.props.callbackExc(this.state.id);
  }

  renderInfoCard(){
    return this.props.infoCard.map(ic => {
      return <InfoCard key={ic.id} infoCard={ic.buscar} url={ic.url} id={ic.id} callbackExc={this.callbackExc.bind(this)}/>;
   });
  }
  
  render() {
    return (
      <div className="card">
        {this.renderInfoCard()}
      </div>
    );
  }
}

export default (CardSpace);