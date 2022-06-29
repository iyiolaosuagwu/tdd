import React from 'react';
import {render} from '@testing-library/react-native';
import HomeScreen from '../screens/HomeScreen';
import WeatherCurrent from '../components/WeatherCurrent';
import {View} from 'react-native';
import WeatherCoordinates from '../components/WeatherCoordinates';

// shallow rendering (components)
jest.mock('../components/WeatherCoordinates.tsx', () =>
  jest.fn().mockReturnValue(null),
);
jest.mock('../components/WeatherCurrent.tsx', () =>
  jest.fn().mockReturnValue(null),
);

describe('HomeScreen', () => {
  test('renders correctly', () => {
    const wrapper = render(<HomeScreen />);
    wrapper.getByTestId('home-screen');
  });

  describe('Title Sction', () => {
    beforeEach(() => {
      jest.useFakeTimers('modern');
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    test('Should contain current date', () => {
      const wrapper = render(<HomeScreen />);
      wrapper.getByText('Jun 30, 2022');
    });

    test('Should contain current day', () => {
      const wrapper = render(<HomeScreen />);
      wrapper.getByText('Thursday');
    });

    test('should contain a section to get current weather', () => {
      // lettiing TS know a mock has been defined
      (WeatherCurrent as jest.Mock).mockReturnValue(
        <View testID="mock-weather-current" />,
      );
      const wrapper = render(<HomeScreen />);
      wrapper.getByTestId('mock-weather-current');
    });

    test('should contain a section to get weather coordinates', () => {
      (WeatherCoordinates as jest.Mock).mockReturnValue(
        <View testID="mock-weather-coordinates" />,
      );
      const wrapper = render(<HomeScreen />);
      wrapper.getByTestId('mock-weather-coordinates');
    });

    test('should contain a divider', () => {
      const wrapper = render(<HomeScreen />);
      wrapper.getByTestId('home-screen-divider');
    });
  });
});
