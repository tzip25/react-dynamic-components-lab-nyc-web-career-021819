import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {

    const startOpacity = this.props.opacity
    const newOpacity = this.props.opacity - 0.1;

      if (this.props.opacity >= 0.2) {
          return (
              <div className="color-box" style={{opacity: startOpacity}}>
                <ColorBox opacity={newOpacity} />
              </div>
          );
      } else {
          return null;
      }

  }

}
