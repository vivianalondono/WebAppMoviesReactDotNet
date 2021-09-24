import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import * as Yup from "yup";
import FormGroupText from "../utils/FormGroupText";

export default function CreateGender(){
    //const history = useHistory();
    return(
        <>
            <h3>Crear género</h3>

            <Formik initialValues={{
                name: "Accion"
            }}
                onSubmit={values => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required('Este campo es requerido').firstCapitalLetter()
                })}
            >
                <Form>
                    <FormGroupText field="name" label="Nombre" placeholder="Nombre Genero" />
                    <Button type="submit">Salvar</Button>
                    <Link className="btn btn-secondary" to="/genders">Cancelar</Link>
                </Form>
                
            </Formik>
            
        </>
        
    )
}