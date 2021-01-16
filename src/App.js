import React ,{Component} from 'react';
import Header from './Header';
import Memecreator from './Memecreator';
import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  click() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  render() {
    return (
      <div>
        {/* <p>{this.state.count}</p>
        <button onClick={ () => this.click()}>Add</button> */}
         <Header />
         <Memecreator />
      </div>
    );
  }
}

export default App;
