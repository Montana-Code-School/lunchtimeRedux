import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addCuisine } from './actions';

import Lunch from './lunch';

class App extends Component {
  render() {
    console.log(this.props);
    const newCuisine = {
      foodOrigin: "american",
      tasty: true,  
      lunch:"hotdog",
      drink:"coors lite",
      chitchat:"howwwdeee naaaybor! gidddeeeyup buster!"
    }
    return (
      <div className="App">
       {this.props.cuisineList.map((x) => 
         <Lunch
           {...x}
         />
       )}
      <button onClick={() => this.props.addCuisine(newCuisine)}>Add Cuisine</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  addCuisine: (newCuisine) => dispatch(addCuisine(newCuisine))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)

