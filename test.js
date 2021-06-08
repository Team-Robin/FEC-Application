/**
 * @jest-environment jsdom
 */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */

// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './client/src/components/App';

describe('Jest test', () => {
  function sum(a, b) {
    return a + b;
  }
  test('two plus two is four', () => {
    expect(sum(2, 2)).toBe(4);
  });
});

describe('Basic React actions', () => {
  describe('React Check', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  });
});
