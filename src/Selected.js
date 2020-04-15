import React from 'react';

export default class extends React.Component {
  render() {
    return (
      <div className="summary__option" key={this.props.featureHash}>
        <div className="summary__option__label">{this.props.feature} </div>
        <div className="summary__option__value">{this.props.item.name}</div>
        <div className="summary__option__cost">
          {this.props.value.format(this.props.item.cost)}
        </div>
      </div>
    );
  }
}
