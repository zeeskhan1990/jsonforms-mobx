import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { getData } from '@jsonforms/core';
import { JsonForms } from '@jsonforms/react';
import { inject, observer } from 'mobx-react';


export default inject("jsonFormsStore")(observer(class App extends Component {
  render() {
    const printedStore = JSON.stringify(this.props.jsonFormsStore, null, 2)
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to JSON Forms with React</h1>
            <p className="App-intro">More Forms. Less Code.</p>
          </header>
        </div>

        <h4 className="data-title">Bound data</h4>
        <div className="data-content">
          <pre>Show Data Here</pre>
        </div>

        <div className="demoform">
          <JsonForms />
        </div>
      </div>
    );
  }

}))

/* const mapStateToProps = state => {
  return { dataAsString: JSON.stringify(getData(state), null, 2) }
}; */

