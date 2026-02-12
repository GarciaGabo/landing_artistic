import { useRef, useMemo } from 'react';
import { Marker, Popup } from 'react-leaflet';

export default function DraggableMarker({ position, setPosition, setUserLocationFound }) {
    const markerRef = useRef(null);

    const eventHandlers = useMemo(
        () => ({
            dragend() {
                const marker = markerRef.current;
                if (marker != null) {
                    setPosition(marker.getLatLng());
                    setUserLocationFound(true);
                }
            },
        }),
        [setPosition, setUserLocationFound]
    );

    return (
        <Marker 
            draggable={true}
            eventHandlers={eventHandlers}
            position={position}
            ref={markerRef}
        >
            <Popup>
                ¡Ubicación del evento!
            </Popup>
        </Marker>
    );
}