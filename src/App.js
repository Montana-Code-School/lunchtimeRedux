import React, { Component } from 'react';
import { decorate, observable, configure, action, computed } from "mobx";
import { observer } from "mobx-react";

import Lunch from './lunch';

configure({ enforceActions: true })

class App extends Component {
  state = {
    f: "",
    t: null,
    l: "",
    d: "",
    c: ""
  }
  addCuisine = () => {
    const { f, t, l, d, c } = this.state;
    const newCuisine = {
      foodOrigin: f,
      tasty: t, 
      lunch: l,
      drink: d,
      chitchat: c   
    }
    this.props.store.pushCuisine(newCuisine);
  }
  render() {
    return (
      <div className="App">
        {this.props.store.cuisineList.map((x) => <Lunch {...x} />)}
        <button onClick={() => this.addCuisine()}>add a cuisine</button>
        <input type="text" label="f" onChange={(e) => this.setState({f: e.target.value})}/>
        <input type="text" label="t" onChange={(e) => this.setState({t: e.target.value})}/>
        <input type="text" label="l" onChange={(e) => this.setState({l: e.target.value})}/>
        <input type="text" label="d" onChange={(e) => this.setState({d: e.target.value})}/>
        <input type="text" label="c" onChange={(e) => this.setState({c: e.target.value})}/>
      </div>
    );
  }
}
App = observer(App)
export default App;
