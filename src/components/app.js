import React, {
  Component
} from 'react';
import Menu from './menu.js';

export default class App extends Component {

  render() {
    return (
      <div>
          <Menu />
          <div className='main'>
            {this.props.children}
          </div>
      </div>
    );
  }
  
}