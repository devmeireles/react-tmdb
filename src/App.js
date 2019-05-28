import React, {Component} from 'react';
import Navigation from './components/Navigation';
import MovieList from './components/MoviesList';
import './App.css';
import Routes from './routes';

class App extends Component{
  constructor(props){
    super(props);
    
  }

  render(){
    return (
      <div className="App">
        <div>
          <Navigation />
          <div className="fluid-container">
            <Routes />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
