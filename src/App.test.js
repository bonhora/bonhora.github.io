import { render, screen } from '@testing-library/react';
import App from './App';
import Enzyme, { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

it("renders correctly", () => {
  const wrapper = shallow(<App />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
