import LocationServices from '../LocationServices';

describe('LocationServices', () => {
  test('should return longitude and latitude from current location', async () => {
    const position = await LocationServices.getCurrentPosition();
    expect(position).toEqual({
      latitude: 0,
      longitude: 0,
    });
  });
});
