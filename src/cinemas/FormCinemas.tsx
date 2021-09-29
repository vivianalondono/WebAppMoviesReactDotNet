import { Form, Formik, FormikHelpers } from "formik";
import { cinemaCreationDTO } from "./cinemas.modal";
import * as Yup from 'yup';
import FormGroupText from "../utils/FormGroupText";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import Map from "../utils/Map";

export default function FormCinemas(props:formCinemasProps){
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
                        <Map />
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