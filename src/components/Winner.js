import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeFork, faStar, faUser } from '@fortawesome/free-solid-svg-icons';

class Winner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scoreOne: 0,
      scoreTwo: 0,
    };
  }

  componentDidMount() {
    let { dataOne, dataTwo } = this.props.state;
    let { scoreOne, scoreTwo } = this.state;
    if (dataOne.message !== 'Not Found' && dataTwo.message !== 'Not Found') {
      scoreOne = dataOne.followers * 20 + dataOne.public_repos;
      scoreTwo = dataTwo.followers * 20 + dataTwo.public_repos;
    }
    this.setState({ scoreOne, scoreTwo });
  }

  render() {
    return (
      <div className='winner'>
        <Nav />
        {this.props.state.dataOne.message ||
        this.props.state.dataTwo.message ? (
          <>
            <h2 className='not-found'>Match Not found</h2>
            <Link to='/battle'>
              <span
                onClick={this.props.handleReset}
                className='submit-dark reset'
              >
                RESET
              </span>
            </Link>
          </>
        ) : (
          <div>
            <ul className='battle-player-holder flex'>
              <li className='card'>
                <span className='rank'>
                  {this.state.scoreTwo < this.state.scoreOne
                    ? 'Winner'
                    : this.state.scoreTwo > this.state.scoreOne
                    ? 'Loser'
                    : this.state.scoreTwo === this.state.scoreOne
                    ? 'Tie'
                    : ''}
                </span>
                <img
                  src={this.props.state.dataOne.avatar_url}
                  className='card-img'
                  alt={this.props.state.dataOne.id}
                />
                <h2 className='score'>Score: {this.state.scoreOne}</h2>
                <h2 className='card-username playerName'>
                  {' '}
                  {this.props.state.dataOne.login}
                </h2>
                <h2 className='card-stars'>
                  {' '}
                  {<FontAwesomeIcon icon={faUser} />}{' '}
                  {this.props.state.dataOne.followers} Followers
                </h2>
                <h2 className='card-stars'>
                  {' '}
                  {<FontAwesomeIcon icon={faStar} />}{' '}
                  {this.props.state.dataOne.following} Following
                </h2>
                <h2 className='card-fork'>
                  {' '}
                  {<FontAwesomeIcon icon={faCodeFork} />}{' '}
                  {this.props.state.dataOne.public_repos} repositories
                </h2>
              </li>
              <li className='card'>
                <span className='rank'>
                  {this.state.scoreTwo > this.state.scoreOne
                    ? 'Winner'
                    : this.state.scoreTwo < this.state.scoreOne
                    ? 'Loser'
                    : this.state.scoreTwo === this.state.scoreOne
                    ? 'Tie'
                    : ''}
                </span>
                <img
                  src={this.props.state.dataTwo.avatar_url}
                  className='card-img'
                  alt={this.props.state.dataTwo.id}
                />
                <h2 className='score'>Score: {this.state.scoreTwo}</h2>
                <h2 className='card-username playerName'>
                  {' '}
                  {this.props.state.dataTwo.login}
                </h2>
                <h2 className='card-username'>
                  {' '}
                  {<FontAwesomeIcon icon={faUser} />}{' '}
                  {this.props.state.dataTwo.followers} Followers
                </h2>
                <h2 className='card-stars'>
                  {' '}
                  {<FontAwesomeIcon icon={faStar} />}{' '}
                  {this.props.state.dataTwo.following} Following
                </h2>
                <h2 className='card-fork'>
                  {' '}
                  {<FontAwesomeIcon icon={faCodeFork} />}{' '}
                  {this.props.state.dataTwo.public_repos} repositories
                </h2>
              </li>
            </ul>
            <Link to='/battle'>
              <span
                onClick={this.props.handleReset}
                className='submit-dark reset pointer'
              >
                RESET
              </span>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default Winner;
