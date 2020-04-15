import React, { Component } from 'react';
import FeatureMain from './FeatureMain';
import Header from './Header';
import Cart from './Cart';
import './App.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

class App extends Component {
  state = {
    features: {
      Processor: [
        {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700,
        },
        {
          name: 'Professor X AMD Fire Breather with sidewinder technology',
          cost: 1200,
        },
      ],
      'Operating System': [
        {
          name: 'Ubuntu Linux 16.04',
          cost: 200,
        },
        {
          name: 'Bodhi Linux',
          cost: 300,
        },
      ],
      'Video Card': [
        {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98,
        },
        {
          name: 'Mind mild breeze 2000',
          cost: 1345,
        },
      ],
      Display: [
        {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500,
        },
        {
          name: '15.3" HGTV (3840 x 2160) Home makeover edition',
          cost: 1400,
        },
      ],
    },
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700,
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200,
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98,
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500,
      },
    },
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected,
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <FeatureMain
            features={this.state.features}
            selected={this.state.selected}
            update={this.updateFeature}
            value={USCurrencyFormat}
          />
          <Cart selected={this.state.selected} value={USCurrencyFormat} />
        </main>
      </div>
    );
  }
}

export default App;
