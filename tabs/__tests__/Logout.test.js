import React from 'react';
import renderer from 'react-test-renderer';

import Logout from '../Logout';

jest.useFakeTimers()
jest.mock('../Logout', () => (props) => <mock-Logout {...props} />);

it('renders correctly', () => {
  const tree = renderer.create(<Logout />).toJSON();
  expect(tree).toMatchSnapshot();
});

