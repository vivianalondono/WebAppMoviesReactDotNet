import FormCinemas from "./FormCinemas";

export default function EditCinema(){
    return(
        <>
            <h3>Editar cine</h3>
            <FormCinemas 
                model={{name:'Tesoro', latitude: 6.202455616038820, length: -75.56621789932252}}
                onSubmit={values => console.log(values)}/>
        </>
    )
}