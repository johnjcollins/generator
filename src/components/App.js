import React, { Component } from 'react';
import { connect } from 'react-redux';
import MemeItem from './MemeItem';
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class App extends Component {
  state = {
    memeLimit: 10,
    topText: '',
    bottomText: ''
  };

  handleChangeTop = e => {
    e.preventDefault();
    this.setState({ topText: e.target.value });
  };

  handleChangeBottom = e => {
    e.preventDefault();
    this.setState({ bottomText: e.target.value });
  };

  render() {
    const { memes } = this.props;
    const { memeLimit, topText, bottomText } = this.state;
    return (
      <div>
        <h2>
          <u>Welcome to the Meme Generator!</u>
        </h2>
        <h4>
          <i>Write Some Text</i>
        </h4>
        <Form inline>
          <FormGroup>
            <ControlLabel>Top</ControlLabel>
            <FormControl
              type="text"
              onChange={this.handleChangeTop}
              value={topText}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Bottom</ControlLabel>
            <FormControl
              type="text"
              onChange={this.handleChangeBottom}
              value={bottomText}
            />
          </FormGroup>
        </Form>
        {memes.slice(0, memeLimit).map(meme => (
          <MemeItem
            key={meme.id}
            meme={meme}
            topText={topText}
            bottomText={bottomText}
          />
        ))}
        <div
          className="meme-button"
          onClick={() => {
            console.log('Click');
            this.setState({
              memeLimit: memeLimit + 10
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
