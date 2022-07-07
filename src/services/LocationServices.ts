import GetLocation from 'react-native-get-location';

class LocationServices {
  static async getCurrentPosition() {
    return GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    }).then(({longitude, latitude}) => {
      return {longitude, latitude};
    });
  }
}

export default LocationServices;
