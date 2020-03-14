import React, {Component, PropTypes} from 'react';
import ReactPlayer from 'react-player';

export default class Player extends Component {
    constructor() {
        super()
        this.state = {url: 'https://www.youtube.com/watch?v=ZZvZfUYUaaA'}
      }
  render() {
    this.state = {url: this.props.params.url}
    return (
      <section className="container home">
        <ReactPlayer url={this.state.url} playing />
      </section>
    );
  }
}

Player.contextTypes = {
    router: React.PropTypes.object.isRequired,
}

Player.propTypes = {
    params: PropTypes.shape({
      url: PropTypes.string,
    })
}

