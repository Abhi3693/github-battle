import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import { faPlane, faTrophy, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Battle extends React.Component {
  render() {
    // console.log(this.props.state, 'INSODE BATTLE');
    return (
      <>
        <Nav />
        <div className='battle-page'>
          <section className='battle-hero'>
            <h2 className='battle-heading'>Instructions</h2>
            <div className='flex battle-card-holder'>
              <div className='battle-card'>
                <h3 className='battle-card-title'>Enter two Github User</h3>
                <div className='battle-icon-holder'>
                  <FontAwesomeIcon icon={faUsers} />
                </div>
              </div>
              <div className='battle-card'>
                <h3 className='battle-card-title'>Battle</h3>
                <div className='battle-icon-holder'>
                  <FontAwesomeIcon icon={faPlane} />
                </div>
              </div>
              <div className='battle-card'>
                <h3 className='battle-card-title'>See Winner</h3>
                <div className='battle-icon-holder'>
                  <FontAwesomeIcon icon={faTrophy} />
                </div>
              </div>
            </div>
          </section>
          <section className='battle-game'>
            <h2 className='battle-heading'>Players</h2>
            <div className='flex space-btw input-holder'>
              <div className='player playerOne'>
                <h3 className='player-title'>Player One</h3>
                {!this.props.state.dataOne ? (
                  <form
                    onSubmit={(event) =>
                      this.props.handleSubmit(event, 'inputOne', 'dataOne')
                    }
                  >
                    <input
                      className='input'
                      onChange={this.props.handleChange}
                      type='text'
                      placeholder='Github UserName'
                      name='inputOne'
                      value={this.props.state.inputOne}
                    />
                    <input
                      className={
                        this.props.state.inputOne
                          ? 'submit-dark pointer'
                          : 'submit-light pointer'
                      }
                      type='submit'
                      value='SUBMIT'
                    />
                  </form>
                ) : (
                  <div className='playerOne-found flex space-btw'>
                    <div className='flex gap-2 align-center'>
                      <img
                        className='playerImg'
                        src={this.props.state.dataOne.avatar_url}
                        alt={this.props.state.dataOne.id}
                      />
                      <h3 className='found-player-name'>
                        {this.props.state.dataOne.login}
                      </h3>
                    </div>
                    <span
                      onClick={() =>
                        this.props.handleRemovePlayer('inputOne', 'dataOne')
                      }
                      className='cross pointer'
                    >
                      X
                    </span>
                  </div>
                )}
              </div>
              <div className='player playerTwo'>
                <h3 className='player-title'>Player Two</h3>
                {!this.props.state.dataTwo ? (
                  <form
                    onSubmit={(event) =>
                      this.props.handleSubmit(event, 'inputTwo', 'dataTwo')
                    }
                  >
                    <input
                      className='input'
                      onChange={this.props.handleChange}
                      type='text'
                      placeholder='Github UserName'
                      name='inputTwo'
                      value={this.props.state.inputTwo}
                    />
                    <input
                      className={
                        this.props.state.inputTwo
                          ? 'submit-dark pointer'
                          : 'submit-light pointer'
                      }
                      type='submit'
                      value='SUBMIT'
                    />
                  </form>
                ) : (
                  <div className='playerOne-found flex space-btw '>
                    <div className='flex gap-2 align-center'>
                      <img
                        className='playerImg'
                        src={this.props.state.dataTwo.avatar_url}
                        alt={this.props.state.dataTwo.id}
                      />
                      <h3 className='found-player-name'>
                        {this.props.state.dataTwo.login}
                      </h3>
                    </div>
                    <span
                      onClick={() =>
                        this.props.handleRemovePlayer('inputTwo', 'dataTwo')
                      }
                      className='cross pointer'
                    >
                      X
                    </span>
                  </div>
                )}
              </div>
            </div>
          </section>
          <section>
            {!this.props.state.dataOne || !this.props.state.dataTwo ? (
              ''
            ) : (
              <Link to='/battle/result'>
                <button className='battle-fight submit-dark pointer'>
                  BATTLE
                </button>
              </Link>
            )}
          </section>
        </div>
      </>
    );
  }
}

export default Battle;
