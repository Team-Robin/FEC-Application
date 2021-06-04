

import React from 'react';


// const App = (props) => {
//   return (
//     <div className="prime-color">From React!</div>
//   )
// }

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      product: []
    }
  }

  render() {
    return (
      <div className="prime-color">From React!</div>
    )
  }
}

export default App;

