import React from 'react';
import Battle from './Battle';
import TopStars from './TopStars';
import Winner from './Winner';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputOne: '',
      inputTwo: '',
      dataOne: null,
      dataTwo: null,
    };
  }

  handleChange = ({ target }) => {
    let { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event, input, playerData) => {
    event.preventDefault();
    if (this.state[input]) {
      this.fetchData(input, playerData);
    }
  };

  fetchData = (input, playerData) => {
    fetch(`https://api.github.com/users/${this.state[input]}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          [playerData]: data,
        });
      });
  };

  handleRemovePlayer = (player, data) => {
    this.setState({ [player]: '', [data]: '' });
  };

  handleReset = () => {
    this.setState({
      inputOne: '',
      inputTwo: '',
      playerOne: false,
      playerTwo: false,
      dataOne: null,
      dataTwo: null,
    });
  };

  render() {
    return (
      <div className='light'>
        <div className='container'>
          <Router>
            <Switch>
              <Route path='/' exact>
                <TopStars />
              </Route>
              <Route path='/battle' exact>
                <Battle
                  state={this.state}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  handleRemovePlayer={this.handleRemovePlayer}
                />
              </Route>
              <Route path='/battle/result' exact>
                <Winner handleReset={this.handleReset} state={this.state} />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
