import React from 'react';
//import { useParams } from "react-router"
import FormGender from "./FormGender";

export default function EditGender(){
    //const {id}: any = useParams();
    return(
        <>
            <h3>Edit género</h3>
            <FormGender model={{name: 'Acción'}}
                    onSubmit={async values => {
                        await new Promise(r => setTimeout (r, 3000))
                        console.log(values)
                    }} 
            />
        </>
    )
}