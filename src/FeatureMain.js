import React from 'react';
import Features from './Features';

export default class FeatuesMain extends React.Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      return (
        <Features
          key={featureHash}
          name={feature}
          feature={this.props.features}
          selected={this.props.selected}
          update={this.props.update}
          value={this.props.value}
        />
      );
    });
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    );
  }
}
