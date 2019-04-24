import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../counter.js';

describe('<Counter/>', () => {
  it('is alive at application start', () => {
    const app = shallow(<Counter />);
    expect(app.find('span').exists()).toBeTruthy();
  });

  it('increments count state on + click', () => {
    const app = mount(<Counter />);
    const up = app.find('.up');
    up.simulate('click');
    expect(app.state('count')).toBe(1);
    expect(app.find('span').text()).toContain('1');

    up.simulate('click');
    expect(app.state('count')).toBe(2);
    expect(app.find('span').text()).toContain('2');
  });
  it('decrements count state on - click', () => {
    const app = mount(<Counter />);
    const down = app.find('.down');
    down.simulate('click');
    expect(app.state('count')).toBe(-1);
    expect(app.find('span').text()).toContain('-1');

    down.simulate('click');
    expect(app.state('count')).toBe(-2);
    expect(app.find('span').text()).toContain('-2');
  });
  it('renders correctly', () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
