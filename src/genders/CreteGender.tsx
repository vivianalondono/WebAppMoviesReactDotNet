import FormGender from "./FormGender";

export default function CreateGender(){
    //const history = useHistory();
    return(
        <>
            <h3>Crear género</h3>
            <FormGender model={{name: ''}}
                onSubmit={async values => {
                    await new Promise(r => setTimeout (r, 3000))
                    console.log(values)
                }} 
            />
        </>
        
    )
}