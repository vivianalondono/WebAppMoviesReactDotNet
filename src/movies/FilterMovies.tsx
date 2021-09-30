import { Field, Form, Formik } from "formik";
import { genderDTO } from "../genders/genders.model";
import Button from "../utils/Button";

export default function FilterMovies(){
    const initialValue: filterMovieForm = {
        tittle: '',
        genderId: 0,
        nextReleases: false,
        inCinemas: false
    } 

    const genders: genderDTO[] = [{id: 1, name: 'Acción'}, {id:2, name:'Comedia'}]

    return(
        <>
            <h3>Filtrar peliculas</h3>
            <Formik initialValues={initialValue}
                onSubmit={values => console.log(values)}>
                {(formikProps) => (
                    <Form>
                        <div className="d-flex">
                            <div className="form-group mb-2">
                                <label htmlFor="tittle" className="visually-hidden">Título</label>
                                <input type="text" 
                                    className="form-control" id="tittle"
                                    placeholder="Título de la película"
                                    {...formikProps.getFieldProps('tittle')}
                                />
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <select className="form-control"
                                    {...formikProps.getFieldProps('genderId')}
                                >
                                    <option value="0">--Seleccione un género--</option>
                                    {genders.map(gender => <option key={gender.id}
                                    value={gender.id}>{gender.name}</option>)}
                                </select>
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <Field className="form-check-input" id="nextReleases"
                                name="nextReleases" type="checkbox" />
                                <label className="form-check-label"
                                htmlFor="nextReleases">Próximos Estrenos</label>
                            </div>    
                            <div className="form-group mx-sm-3 mb-2">
                                <Field className="form-check-input" id="inCinemas"
                                name="inCinemas" type="checkbox" />
                                <label className="form-check-label"
                                htmlFor="inCinemas">En Cines</label>
                            </div>
                            <Button className="btn btn-primary mb-2 mx-sm-3"
                                onClick={() => formikProps.submitForm()}>Filtrar</Button>
                            <Button className="btn btn-danger mb-2"
                                onClick={() => formikProps.setValues(initialValue)}>Limpiar</Button>
                        </div>
                        
                    </Form>
                )}

            </Formik>
        </>
    )
}

interface filterMovieForm {
    tittle: string;
    genderId: number;
    nextReleases: boolean;
    inCinemas: boolean;
}