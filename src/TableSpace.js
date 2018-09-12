import React, { Component } from 'react';
import InfoTable from './InfoTable';
import './App.css';

class TableSpace extends Component {
  constructor(props, context){
    super(props);
    this.props = props;
    this.state = {
      id:""
    }
  }

  renderInfoCard(){
    return this.props.infoCard.map(ic => {
      return <InfoTable key={ic.id} infoCard={ic.buscar} url={ic.url} id={ic.id} callbackExc={this.callbackExc.bind(this)}/>;
   });
  }

  callbackExc(id){
    this.state.id=id;
    this.setState(this.state);
    this.props.callbackExc(this.state.id);
  }
  
  render() {
    return (
      <table className="infoTable">
        <tr>
          <th>Companhia</th>
          <th>Valor Atual</th>
          <th>Última Atualização</th>
          <th>Setor</th>
          <th>Maior Valor</th>
          <th>Menor Valor</th>
          <th>Mudança</th>
          <th>Excluir linha</th>
        </tr>
        {this.renderInfoCard()}
      </table>
    );
  }
}

export default (TableSpace);