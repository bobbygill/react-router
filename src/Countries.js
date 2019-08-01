import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class Countries extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: [],
      isLoading: false,
      searchTerm: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const url = 'https://restcountries.eu/rest/v2/all';
    this.setState({ isLoading: true });
    axios.get(url).then((response) => {
      this.setState({
        countries: response.data,
        isLoading: false
      });
    })
      .catch((error) => {
        this.setState({ isLoading: false });
      });
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const url = `https://restcountries.eu/rest/v2/name/${this.state.searchTerm}`;
    this.setState({ isLoading: true, countries: [] });
    axios.get(url).then((response) => {
      this.setState({
        countries: response.data,
        isLoading: false
      });
    }
  )
    .catch((error) => {
      this.setState({ isLoading: false });
      console.log("error");
      console.log(this.state.countries);
    });
  }

  render() {
    return (
      <div className="dogs">
      <p>Please enter the name of a country to find its capital city.</p>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>
        <ul>
          {this.state.isLoading && 'Loading...'}
          {this.state.countries.map((country) => {
            return (
              <li key={country.alpha3Code}>
                <h1>
                  {country.name}
                  <br />
                  <small>Capital: {country.capital}</small>
                  <br />
                  <small>Continent: {country.region}</small>
                </h1>
              </li>
            );
          })}
          {this.state.countries.length===0 && !this.state.isLoading && "No results, please try again"}
        </ul>
      </div>
    );
  }
}

export default Countries;
