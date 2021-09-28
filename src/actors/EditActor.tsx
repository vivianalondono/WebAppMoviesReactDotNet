import FormActors from "./FormActors";

export default function EditActor(){
    return(
        <>
            <h3>Editar actor</h3>
            <FormActors
                model={{name: 'Tom Holland', 
                biography: `# Tom
                ha nacido **tom**`,
                birthDate: new Date('1996-06-06'),
                photoURL:'https://assets.entrepreneur.com/content/3x2/2000/20191008174508-TomHolland.jpeg'}}
                onSubmit={values => console.log(values)} />
        </>
    )
}