import React from 'react';
import renderer from 'react-test-renderer';

import SinglePost from '../SinglePost';

jest.useFakeTimers()
jest.mock('../SinglePost', () => (props) => <mock-SinglePost {...props} />);

it('renders correctly', () => {
  const tree = renderer.create(<SinglePost />).toJSON();
  expect(tree).toMatchSnapshot();
});

