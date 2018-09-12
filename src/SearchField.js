import React, { Component } from 'react';
import './App.css';

class SearchField extends Component {
  constructor(props, context){
    super(props);
    this.props = props;
    this.key = null;
    this.state = {
      busca: "",
      stockInfo: {},
      url: {}
    }
  }
  
  handleChange(e){
    this.state.busca=e.target.value;
    this.setState(this.state);
  }

  handleKeyPress(e){
    if (e.keyCode==13){
      e.preventDefault();      
      fetch(`https://api.iextrading.com/1.0/stock/${this.state.busca}/quote`).then(resp => resp.json()).then((respdt)=>{ 
        this.state.stockInfo = respdt;
        this.setState(this.state);
        fetch(`https://api.iextrading.com/1.0/stock/${this.state.busca}/logo`).then(logo=> logo.json()).then((logodt)=>{
          this.state.url = logodt;
          this.setState(this.state);
          this.props.callbackFn(this.state.stockInfo, this.state.url);
          this.state.busca = "";
          this.setState(this.state);
        })
      }).catch(e=>{
        alert("Empresa Inválida");
        this.state.busca = "";
        this.setState(this.state);
      })
    }
  }

  render() {
    return (
      <div className="searchF">
        <form>
          <input className="search"
            type="text"
            placeholder="Pesquise uma empresa"
            onChange={this.handleChange.bind(this)}
            onKeyDown={this.handleKeyPress.bind(this)}
            value={this.state.busca}
          />
        </form>
      </div>
    );
  }
}

export default (SearchField);
