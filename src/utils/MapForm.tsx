import { useFormikContext } from "formik";
import { coordinatesDTO } from "./coordinates.modal";
import Map from "./Map";

export default function MapForm(props:mapFormProps){

    const {values} = useFormikContext<any>();
    function updateFields(coordinates: coordinatesDTO){
        values[props.fieldLat] = coordinates.lat;
        values[props.fieldLng] = coordinates.lng;
    }
    return(
        <Map 
            coordinates={props.coordinates}
            handleClickMap={updateFields}
        />
    )
}

interface mapFormProps{
    coordinates: coordinatesDTO[];
    fieldLat: string;
    fieldLng: string;
}

MapForm.defaultProps = {
    coordinates: []
}