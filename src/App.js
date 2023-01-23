import logo from "./logo.svg";
import "mapbox-gl/dist/mapbox-gl.css";
import "./App.css";
import ReactMapGL, { Source, Layer } from "react-map-gl";
import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoia2F1c2hpa2FzcCIsImEiOiJjbGQ5OHk0cngwNmx1M25vZjJlMTBlNzBvIn0.snEDsNE6ytnMGFwt8WV7eQ";

const token =
  "pk.eyJ1Ijoia2F1c2hpa2FzcCIsImEiOiJjbGQ5OHk0cngwNmx1M25vZjJlMTBlNzBvIn0.snEDsNE6ytnMGFwt8WV7eQ";

function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  const dataOne = {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: [
        [-122.41510269913951, 37.77909036739809],
        [39.5423, -77.0564],
      ],
    },
  };

  useEffect(() => {
    if (map.current) return; // initialize map only once
    const mapInstance = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });

    map.current = mapInstance;
    // setTimeout(() => {
    mapInstance.on("load", () => {
      console.log("loaded");

      map.current.addSource("route", {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: [
              [-122.483696, 37.833818],
              [-122.483482, 37.833174],
              [-122.483396, 37.8327],
              [-122.483568, 37.832056],
              [-122.48404, 37.831141],
              [-122.48404, 37.830497],
              [-122.483482, 37.82992],
              [-122.483568, 37.829548],
              [-122.48507, 37.829446],
              [-122.4861, 37.828802],
              [-122.486958, 37.82931],
              [-122.487001, 37.830802],
              [-122.487516, 37.831683],
              [-122.488031, 37.832158],
              [-122.488889, 37.832971],
              [-122.489876, 37.832632],
              [-122.490434, 37.832937],
              [-122.49125, 37.832429],
              [-122.491636, 37.832564],
              [-122.492237, 37.833378],
              [-122.493782, 37.833683],
            ],
          },
        },
      });
      map.current.addLayer({
        id: "route",
        type: "line",
        source: "route",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#888",
          "line-width": 8,
        },
      });
    });
    // }, 5000);
  });

  return (
    <div className="App">
      <div ref={mapContainer} className="map-container" />
      {/* <ReactMapGL
        mapboxApiAccessToken={token}
        // onViewportChange={(newViewport) => {
        //   this.setState({ viewport: newViewport });
        // }}
      >
        <Source id="polylineLayer" type="geojson" data={dataOne}>
          <Layer
            id="lineLayer"
            type="line"
            source="my-data"
            layout={{
              "line-join": "round",
              "line-cap": "round",
            }}
            paint={{
              "line-color": "rgba(3, 170, 238, 0.5)",
              "line-width": 5,
            }}
          />
        </Source>
      </ReactMapGL> */}
    </div>
  );
}

export default App;
