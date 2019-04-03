import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { decorate, observable, configure, action, computed } from "mobx";
import { observer } from "mobx-react";


configure({ enforceActions: true })

class Store {
    cuisineList = [
      {
          foodOrigin: "greek",
          tasty: true,  
          lunch:"pasta",
          drink:"green tea",
          chitchat:"talkie talkie"
      },
      {
          foodOrigin: "british",
          tasty: false,  
          lunch:"boiled racoon",
          drink:"scotch",
          chitchat:"'ello bloody hell ye bloody git"  
      },
      {
          foodOrigin: "mexican",
          tasty: true, 
          lunch:"enchiladas",
          drink:"chili margarita",
          chitchat:"hola que pasa amigo"   
      }
    ] 
    newCuisine = {
      foodOrigin: "",
      tasty: null, 
      lunch: "",
      drink: "",
      chitchat: "", 
    }

    modifyNewCuisine(obj){
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          this.newCuisine[key] = obj[key];
        }
      }
    }
    
    updateNewCuisine(){
      console.log("update new cuisine: ", this.newCuisine);
      this.pushCuisine(this.newCuisine);
    }

    pushCuisine(e) {
      this.cuisineList.push(e)
    }
  }
  decorate(Store, {
    cuisineList: observable,
    pushCuisine: action,
    updateNewCuisine: action,
    newCuisine: observable,
    modifyNewCuisine: action,
  })
  
  const appStore = new Store()
  

ReactDOM.render(<App store={appStore} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
