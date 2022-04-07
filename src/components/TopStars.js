import React from 'react';
import Nav from './Nav';
import {
  faCodeFork,
  faStar,
  faStarOfDavid,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Loading from './Loading';

class TopStars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: 'All',
      loadedTagName: '',
      data: [],
    };
  }

  componentDidMount() {
    this.fetchLanguagesData();
  }

  fetchLanguagesData() {
    if (this.state.tag === this.state.loadedTagName) return null;

    fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:${this.state.tag}&sort=stars&order=desc&type=Repositories`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data: data.items, loadedTagName: this.state.tag });
      });
  }

  componentDidUpdate() {
    this.fetchLanguagesData();
  }

  handleChangeTag = (tag) => {
    this.setState({ tag });
  };

  render() {
    let tagArr = ['All', 'JavaScript', 'Python', 'Ruby', 'Java', 'CSS'];
    if (!this.state.data.length) {
      return <Loading />;
    }
    return (
      <>
        <Nav />
        <div>
          <ul className='tag-holder'>
            {tagArr.map((lang) => {
              return (
                <CreateTag
                  handleChangeTag={this.handleChangeTag}
                  key={lang}
                  val={lang}
                  tag={this.state.tag}
                />
              );
            })}
          </ul>
          <ul className='card-holder'>
            {this.state.data.map((singleCard, i) => {
              return <Card key={i} info={singleCard} i={i} />;
            })}
          </ul>
        </div>
      </>
    );
  }
}

function Card(props) {
  return (
    <li className='card'>
      <span className='rank'>#{props.i + 1}</span>
      <img
        src={props.info.owner.avatar_url}
        className='card-img'
        alt={props.id}
      />
      <a href={props.info.html_url} className='card-github-link'>
        {props.info.name}
      </a>
      <h2 className='card-username'>
        {' '}
        {<FontAwesomeIcon icon={faUser} />} {props.info.name}
      </h2>
      <h2 className='card-stars'>
        {' '}
        {<FontAwesomeIcon icon={faStar} />} {props.info.stargazers_count} stars
      </h2>
      <h2 className='card-fork'>
        {' '}
        {<FontAwesomeIcon icon={faCodeFork} />} {props.info.forks} forks
      </h2>
      <h2 className='card-issue'>
        {' '}
        {<FontAwesomeIcon icon={faStarOfDavid} />}{' '}
        {props.info.open_issues_count} open issue
      </h2>
    </li>
  );
}

function CreateTag(props) {
  return (
    <li>
      <button
        onClick={() => props.handleChangeTag(props.val)}
        className={
          props.tag === props.val ? 'active tag-btn pointer' : 'tag-btn pointer'
        }
      >
        {props.val}
      </button>
    </li>
  );
}

function Loading() {
  return <h1 className='loading-h1'>Loading...</h1>;
}
export default TopStars;
