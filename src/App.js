import React, { Component } from 'react';
import './App.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TrendingInfo from './components/TrendingInfo'
import Cointainer from './components/Container'
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <TrendingInfo />
        <Cointainer />
        <Footer />
      </div>
    );
  }
}

export default App;
