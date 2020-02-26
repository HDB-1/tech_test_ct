import React from 'react';
import './App.css';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Overview from '../../components/Overview';
import Navbar from '../../components/Navbar';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: [],
      fetched: false
    }
  }

  getAllData(){
    axios.get('https://demo.staging.energyhelpline-aws.com/api/results/a8823b4b-1abe-41de-a5b3-ab6700c08d98')
    .then((res) => {
      const all_data = res.data.elecResults;
      const shortened_res = all_data.slice(1, 20)
      this.setState({
        data: shortened_res,
        fetched: true
      })
      console.log(this.state.data)
    })
    .catch((err) => {
      console.log('this is the error: ' + err)
    })
  }

  componentDidMount(){
    this.getAllData();
  }

  render() {
    return (
      <Router className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <p>Welcome to the App</p>
          </Route>
          <Route exact path="/info">
          {this.state.fetched ? <Overview info={this.state.data}/> : 'Sorry there was a problem getting the data!'} 
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
