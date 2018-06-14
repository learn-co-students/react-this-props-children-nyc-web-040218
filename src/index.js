import React, { Component } from 'react';

export default class Panel extends Component {
  render() {
    return (
      <div className="panel">
        <div className="panel-holder">
          {this.props.title}
        </div>
        <div className="panel-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default class MovieBrowser extends Component {
  render() {
    const currentPlayingTitle = 'Mad Max';
    const childrenWithExtraProp = React.Children.map(this.props.children, child =>{
      return (
        <div className="some-component-special-class">
          {child}
        </div>
      );
    });

    return (
      <div className="movie-browser">
        {childrenWithExtraProp}
      </div>
    );
  }
}
