import React, { Component } from 'react';
import { decorate, observable, configure, action, computed } from "mobx";
import { observer } from "mobx-react";

import Lunch from './lunch';

configure({ enforceActions: true })

class App extends Component {
  addCuisine = () => {
    const newCuisine = {
      foodOrigin: "mexican",
      tasty: true, 
      lunch:"enchiladas",
      drink:"chili margarita",
      chitchat:"hola que pasa amigo"   
    }
    this.props.store.pushCuisine(newCuisine);
  }
  render() {
    return (
      <div className="App">
        {this.props.store.cuisineList.map((x) => <Lunch {...x} />)}
        <button onClick={() => this.addCuisine()}>add a cuisine</button>
      </div>
    );
  }
}
App = observer(App)
export default App;
