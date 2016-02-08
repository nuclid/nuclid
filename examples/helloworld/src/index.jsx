import React, { Component } from 'react';
import { AppBar } from 'material-ui';
import { Nuclid } from '../../..';

const n = new Nuclid();

class App extends Component {
  render() {
    return (
      <div>
        <AppBar />
        <h1>Hello there!</h1>
        <div className="posts">
          {this.props.posts.map(({ id, title, text }) => (
            <article className="post" key={id}>
              <h2>{title}</h2>
              <div>{text}</div>
            </article>
          ))}
        </div>
      </div>
    );
  }
}


n.register(App);
n.listen(1337);
