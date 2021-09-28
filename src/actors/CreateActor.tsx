import FormActors from "./FormActors";
export default function CreateActor(){
    return(
        <>
            <h3>Crear actor</h3>
            <FormActors
                model={{name: '', birthDate: undefined}}
                onSubmit={values => console.log(values)} />
        </>
    )
}