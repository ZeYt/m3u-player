import React, {Component} from 'react';
import ReactPlayer from 'react-player';

export default class Home extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.context.router.push({pathname: `/${this._input.value}`});
  }

  render() {
    return (
      <section className="container home">
        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />
        <form
          className="form-inline"
          role="form"
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <div className="input-group">
              <input
                type="text"
                placeholder="Enter a M3U file url..."
                className="form-control"
                ref={ref => (this._input = ref)}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            View!
          </button>
        </form>
      </section>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
