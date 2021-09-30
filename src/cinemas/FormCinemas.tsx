import { Form, Formik, FormikHelpers } from "formik";
import { cinemaCreationDTO } from "./cinemas.modal";
import * as Yup from 'yup';
import FormGroupText from "../utils/FormGroupText";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import MapForm from "../utils/MapForm";
import { coordinatesDTO } from "../utils/coordinates.modal";

export default function FormCinemas(props:formCinemasProps){

    function transformCoordinates(): coordinatesDTO[] | undefined {
        if(props.model.latitude && props.model.length){
            const answer: coordinatesDTO = {lat: props.model.latitude, lng: props.model.length}
            return [answer];
        }
        return undefined;
    }
    return(
        <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                name: Yup.string().required('Este campo es requerido').firstCapitalLetter()
            })}
        >
            {(formikProps) => (
                <Form>
                    <FormGroupText label="Nombre" field="name" />
                    <div style={{marginBottom: '1rem'}}> 
                        <MapForm fieldLat="latitude" fieldLng="length"
                        coordinates={transformCoordinates()}/>
                    </div>
                    <Button disabled={formikProps.isSubmitting} type="submit">Salvar</Button>
                    <Link className="btn btn-secondary" to="/cinemas">Cancelar</Link>
                </Form>
            )}
        </Formik>
    )
}

interface formCinemasProps{
    model: cinemaCreationDTO;
    onSubmit(values: cinemaCreationDTO, actions: FormikHelpers<cinemaCreationDTO>): void;
}