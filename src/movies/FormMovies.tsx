import { Form, Formik, FormikHelpers } from "formik";
import { movieCreationDTO } from "./movies.model";
import * as Yup from 'yup'
import FormGroupText from "../utils/FormGroupText";
import FormGroupCheckbox from "../utils/FormGroupCheckbox";
import FormGroupDate from "../utils/FormGroupDate";
import FormGroupImage from "../utils/FormGroupImage";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import MultiSelect, {multiSelectModel} from "../utils/MultiSelect";
import { genderDTO } from "../genders/genders.model";
import { useState } from "react";

export default function FormMovies(props: formMoviesProps){
    const [genderSelected, setGenderSelected] = useState(maping(props.gendersSelected));
    const [genderNoSelected, setGenderNoSelected] = useState(maping(props.gendersNoSelected));

    function maping(array: {id: number, name:string}[]): multiSelectModel[]{
        return array.map(value => {
            return {key: value.id, value:value.name}
        })
    }

    return(
        <Formik
        initialValues={props.model}
        onSubmit = {(values, actions) =>{
            values.gendersIds = genderSelected.map(value => value.key);
            props.onSubmit(values, actions)
        }}
        validationSchema={Yup.object({
            tittle: Yup.string().required('Este campo es requerido').firstCapitalLetter()
        })}>
            {formikProps =>(
                <Form>
                    <FormGroupText label="Título" field="tittle" />
                    <FormGroupCheckbox label="En cines" field="inCinema" />
                    <FormGroupText label="Trailer" field="trailer" />
                    <FormGroupDate label="Fecha lanzamiento" field ="releaseDate" />
                    <FormGroupImage label="Poster" field="poster"
                    imageUrl={props.model.posterUrl} />

                    <div className="form-group">
                        <label>Géneros: </label>
                        <MultiSelect selected={genderSelected}
                            notSelected={genderNoSelected}
                            onChange={(selected, noSelected) => {
                                setGenderSelected(selected)
                                setGenderNoSelected(noSelected)
                            }} />
                    </div>


                    <Button disabled={formikProps.isSubmitting} type="submit">Enviar</Button>
                    <Link className="btn btn-secondary" to="/">Cancelar</Link>
                </Form>
            )}

        </Formik>
    )
}

export interface formMoviesProps{
    model: movieCreationDTO;
    onSubmit(values:movieCreationDTO, actions: FormikHelpers<movieCreationDTO>): void;
    gendersSelected: genderDTO[];
    gendersNoSelected: genderDTO[];
}