import React, { Component } from 'react';
import InfoCard from './InfoCard';
import './App.css';

class CardSpace extends Component {
  constructor(props, context){
    super(props);
    this.props = props;
    this.state = {
    }
  }

  renderInfoCard(){
    return this.props.infoCard.map(ic => {
      return <InfoCard key={ic.id} infoCard={ic.buscar} url={ic.url}/>;
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