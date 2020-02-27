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
      fetched: false,
      fixed: false,
      variable: false
    }
  }

  getAllData(){
    axios.get('https://demo.staging.energyhelpline-aws.com/api/results/a8823b4b-1abe-41de-a5b3-ab6700c08d98')
    .then((res) => {
      const all_data = res.data.elecResults;
      const shortened_res = all_data.slice(3, 23)
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

  showFixed = () => {
    for(let i=0; i<this.state.data.length; i++){
      if(this.state.data[i].tariffType === 'fixed') {
          this.setState({
              fixed: true,
              variable: false
          })
      }
    }
  }
  showVariable = () => {
    for(let i=0; i<this.state.data.length; i++){
      if(this.state.data[i].tariffType === 'variable') {
          this.setState({
              fixed: false,
              variable: true
          })
      }
    }
  }


  componentDidMount(){
    this.getAllData();
    this.showFixed();
    this.showVariable();
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
          {this.state.fetched ? <Overview allState={this.state} showFixed={this.showFixed} showVariable={this.showVariable}/> : 'Sorry we are just collecting the data for you... please wait.'} 
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
