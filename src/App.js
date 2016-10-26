import axios  from 'axios'
import React, { Component } from 'react'
import SearchBar from './components/SearchBar'
import './App.css'
import {List, ListItem} from 'material-ui/List';
import {Card, CardHeader,CardText} from 'material-ui/Card';
import {Marker} from 'react-google-maps';
import SimpleMap from './components/SimpleMap';

class App extends Component {

  constructor() {
    super();
    this.state = {
      products: [],
      coords: {
        latitude: 1,
        longitude: 1
      }
    };
    navigator.geolocation.getCurrentPosition((e) => this.setState({coords: e.coords}));
    this.searchByQuery = this.searchByQuery.bind(this); //bind searchByQuery to this, otherwise it is undefined
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


  render() {

    return (
      <div className="App">
        <SearchBar onSearch={this.searchByQuery}/>
        <SimpleMap lat={this.state.coords.latitude} long={this.state.coords.longitude} />
        <Card>
          <CardHeader title='Results' />
          <CardText>
            <List>
              {this.state.products.map(product => <ListItem key={product.id} primaryText={product.name} />)}
            </List>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default App;
