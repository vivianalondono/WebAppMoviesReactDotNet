import { useParams } from "react-router"

export default function EditGender(){
    const {id}: any = useParams();
    return(
        <>
        <h3>Edit género</h3>
        <h4>El id es {id}</h4>
        </>
    )
}