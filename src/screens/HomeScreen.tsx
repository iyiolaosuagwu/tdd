import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import moment from 'moment';
import {colors} from './constants';
import WeatherCoordinates from '../components/WeatherCoordinates';
import WeatherCurrent from '../components/WeatherCurrent';

const HomeScreen = () => {
  const now = moment(new Date());
  console.log(now.format('MMM DD, YYYY'));
  console.log(now.format('dddd'));
  return (
    <View testID="home-screen" style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.date}>{now.format('MMM DD, YYYY')}</Text>
        <Text style={styles.day}>{now.format('dddd')}</Text>
      </View>
      <WeatherCurrent />
      <Text testID="home-screen-divider" style={styles.divider}>
        or
      </Text>
      <WeatherCoordinates />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.DARKER_GRAY,
    paddingHorizontal: 40,
    justifyContent: 'space-evenly',
    alignContent: 'space-between',
  },
  title: {
    justifyContent: 'flex-end',
  },
  date: {
    color: colors.GRAY,
  },
  day: {
    color: colors.GRAY,
    fontWeight: '600',
    fontSize: 20,
  },
  divider: {
    color: colors.WHITE,
    textAlign: 'center',
  },
});

export default HomeScreen;
