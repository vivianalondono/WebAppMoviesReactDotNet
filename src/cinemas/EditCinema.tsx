import FormCinemas from "./FormCinemas";

export default function EditCinema(){
    return(
        <>
            <h3>Editar cine</h3>
            <FormCinemas 
                model={{name:'Sambil'}}
                onSubmit={values => console.log(values)}/>
        </>
    )
}