
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import { MapContainer, Marker, TileLayer, useMapEvent } from 'react-leaflet';
import { coordinatesDTO } from './coordinates.modal';


let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [16,37]
})

L.Marker.prototype.options.icon = DefaultIcon;

export default function Map(props:mapProps){
    const [coordinates, setCoordinates] = useState<coordinatesDTO[]>(props.coordinates)
    return(
        <MapContainer
            center={[6.195290, -75.558676]} zoom={14}
            style={{height:props.height}}
        >
            <TileLayer
                attribution="React Peliculas"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
            />
            <ClickMap setPoint={coordinates => {
                setCoordinates([coordinates])
                props.handleClickMap(coordinates)
            }} />
            {coordinates.map(coordinate => <MarkerComponent key={coordinate.lat + coordinate.lng}
            {...coordinate}
            />)}
        </MapContainer>
    )
}

function ClickMap(props:clickMapProps){
    useMapEvent('click', e =>{
        props.setPoint({lat:e.latlng.lat, lng:e.latlng.lng})
    })
    return null;
}

interface clickMapProps{
    setPoint(coordinates: coordinatesDTO): void;
}

function MarkerComponent(props:coordinatesDTO){
    return(
        <Marker position={[props.lat, props.lng]}/>
    )
}

interface mapProps{
    height: string;
    coordinates: coordinatesDTO[];
    handleClickMap(coordinates: coordinatesDTO): void;
}

Map.defaultProps = {
    height: '500px'
}