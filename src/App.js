import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: '',
      cart: []
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get('/api/cart')
      .then( res => {
        this.setState({
          cart: res.data
        })
      })
  }

  handleSubmit() {
    axios.post('/api/cart')
    .then( res => {
      this.setState({
        cart: res.data
      })
    })
  }

  handleChange(e) {
    this.setState({
      inputText: e.target.value
     })
  }

  render() {
    let cart = this.state.cart.map( item => {
      return <p>item.name</p>
    })
    return (
      <div className="App">
        <h1>Simple Shopper</h1>
        <p>Add anything to your shopping cart</p>
        <form onSubmit={this.handleSubmit}>
          <input placeholder='type here...' onChange={this.handleChange}/> <br />
          <button type='submit' className=''>Add</button>
        </form>

        <h4>Cart:</h4>
      </div>
    );
  }
}

export default App;
