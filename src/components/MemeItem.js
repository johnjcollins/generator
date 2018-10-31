import React, { Component } from 'react';

class MemeItem extends Component {
  render() {
    const { meme } = this.props;
    return (
      <div className="meme-item">
        <img src={meme.url} alt={meme.name} className="meme-img" />
        <p className="meme-txt">{meme.name}</p>
      </div>
    );
  }
}

export default MemeItem;
