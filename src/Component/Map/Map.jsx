import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

//we need a script to load this map so that react will know this is google map

const Map = () => {
    const defaultPosition = { lat: 24.860735, lng: 67.001137 }; //KARACHI LOCATION HERE ___ find other from--> https://www.latlong.net/
    return <GoogleMap defaultZoom={10} defaultCenter={defaultPosition} />;
};

export default withScriptjs(withGoogleMap(Map));
