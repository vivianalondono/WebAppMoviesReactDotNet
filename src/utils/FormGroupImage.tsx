import { useFormikContext } from "formik";
import { ChangeEvent, useState } from "react"

export default function FormGroupImage(props: formGroupImageProps){

    const divStyle = {marginTop:'10px'}
    const imgStyle = {width: '450px'}

    const [imageBase64, setImageBase64] = useState('');
    const [imageUrl, setImageUrl] = useState(props.imageUrl);

    const {values} = useFormikContext<any>();

    const HandleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files){
            const file = e.currentTarget.files[0];
            toBase64(file)
                .then((base64Representation:string) => setImageBase64(base64Representation))
                .catch(error => console.error(error)
                )
            values[props.field] = file;
            setImageUrl('');
        }
    }

    const toBase64 = (file: File) => {
        return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        })
    }

    return(
        <div className="form-group">
            <label>{props.label}</label>
            <div>
                <input type="file" accept=".jpg, .jpeg, .png" onChange={HandleOnChange}/>
            </div>
            {imageBase64? 
            <div>
                <div style={divStyle}>
                    <img style={imgStyle} src={imageBase64} alt="Selected" />
                </div>
            </div>:null}
            {imageUrl? 
            <div>
                <div style={divStyle}>
                    <img style={imgStyle} src={imageUrl} alt="Selected" />
                </div>
            </div>:null}
        </div>
    )
}

interface formGroupImageProps{
    field: string;
    label: string;
    imageUrl:string;
}

FormGroupImage.defaultProps = {
    imageUrl: ''
}