// make sure you add the .js at the end of javascript files to avoid "blocked because of disallowed MIME type" message.
import { getJSON } from './utilities.js';
// Quake Model
export default class Quake {
  constructor() {
    this.baseUrl =
      'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson';
    // store the last batch of retrieved quakes in the model.  I don't always do this...in this case the api doesn't have an endpoint to request one quake.
    this._quakes = [];
  }
  async getEarthQuakesByRadius(position, radius = 100) {
    this._quakes = await getJSON(
      this.baseUrl +
        `&starttime=2022-02-15&endtime=2022-03-12&latitude=${
          position.lat
        }&longitude=${position.lon}&maxradiuskm=${radius}`
    );
    return this._quakes;
  }
  getQuakeById(id) {
    return this._quakes.features.filter(item => item.id === id)[0];
  }
}