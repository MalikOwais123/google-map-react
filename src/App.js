import Map from "./Component/Map/Map";
import "./App.css";

function App() {
    const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDCNkvhRgNcVWzX26GgylPyIJFB8bGxRj0`;
    return (
        <div className="App">
            GOOGLE MAPS ADDED
            GOOGLE MAPS ADDED
            GOOGLE MAPS ADDED
            GOOGLE MAPS ADDED
            {/* SOME PROPS MANDATORY TO RENDER MAP */}
            <Map
                googleMapURL={mapURL}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    );
}

export default App;