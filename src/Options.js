import React from 'react';
import slugify from 'slugify';

export default class Options extends React.Component {
  render() {
    console.log(this.props.item.cost);
    return (
      <div key={this.props.itemHash} className="feature__item">
        <input
          type="radio"
          id={this.props.itemHash}
          className="feature__option"
          name={slugify(this.props.name)}
          checked={
            this.props.item.name === this.props.selected[this.props.name].name
          }
          onChange={(e) => this.props.update(this.props.name, this.props.item)}
        />
        <label htmlFor={this.props.itemHash} className="feature__label">
          {this.props.item.name} (
          {this.props.value.format(this.props.item.cost)})
        </label>
      </div>
    );
  }
}
