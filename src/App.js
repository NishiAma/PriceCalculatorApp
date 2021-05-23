import './App.css';
import React, {Component} from 'react';
import Products from './components/products';

class App extends Component {
    state = {
        products: []
    };

      componentDidMount() {
        fetch('http://localhost:9000/list')
        .then(res => res.json())
        .then((data) => {
          this.setState({ products: data })
        })
      }

      render() {
        return (
          <Products products={this.state.products}/>
        )
      }
    }
    
export default App;
