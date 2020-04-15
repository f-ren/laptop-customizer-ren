import React from 'react';
import Options from './Options';
import slugify from 'slugify';

export default class Features extends React.Component {
  render() {
    const options = this.props.feature[this.props.name].map((item) => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <div>
          <Options
            key={itemHash}
            itemHash={itemHash}
            item={item}
            name={this.props.name}
            selected={this.props.selected}
            update={this.props.update}
            value={this.props.value}
          />
        </div>
      );
    });
    return (
      <fieldset className="feature" key={this.props.featureHash}>
        <legend className="feature__name">
          <h3>{this.props.name}</h3>
        </legend>
        {options}
      </fieldset>
    );
  }
}
