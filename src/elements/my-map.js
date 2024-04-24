import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'
import { inject, IEventAggregator } from 'aurelia'

@inject(IEventAggregator)

export class MyMap {
  
  constructor(ea) {
    this.ea = ea
  }

  attached() {
    mapboxgl.accessToken = '123'

    const center = [-6.21272859747338, 53.27652125552811]

    this.map = new mapboxgl.Map({
      container: 'mapbox-wrapper', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: center, // starting position [lng, lat]
      zoom: 13, // starting zoom,
      attributionControl: false
    })
  }
}