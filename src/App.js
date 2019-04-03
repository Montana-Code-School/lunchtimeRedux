import React, { Component } from 'react';
import { decorate, observable, configure, action, computed } from "mobx";
import { observer } from "mobx-react";

import Lunch from './lunch';

configure({ enforceActions: true })

class App extends Component {
  
  addCuisine = () => {
    this.props.store.pushCuisine(this.props.store.newCuisine);
  }
  render() {
    console.log(this.props.store)
    return (
      <div className="App">
        {this.props.store.cuisineList.map((x) => <Lunch {...x} key={x.lunch}/>)}
        <button onClick={() => this.addCuisine()}>add a cuisine</button>
        <input type="text" placeholder="f" onChange={(e) => this.props.store.modifyNewCuisine({foodOrigin: e.target.value})}/>
        <input type="checkbox" placeholder="t" onChange={(e) => this.props.store.modifyNewCuisine({tasty: e.target.checked})}/>
        <input type="text" placeholder="l" onChange={(e) => this.props.store.modifyNewCuisine({lunch: e.target.value})}/>
        <input type="text" placeholder="d" onChange={(e) => this.props.store.modifyNewCuisine({drink: e.target.value})}/>
        <input type="text" placeholder="c" onChange={(e) => this.props.store.modifyNewCuisine({chitchat: e.target.value})}/>
        <p>{this.props.store.newCuisine.foodOrigin}</p>
        <p>{this.props.store.newCuisine.lunch}</p>
        <p>{this.props.store.newCuisine.tasty? "tasty!" : "yuck!" }</p>
      </div>
    );
  }
}
App = observer(App)
export default App;
