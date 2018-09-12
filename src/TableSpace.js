import React, { Component } from 'react';
import InfoTable from './InfoTable';
import './App.css';

class TableSpace extends Component {
  constructor(props, context){
    super(props);
    this.props = props;
    this.state = {
    }
  }

  renderInfoCard(){
    return this.props.infoCard.map(ic => {
      return <InfoTable key={ic.id} infoCard={ic.buscar} url={ic.url}/>;
   });
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