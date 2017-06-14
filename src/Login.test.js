import React from 'react';
import ReactDOM from 'react-dom';
import LoginFrom from './LoginFrom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoginFrom />, div);
});
