import axios  from 'axios'
import React, { Component } from 'react'
import SearchBar from './components/SearchBar'
import ResultsCard from './components/ResultsCard'
import DetailsCard from './components/DetailsCard'
import './App.css'
import {Marker} from 'react-google-maps';
import SimpleMap from './components/SimpleMap';
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {

  constructor() {
    super();
    this.state = {
      products: [],
      category: [],
      coords: {
        latitude: 1,
        longitude: 1
      }
    };
    navigator.geolocation.getCurrentPosition((e) => this.setState({coords: e.coords}));

    //Function binds
    this.searchByQuery = this.searchByQuery.bind(this);
    this.showCategory = this.showCategory.bind(this);
  }

  //Gets value of SearchBar and queries LCBO API for that value, sets state
  searchByQuery(query) {
    axios.get(`http://lcboapi.com/products?q=${query}`, {
      headers: {
        'Authorization': 'Token MDo1ZWYzMThmMC03ZTg5LTExZTYtYmZhYy1hYjg2ZGM5NmRiYjE6RlZKc3I3STB5UkdUanJ0V1M3MUNQUkk0dURoRE1FOUJ3Mnhj'
      }
    })
      .then((response) => {
        this.setState({
        products: response.data.result,
      })

    });
  }

  showCategory(category) {
    axios.get(`http://lcboapi.com/v2/categories/${category}`, {
      headers: {
        'Accept': 'application/vnd.api+json',
        'Authorization': 'Token MDo1ZWYzMThmMC03ZTg5LTExZTYtYmZhYy1hYjg2ZGM5NmRiYjE6RlZKc3I3STB5UkdUanJ0V1M3MUNQUkk0dURoRE1FOUJ3Mnhj'
      }
    })
      .then((response) => {
        this.setState({
        products: response.data.result,
      })

    });
    
  }

  render() {

    return (
      <div className="App">

        <SearchBar onSearch={this.searchByQuery}/>

        //Displays Google Map centered on user's location
        <div style={{display: 'flex'}}> //Map and details card in flexbox
          <div id='map-wrapper'>
            <SimpleMap lat={this.state.coords.latitude} long={this.state.coords.longitude} />
          </div>
        //Drink details card
          <div id='details-card'>
            <DetailsCard />
          </div>
        </div>
        //Drink category selection buttons
        <RaisedButton onClick={this.showCategory("beer")} label="Beer" />
        <RaisedButton onClick={this.showCategory("wine")} label="Wine" />
        <RaisedButton onClick={this.showCategory("spirits")} label="Spirits" />

        //Card displaying result of search/category selection
        <ResultsCard products={this.state.products} />

      </div>
    );
  }
}

export default App;
