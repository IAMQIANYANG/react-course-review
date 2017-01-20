import React, {Componet, PropTypes} from 'react';

class App extends Componet {
  render() {
    return (
      <div className="container-fluid">
        <p>Header here...</p>
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App