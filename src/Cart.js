import React from 'react';
import Total from './Total';
import Selected from './Selected';

export default class extends React.Component {
  render() {
    const summary = Object.keys(this.props.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.props.selected[feature];

      return (
        <Selected
          key={featureHash}
          feature={feature}
          item={selectedOption}
          value={this.props.value}
        />
      );
    });

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <Total selected={this.props.selected} value={this.props.value} />
      </section>
    );
  }
}
