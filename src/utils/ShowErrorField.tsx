export default function ShowWErrorField(props:showErrorFieldProps){
    return(
        <div className="text-danger">{props.message}</div>
    )
}

interface showErrorFieldProps{
    message:string;
}