import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Page1 from './Page1';
import axios from 'axios';
import './App.css';

class DogBreed extends Component {
  constructor(props) {
    super(props);

    this.state = { images: [] };
    this.handleClickNavigate = this.handleClickNavigate.bind(this);
  }

  componentDidMount() {
    const { breed } = this.props.match.params;
    this.fetchImages(breed);
  }

  componentDidUpdate(prevProps) {
    const { breed } = this.props.match.params;
    if (breed !== prevProps.match.params.breed) {
      this.fetchImages(breed);
    }
  }

  fetchImages(breed) {
    axios.get(`https://dog.ceo/api/breed/${breed}/images`).then(
      (response) => {
        this.setState({ images: response.data.message });
      }
    );
  }

  handleClickNavigate() {
    this.props.history.push('/page1');
  }

  render() {
    const { match } = this.props;
    console.log(this.props);
    return (
      <div className="dogs">
        <h1>{match.params.breed.toUpperCase()}</h1>
        <Route path={`${match.url}/page1`} component={Page1} />
        <ul>
          {this.state.images.map((url) => {
            return (
              <li key={url}>
                <img src={url} style={{ width: 200 }} alt="" />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default DogBreed;
