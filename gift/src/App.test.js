import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';
import { isMainThread } from 'worker_threads';

const app = shallow(<App />);

it('renders correctly', ()=>{
  expect(app).toMatchSnapshot();
});

it('initializes the `state` with an empty list of gifts', ()=>{
  expect(app.state().gifts).toEqual([]);
});

it('adds a new gift to `state` when clicking the `add gift` button', ()=>{
  app.find('.btn-add').simulate('click');
  expect(app.state().gifts).toEqual([{id: 1}]);
});