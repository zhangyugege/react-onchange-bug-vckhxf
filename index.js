import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

class App extends Component {
  render() {
    return (
       <form onChange={e => console.log(e.target.value)}>
        <label>
          <input type={'radio'} name={'myGroup'} value={1} defaultChecked={true} onChange={e => console.log('one click', e.target.value)}/>
          Value 1
        </label>
        <label>
          <input type={'radio'} name={'myGroup'} value={2} onChange={e =>
          console.log('two click', e.target.value)}/>
          Value 2
        </label>
      </form>
    );
  }
}

render(<App />, document.getElementById('root'));
