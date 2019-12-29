import React, { Fragment, Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import AngryJoe from './components/AngryJoe';
import * as Cards from './components/cards';


class App extends Component {
  state = {
    selectedCardType: ''
  };


  render(){
    return (
      <Fragment>
        <div className="app-bar">
          <h1 className="app-bar-title">MARVEL CARD SELECTOR!</h1>
        </div>
        <section className="app-section container">
          {this.renderCardSelector()}

          <div className="top-margin-small">
            {this.renderSelectedCard(this.state.selectedCardType)}
          </div>
        </section>
      </Fragment>
    );
  }


  renderCardSelector() {
    return (
      <div className="form-group top-margin-small">
        <label className="card-selector-label">Select Card Style</label>
        <select className="card-selector form-control"
          onChange={(e) => this.setState({ selectedCardType: e.target.value })}>
          <option></option>
          <option>CardA</option>
          <option>CardB</option>
        </select>
      </div>
    );
  }


  renderSelectedCard(selectedCardType) {
    if (!selectedCardType)
      return <AngryJoe text="Pick a card style bruh!" />;

    const Card = Cards[selectedCardType];

    return <Card />;
  }
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
