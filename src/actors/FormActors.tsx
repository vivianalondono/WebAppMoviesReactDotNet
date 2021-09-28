import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import FormGroupText from "../utils/FormGroupText";
import { actorCreationDTO } from "./actors.model";
import * as Yup from 'yup';
import FormGroupDate from "../utils/FormGroupDate";
import FormGroupImage from "../utils/FormGroupImage";
import FormGroupMarkDown from "../utils/FormGroupMarkDown";

export default function FormActors(props:formActorsProps){
    return(
        <Formik
        initialValues = {props.model}
        onSubmit = {props.onSubmit}
        validationSchema = {Yup.object({
            name: Yup.string().required('Este campo es requerido').firstCapitalLetter(),
            birthDate: Yup.date().nullable().required('Este campo es requerido')
        })}>
            {(formikProps) => (
                <Form>
                    <FormGroupText field="name" label="Nombre" />
                    <FormGroupDate label="Fecha Nacimiento" field="birthDate" />
                    <FormGroupImage field="photo" label="Foto" imageUrl={props.model.photoURL}/>
                    <FormGroupMarkDown field="biography" label="Biografía"/>
                    <Button disabled={formikProps.isSubmitting}
                        type="submit"
                    >Salvar</Button>
                    <Link className="btn btn-secondary" to="/actors">Cancelar</Link>
                </Form>
                
            )}
            
        </Formik>
    )
}

interface formActorsProps{
    model: actorCreationDTO;
    onSubmit(values: actorCreationDTO, actions: FormikHelpers<actorCreationDTO>):void;
}