import React from 'react';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor() {
    this.state = {};
    return (<div className="App">
      <Calculator />
    </div>)
  }
}

export default App;
