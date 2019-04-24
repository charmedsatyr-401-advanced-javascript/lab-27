import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../header.js';

describe('<Header/>', () => {
  it('is alive at application start', () => {
    const app = shallow(<Header />);
    expect(app.find('header').exists()).toBeTruthy();
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
