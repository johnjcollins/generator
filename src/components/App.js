import React, { Component } from 'react';
import { connect } from 'react-redux';
import MemeItem from './MemeItem';

class App extends Component {
  state = {
    memeLimit: 10
  };

  render() {
    const { memes } = this.props;
    const { memeLimit } = this.state;
    return (
      <div>
        <h2>Welcome to the Meme Generator!</h2>
        {memes.slice(0, memeLimit).map(meme => (
          <MemeItem key={meme.id} meme={meme} />
        ))}
        <div
          className="meme-button"
          onClick={() => {
            console.log('Click');
            this.setState({
              memeLimit: this.state.memeLimit + 10
            });
          }}
        >
          Load 10 more memes...
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  null
)(App);
