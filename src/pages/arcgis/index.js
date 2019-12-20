import React, { Component } from 'react'
import esriLoader from 'esri-loader'

export default class ArcGISMap extends Component {
  constructor(props) {
    super(props)
    this.tileMapUrl = "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer"
  }
  componentDidMount() {
    this.initMap()
  }
  initMap() {
    const mapURL = {
      url: "https://js.arcgis.com/4.7/dojo/dojo.js"
    }
    esriLoader.loadModules([
      "esri/Map",
      "esri/Basemap",
      "esri/layers/TileLayer",
      "esri/views/MapView",
      "dojo/domReady!"

  

    ], mapURL).then(([Map, Basemap, TileLayer, MapView]) => {
      let layer = new TileLayer({
        url: this.tileMapUrl
      })
      let baseMap = new Basemap({
        baseLayers: [layer],
        title: "Custom Basemap",
        id: "myBasemap"
      });
      // Create a Map instance
      let map = new Map({
        basemap: baseMap
      });
      // Create a MapView instance (for 2D viewing) and reference the map instance
      let view = new MapView({
        center: [120.2, 32.1],
        map: map,
        container: "mapDiv",
        zoom: 5
      });
    })
  }
  render() {
    let style = {
      width: '900px',
      height: '600px'
    }
    return (
      <div>
        <div id="mapDiv" style={style}></div>
      </div>
    )
  }
}