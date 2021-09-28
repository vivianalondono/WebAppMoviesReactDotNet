import FormCinemas from "./FormCinemas";

export default function CreateCinema(){
    return(
        <>
            <h3>Crear cine</h3>
            <FormCinemas 
                model={{name:''}}
                onSubmit={values => console.log(values)}/>
        </>
    )
}