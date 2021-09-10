import React, { Component } from "react";
import { connect } from 'react-redux';

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import { fetchSmurfs } from "./actions";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {

  componentDidMount() {
    this.props.fetchSmurfs();
  }

  ifErrorOrLoading = () => {
    if(this.props.isLoading){
      return <h2>Getting Smurf database information</h2>
    }
    
    if(this.props.errorMessage){
      return <h2> We have an error: {this.props.errorMessage}</h2>;
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          {this.ifErrorOrLoading() ? this.ifErrorOrLoading() : <SmurfList /> }
          <AddForm/>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    errorMessage: state.errorMessage,
    isLoading: state.isLoading
  })
}

export default connect(mapStateToProps, {fetchSmurfs})(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads. 