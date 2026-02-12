import { useEffect } from 'react';
import { useMap, useMapEvents } from 'react-leaflet';

export default function LocationFinder({ setPosition, setUserLocationFound, isLocating, setIsLocating }) {
    const map = useMap();

    useMapEvents({
        locationfound(e) {
            setPosition(e.latlng);
            map.flyTo(e.latlng, 15);
            setUserLocationFound(true);
            setIsLocating(false);
        },
        locationerror() {
            alert("No pudimos detectar tu ubicación automáticamente. Arrastra el pin manualmente.");
            setIsLocating(false);
        },
    });

    useEffect(() => {
        if (isLocating) {
            map.locate({ 
                setView: false, 
                enableHighAccuracy: true,
                timeout: 10000 
            }); 
        }
    }, [isLocating, map]);

    return null;
}