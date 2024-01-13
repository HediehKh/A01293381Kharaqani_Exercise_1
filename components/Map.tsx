import {MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const icon = L.icon({ iconUrl: "/images/marker-icon.png", iconSize: [45,45]})

const polyLine:[number, number][] = [
    [49.28521724846519, -123.11427241577576], // Waterfront Station
    [49.282488422457284, -123.11860170021221], //Vancouver City Centre
    [49.27471581863812, -123.12180069275846], //Yaletown-Roundhouse Station
    [49.26671492246441, -123.11557709949253],//Olympic Village Station
    [49.262970001835, -123.11449771577675],//Broadway-City Hall Station
    [49.249304610220904, -123.1158913941003],//King Edward Station
    [49.23333041461469, -123.11659918694166],//Oakridge-41st Avenue Station
    [49.22650148286079, -123.1160460099596],//Langara-49th Avenue Station
    [49.20978218006086, -123.11690064461528],//Marine Drive Station
    [49.195672992696466, -123.12600295810695],//Bridgeport Station

    [49.196821489440765, -123.14633473112455],//Templeton Station
    [49.19325633998968, -123.15789001485905],//Sea Island Center
    [49.19434879645001, -123.1783047887973],//YVR Airport
]

const multiPolyLine:[number, number][][] =[
    [
        [49.195672992696466, -123.12600295810695],//Bridgeport Station
        [49.18412977626924, -123.13636310043472],//Aberdeen Station
        [49.17498303540079, -123.13634582927143],//Lansdowne Station
        [49.16822958543853, -123.13617068509032],//Richmond-Brighouse Station
    ],
]

const blueOptions = { color: "black" }
const center:[number, number] = [ 49.246292, -123.116226]
const Map = () => {
    return(
        <>
        <MapContainer
            style = {{height: '100vh'}}
            center={[ 49.246292, -123.116226]} zoom={14} scrollWheelZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href="https://github.com/HediehKh/A01293381Kharaqani_Exercise_1">By Hedieh Kharaqani</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            <Marker position={[49.28615486403128, -123.11154792871443]} icon={icon}>
                <Popup>
                    Waterfront Station
                </Popup>
            </Marker>
            <Marker position={[49.282658137149426, -123.11860197385731]} icon={icon}>
                <Popup>
                    Vancouver City Centre Station
                </Popup>
            </Marker>
            <Marker position={[49.27464307040649, -123.12191601803659]} icon={icon}>
                <Popup>
                    Yaletown-Roundhouse Station
                </Popup>
            </Marker>
            <Marker position={[49.26667299031823, -123.11555562967925]} icon={icon}>
                <Popup>
                    Olympic Village Station
                </Popup>
            </Marker>
            <Marker position={[49.262871917333385, -123.11425096549864]} icon={icon}>
                <Popup>
                    Broadway City Hall Station
                </Popup>
            </Marker>
            <Marker position={[49.2493547543243, -123.11577117200862]} icon={icon}>
                <Popup>
                    King Edward Station
                </Popup>
            </Marker>
            <Marker position={[49.233323408894556, -123.11677084872503]} icon={icon}>
                <Popup>   
                    Oakridge - 41st Avenue Station
                </Popup>
            </Marker>
            <Marker position={[49.22640474513121, -123.11595918550255]} icon={icon}>
                <Popup>
                    Langara – 49th Avenue Station
                </Popup>
            </Marker>
            <Marker position={ [49.20981015261487, -123.11690198550343]} icon={icon}>
                <Popup>
                    Marine Drive Station
                </Popup>
            </Marker>
            <Marker position={[49.19566829212829, -123.1258705995363]} icon={icon}>
                <Popup>
                    Bridgeport Station
                </Popup>
            </Marker>

            <Marker position={[49.196835511221515, -123.146259629683]} icon={icon}>
                <Popup>
                    Templeton Station 
                </Popup>
            </Marker>
            <Marker position={[49.193165265513024, -123.15792218929766]} icon={icon}>
                <Popup>
                    Sea Island Station 
                </Popup>
            </Marker>
            <Marker position={[49.194376778159494, -123.1781975133994]} icon={icon}>
                <Popup>
                    YVR-Airport Station
                </Popup>
            </Marker>
            <Marker position={[49.18415081433682, -123.1364489315342]} icon={icon}>
                <Popup>
                    Aberdeen Station
                </Popup>
            </Marker>
            <Marker position={[49.17494095145259, -123.13634582968405]} icon={icon}>
                <Popup>
                    Lansdowne Station
                </Popup>
            </Marker>
            <Marker position={[49.16821555554378, -123.13627797386332]} icon={icon}>
                <Popup>
                    Richmond-Brighouse Station
                </Popup>
            </Marker>

            <Polyline pathOptions={blueOptions} positions={polyLine}/>
            <Polyline pathOptions={blueOptions} positions={multiPolyLine}/>
        </MapContainer>
        </>
    )
        
}
export default Map;