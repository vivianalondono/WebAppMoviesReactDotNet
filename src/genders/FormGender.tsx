import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import FormGroupText from "../utils/FormGroupText";
import * as Yup from "yup";
import { genderCreationDTO } from "./genders.model";

export default function FormGender(props: formGenderProps){
    return(
        <Formik initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                name: Yup.string().required('Este campo es requerido').firstCapitalLetter()
            })}
        >
            {(formikProps) => (
                <Form>
                    <FormGroupText field="name" label="Nombre" placeholder="Nombre Genero" />
                    <Button disabled={formikProps.isSubmitting} 
                        type="submit">Salvar</Button>
                    <Link className="btn btn-secondary" to="/genders">Cancelar</Link>
                </Form>
            )}
        </Formik>
    )
}

interface formGenderProps{
    model: genderCreationDTO;
    onSubmit(values:genderCreationDTO, action: FormikHelpers<genderCreationDTO>): void
}