import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { Image } from 'react-native';
import renderer from 'react-test-renderer';

import BattalionButton from '../BattalionButton';

jest.useFakeTimers();
configure({ adapter: new Adapter() });

describe('BattalionButton', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<BattalionButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with an image', () => {
    const wrapper = shallow(
      <BattalionButton>
        <Image src={require('../../assets/images/battalions/1-33.png')} />
      </BattalionButton>,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('handles onPress', () => {
    const onPress = jest.fn();

    const wrapper = shallow(
      <BattalionButton onPress={onPress}>
        <Image src={require('../../assets/images/battalions/1-33.png')} />
      </BattalionButton>,
    );

    wrapper
      .find('TouchableOpacity')
      .first()
      .props()
      .onPress();

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
