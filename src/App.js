import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addCuisine, addTextToStore } from './actions';

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
      <button onClick={() => this.props.submitAddCuisine(newCuisine)}>Add Cuisine</button>
      <button onClick={this.props.testProp}>Test Prop</button>
      <input type="text" onChange={this.props.textIntoStore} />
      <br />
      <p>{this.props.text}</p>
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  submitAddCuisine: (newCuisine) => dispatch(addCuisine(newCuisine)),
  testProp: () => console.log("hi i am a test"),
  textIntoStore: (e) => dispatch(addTextToStore(e.target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)

